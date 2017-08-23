import {createAction} from "../utils/index";
import {routerRedux} from 'dva/router'
import * as appService from "../services/app";

const userTitle = [
  {key: '0', title: '查询', url: ''},
  {key: '2', title: '修改密码', url: ''},
]

const adminTitle = [
  {key: '1', title: '上传', url: ''},
  {key: '2', title: '修改密码', url: ''},
]

export default {
  namespace: 'app',
  state: {
    title: [],
    selectedKeys: ['0'],
    name: 'wang',
    password: '12345',
    rank: 1,
  },
  reducers: {
    changeSelectKey(state, {payload}) {
      return {
        ...state,
        selectedKeys: [`${payload.selectedKey}`]
      }
    },
    loginSuccess(state, {payload}) {
      return {
        ...state,
        name: payload.name,
        password: payload.password,
        rank: payload.rank,
      }
    },
    setTitle(state,{payload}){
      return{
        ...state,
        title:payload.title
      }
    }
  },

  effects: {
    *login({payload},{call,put}){
      let user=yield call(appService.login,{name:payload.userName,password:payload.password})
      yield put(createAction('loginSuccess')({...user}))
      user.rank===0?
        yield put(routerRedux.push('/app/admin'))
        :
        yield put(routerRedux.push('/app/user'))
    },
    * checkPassword({payload}, {call, select, put}) {
      let app = yield select(state => state.app);
      if(app.name===''||app.password==='') {
        yield put(routerRedux.push('/app/login'))
      }else {
        try {
          let user = yield call(appService.login, {name: app.name, password: app.password})
          yield put(createAction('loginSuccess')({...user}))
        } catch (e) {
          window.alert(e.message)
          yield put(routerRedux.push('/app/login'));
        }
      }
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {

        if (pathname.startsWith('/app/admin')) {
          dispatch(createAction('checkPassword')())
          dispatch(createAction('setTitle')({title:adminTitle}))
        }else if (pathname.startsWith('/app/user')) {
          dispatch(createAction('setTitle')({title:userTitle}))
        }else{
          dispatch(createAction('setTitle')({title:[]}))
        }

        switch (pathname) {
          case '/app/admin':
            dispatch(createAction('changeSelectKey')({selectedKey: 0}))
            break;
          case '/app/admin/upload':
            dispatch(createAction('changeSelectKey')({selectedKey: 1}))
            break;
          case '/app/admin/password':
            dispatch(createAction('changeSelectKey')({selectedKey: 2}))
            break;
          default:
            dispatch(createAction('changeSelectKey')({selectedKey: 0}))
        }

      });
    },
  },
};
