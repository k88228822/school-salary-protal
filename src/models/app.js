import {createAction} from "../utils/index";
import {routerRedux} from 'dva/router'
import {notification} from 'antd'
import * as appService from "../services/app";
import {usernameKey} from "../components/common/Constants";
import {userIdKey} from "../components/common/Constants";
import {storageTokenKey} from "../components/common/Constants";

const userTitle = [
  {key: '1', title: '查询', url: ''},
  {key: '2', title: '修改密码', url: ''},
]

const adminTitle = [
  {key: '0', title: '上传', url: ''},
  {key: '2', title: '修改密码', url: ''},
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
    }
  },

  effects: {

    * login({payload}, {call, put}) {

      let response= yield call(appService.login, {username: payload.userName, password: payload.password})
      let rank=response.roles[0].authority==='ROLE_ADMIN'? 0:1;
      yield put(createAction('loginSuccess')({rank}))

      window.localStorage.setItem(storageTokenKey,response.token);
      window.localStorage.setItem(usernameKey,response.username);
      window.localStorage.setItem(userIdKey,response.id);

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

    * changePassword({payload}, {call, put, select}) {
      yield call(appService.changePassword, {
        name: window.localStorage.getItem(usernameKey),
        password: payload.prePassword, newPassword: payload.password1
      })
      notification['success']({
        message: `修改成功，请重新登录`,
        description: ``,
        duration: 5,
        style: {height: 80, paddingBottom: 10},
      });
      yield put(routerRedux.push('/app/login'));
    }

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {

        if (pathname.indexOf('/app') >= 0 && query !== undefined) {
          dispatch(createAction('changeSelectKey')({selectedKey: query.key}))
        }
        if (pathname.startsWith('/app/admin')) {
          dispatch(createAction('setTitle')({title: adminTitle}))
        } else if (pathname.startsWith('/app/user')) {
          dispatch(createAction('setTitle')({title: userTitle}))
        } else {
          dispatch(createAction('setTitle')({title: []}))
        }

      });
    },
  },
};
