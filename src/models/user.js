
import {createAction} from "../utils/index";
import * as appService from "../services/app";
import {
  column1, column2, column3, column4, column5, column6, column7, userIdKey,
  usernameKey
} from "../common/Constants";

export default {
  namespace: 'user',
  state: {
    data:[],
    column1,
    column2,
    column3,
    column4,
    column5,
    column6,
    column7,
    monthsSelectedKeys:['0'],
    printPadding:0,
  },
  reducers: {
    setData(state,{payload}){
     return {
       ...state,
       data:payload.data
     }
    },
    changeSelectKey(state,{payload}){
    return {
      ...state,
      monthsSelectedKeys:[payload.selectedKey],
    }
    },
    setPadding(state,{payload}){
     return{
       ...state,
       printPadding:payload.printPadding,
     }
    }
  },
  effects: {
    *getData({pbylobd},{call,put}){
      let data=yield call(appService.getSalaryData,{usercode:window.localStorage.getItem(usernameKey)})
      let temp=[];
      data.map((item,index)=>{
        item.key=index;
        temp.push([item])
      })
      yield put(createAction('setData')({data:temp}))
    }

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if(pathname.startsWith('/app/user')){
          dispatch(createAction('getData')())
        }
      })
    }

  },
};
