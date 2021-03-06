import {createAction} from "../utils/index";
import {routerRedux} from 'dva/router'
import {notification} from 'antd'
import * as appService from "../services/app";
import {roleKey, usernameKey} from "../common/Constants";
import {userIdKey} from "../common/Constants";
import {storageTokenKey} from "../common/Constants";

const userTitle = [
  {key: '1', title: '明细查询', url: ''},
  {key: '3', title: '汇总查询', url: ''},
  {key: '2', title: '修改密码', url: ''},
]

const adminTitle = [
  {key: '0', title: '上传', url: ''},
  {key: '2', title: '其他', url: ''},
]

export default {
  namespace: 'app',
  state: {
    title: [],
    selectedKeys: ['0'],
    name: '',
    password: '',
    rank: -1,
  },
  reducers: {
    changeSelectKey(state, {payload}) {
      return {
        ...state,
        selectedKeys: [payload.selectedKey]
      }
    },
    loginSuccess(state, {payload}) {
      return {
        ...state,
        rank: payload.rank,
      }
    },
    setTitle(state, {payload}) {
      return {
        ...state,
        title: payload.title
      }
    },
    setShowReload(state,{payload}){
      return{
        ...state,
        showReload:payload.showReload
      }
    }
  },

  effects: {

    * login({payload}, {call, put}) {

      let response = yield call(appService.login, {username: payload.userName, password: payload.password})
      let rank = response.roles[0].authority === 'ROLE_ADMIN' ? 0 : 1;
      yield put(createAction('loginSuccess')({rank}))
      window.localStorage.setItem(storageTokenKey, response.token);
      window.localStorage.setItem(usernameKey, response.username);
      window.localStorage.setItem(userIdKey, response.id);
      window.localStorage.setItem(roleKey, response.roles[0].authority);
      rank === 0 ?
        yield put(routerRedux.push('/app/admin/upload?key=0'))
        :
        yield put(routerRedux.push('/app/user?key=1'))
    },

    * checkPassword({payload}, {call, select, put}) {
      let app = yield select(state => state.app);
      if (app.name === '' || app.password === '') {
        yield put(routerRedux.push('/app/login'))
      } else {
        let user = yield call(appService.login, {name: app.name, password: app.password})
        yield put(createAction('loginSuccess')({...user}))
      }
    },

    * changePassword({payload}, {call, put, }) {
      yield call(appService.changePassword, {
        name: payload.userName,
        password: payload.prePassword, newPassword: payload.password1
      })
      notification['success']({
        message: `修改成功，请重新登录`,
        description: ``,
        duration: 3,
        style: {height: 80, paddingBottom: 10},
      });
      yield put(routerRedux.push('/app/login'));
    },
    * adminChangeUserPassword({payload},{call,put}){
      yield call(appService.changeUserPasswod,{userName:payload.userName,newPassword:payload.password1})
      notification['success']({
        message: `修改成功`,
        description: ``,
        duration: 2,
        style: {height: 80, paddingBottom: 10},
      });
    },
    *reload({payload},{put}){
      window.localStorage.removeItem(storageTokenKey);
      window.localStorage.removeItem(usernameKey);
      window.localStorage.removeItem(userIdKey);
      window.localStorage.removeItem(roleKey);
      yield put(routerRedux.push('/app/login'));
    }

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {

        if (pathname.indexOf('/app') >= 0 && query !== undefined) {
          dispatch(createAction('changeSelectKey')({selectedKey: query.key}))
        }

        if (pathname.indexOf('/app/admin')>=0) {
          window.localStorage.getItem(roleKey) === 'ROLE_ADMIN' ?
            dispatch(createAction('setTitle')({title: adminTitle}))
            :
            dispatch(routerRedux.push('/app/login'));

        } else if (pathname.indexOf('/app/user')>=0) {
          window.localStorage.getItem(roleKey) === 'ROLE_USER' ?
            dispatch(createAction('setTitle')({title: userTitle}))
            :
            dispatch(routerRedux.push('/app/login'))
        } else {
          dispatch(createAction('setTitle')({title: []}))
        }

      });
    },
  },
};
