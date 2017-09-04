import {createAction} from "../utils/index";
import {getSalaryByYear} from "../services/app";
import {usernameKey} from "../common/Constants";

const items = [
  {title: '1月', dataIndex: 'c1', key: 'c1'},
  {title: '2月', dataIndex: 'c2', key: 'c2'},
  {title: '3月', dataIndex: 'c3', key: 'c3'},
  {title: '4月', dataIndex: 'c4', key: 'c4'},
  {title: '5月', dataIndex: 'c5', key: 'c5'},
  {title: '6月', dataIndex: 'c6', key: 'c6'},
  {title: '7月', dataIndex: 'c7', key: 'c7'},
  {title: '8月', dataIndex: 'c8', key: 'c8'},
  {title: '9月', dataIndex: 'c9', key: 'c9'},
  {title: '10月', dataIndex: 'c10', key: 'c10'},
  {title: '11月', dataIndex: 'c11', key: 'c11'},
  {title: '12月', dataIndex: 'c12', key: 'c12'},
]
const defaultColumn = [
  {width: 150, title: '工资项', dataIndex: 'title', key: 'title'},
  {title: '1月', dataIndex: 'c1', key: 'c1'},
  {title: '2月', dataIndex: 'c2', key: 'c2'},
  {title: '3月', dataIndex: 'c3', key: 'c3'},
  {title: '4月', dataIndex: 'c4', key: 'c4'},
  {title: '5月', dataIndex: 'c5', key: 'c5'},
  {title: '6月', dataIndex: 'c6', key: 'c6'},
  {title: '7月', dataIndex: 'c7', key: 'c7'},
  {title: '8月', dataIndex: 'c8', key: 'c8'},
  {title: '9月', dataIndex: 'c9', key: 'c9'},
  {title: '10月', dataIndex: 'c10', key: 'c10'},
  {title: '11月', dataIndex: 'c11', key: 'c11'},
  {title: '12月', dataIndex: 'c12', key: 'c12'},
  {title: '总计', dataIndex: 'total', key: 'total'},
]
export default {
  namespace: 'search',
  state: {
    fullYearData: [],
    data: [],
    column: defaultColumn,
    selectYear: new Date().getFullYear(),
  },
  reducers: {
    changeColumn(state, {payload}) {
      return {
        ...state,
        column: payload.column
      }
    },
    changeFullYearData(state, {payload}) {
      return {
        ...state,
        fullYearData: payload.fullYearData
      }
    },
    setData(state, {payload}) {
      return {
        ...state,
        data: payload.data
      }
    },
    setSelectYear(state, {payload}) {
      return {
        ...state,
        selectYear: payload.selectYear
      }
    }

  },
  effects: {
    * getData({payload}, {call, put}) {
      let fullYearData = yield call(getSalaryByYear, {
        year: payload.year,
        usercode: window.localStorage.getItem(usernameKey)
      })
      yield put(createAction('changeFullYearData')({fullYearData}))
      yield put(createAction('setData')({data: fullYearData}))
    },
    * searchData({payload}, {call, put, select}) {
      let column = [
        {width: 150, title: '工资项', dataIndex: 'title', key: 'title'},
      ]
      let firstDate = payload.firstDate.getMonth()
      let lastDate = payload.lastDate.getMonth()
      for (let i = firstDate; i <= lastDate; i++) {
        column.push(items[i])
      }
      column.push(
        {title: '总计', dataIndex: 'total', key: 'total'},
      )
      yield put(createAction('changeColumn')({column}))

      let search = yield select(state => state.search);
      if (search.selectYear !== payload.firstDate.getFullYear()) {
        yield put(createAction('getData')({year:payload.firstDate.getFullYear()}))
        yield put(createAction('setSelectYear')({selectYear:payload.firstDate.getFullYear()}))
      }

      search = yield select(state => state.search);
      for (let i = 0; i < search.data.length; i++) {
        search.data[i]['total'] = 0
        for (let j = firstDate + 1; j <= lastDate + 1; j++) {
          search.data[i]['total'] += search.data[i]['c' + j];
        }
      }
      yield put(createAction('setData')({data: search.data}))
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname.startsWith('/app/user/salarySearch')) {
          dispatch(createAction('getData')({year: new Date().getFullYear()}))
          dispatch(createAction('changeColumn')({column: defaultColumn}))
        }
      })
    }
  },
};
