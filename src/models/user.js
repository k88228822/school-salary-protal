
import {createAction} from "../utils/index";
import * as appService from "../services/app";
import {userIdKey} from "../components/common/Constants";

const data=[
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }
];
const column1=[
  { title:'岗位薪资',dataIndex:'jobSalary',key:'jobSalary'},
  { title:'薪级工资',dataIndex:'wagePay',key:'wagePay'},
  { title:'补贴款',dataIndex:'subsidy',key:'subsidy'},
  { title:'岗贴二',dataIndex:'jobSubsidy',key:'jobSubsidy'},
  { title:'房补',dataIndex:'houseSubsidy',key:'houseSubsidy'},
  { title:'管理津贴',dataIndex:'managerSubsidy',key:'managerSubsidy'},
  { title:'责任津贴',dataIndex:'responsibilitySubsidy',key:'responsibilitySubsidy'},
  { title:'教师津贴',dataIndex:'teacherSubsidy',key:'teacherSubsidy'},
  { title:'教辅津贴',dataIndex:'teacherAssistSubsidy',key:'teacherAssistSubsidy'},
  { title:'绩效津贴',dataIndex:'achievementSubsidy',key:'achievementSubsidy'},
]
const column2=[
  { title:'岗贴增量',dataIndex:'subsidyAdd',key:'subsidyAdd'},
  { title:'特殊津贴',dataIndex:'specialSubsidy',key:'specialSubsidy'},
  { title:'工资额',dataIndex:'salaryCount',key:'salaryCount'},
  { title:'津贴额',dataIndex:'subsidyCount',key:'subsidyCount'},
  { title:'工资合计',dataIndex:'totalSalary',key:'totalSalary'},
  { title:'养老缴费基数实际',dataIndex:'pensionBase',key:'pensionBase'},
  {
    title:'养老保险',dataIndex:'pension',key:'pension',
    children:[
      {title:'单位20%',dataIndex:'pensionUnit',key:'pensionUnit'},
      {title:'个人8%',dataIndex:'pensionPersonal',key:'pensionPersonal'},
    ]
  },
  {
    title:'失业保险',dataIndex:'unemploymentInsurance',key:'unemploymentInsurance',
    children:[
      {title:'单位0.5%',dataIndex:'unemploymentInsuranceUnit',key:'unemploymentInsuranceUnit'},
      {title:'个人0.5%',dataIndex:'unemploymentInsurancePersonal',key:'unemploymentInsurancePersonal'},
    ]
  },

]
const column3=[
  {
    title:'工伤保险',dataIndex:'injuryWorkUnsurance',key:'injuryWorkUnsurance',
    children:[
      {title:'单位0.7%',dataIndex:'injuryWorkUnsuranceUnit',key:'injuryWorkUnsuranceUnit'},
    ]
  },
  {title:'医疗缴费基数',dataIndex:'medicalPayBase',key:'medicalPayBase'},
  {
    title:'医疗保险',dataIndex:'medicalInsurance',key:'medicalInsurance',
    children:[
      {title:'单位8%',dataIndex:'medicalInsuranceUnit',key:'medicalInsuranceUnit'},
      {title:'个人2%',dataIndex:'medicalInsurancePersonal',key:'medicalInsurancePersonal'},
    ]
  },
  {
    title:'生育保险',dataIndex:'bearInsuranceTitle',key:'bearInsuranceTitle',
    children:[
      {title:'单位0.6%',dataIndex:'bearInsurance',key:'bearInsurance'},
    ]
  },
  {
    title:'大额医疗',dataIndex:'decimalMedical',key:'decimalMedical',
    children:[
      {title:'单位/年',dataIndex:'decimalMedicalUnit',key:'decimalMedicalUnit'},
      {title:'个人/年',dataIndex:'decimalMedicalPersonal',key:'decimalMedicalPersonal'},
    ]
  },
  {title:'新住房公积金基数',dataIndex:'housePayBase',key:'housePayBase'},
  {
    title:'新住房公积金',dataIndex:'housePay',key:'housePay',
    children:[
      {title:'单位12%',dataIndex:'housePayUnit',key:'housePayUnit'},
      {title:'个人12%',dataIndex:'housePayPersonal',key:'housePayPersonal'},
    ]
  },

]

const columns=[
  { width:120,title:'岗位薪资',dataIndex:'jobSalary',key:'jobSalary'},
  { width:120,title:'薪级工资',dataIndex:'wagePay',key:'wagePay'},
  { width:120,title:'补贴款',dataIndex:'subsidy',key:'subsidy'},
  { width:120,title:'岗贴二',dataIndex:'jobSubsidy',key:'jobSubsidy'},
  { width:120,title:'房补',dataIndex:'houseSubsidy',key:'houseSubsidy'},
  { width:120,title:'管理津贴',dataIndex:'managerSubsidy',key:'managerSubsidy'},
  { width:120,title:'责任津贴',dataIndex:'responsibilitySubsidy',key:'responsibilitySubsidy'},
  { width:120,title:'教师津贴',dataIndex:'teacherSubsidy',key:'teacherSubsidy'},
  { width:120,title:'教辅津贴',dataIndex:'teacherAssistSubsidy',key:'teacherAssistSubsidy'},
  { width:120,title:'绩效津贴',dataIndex:'achievementSubsidy',key:'achievementSubsidy'},
  { width:120,title:'岗贴增量',dataIndex:'subsidyAdd',key:'subsidyAdd'},
  { width:120,title:'特殊津贴',dataIndex:'specialSubsidy',key:'specialSubsidy'},
  { width:120,title:'工资额',dataIndex:'salaryCount',key:'salaryCount'},
  { width:120,title:'津贴额',dataIndex:'subsidyCount',key:'subsidyCount'},
  { width:120,title:'工资合计',dataIndex:'totalSalary',key:'totalSalary'},
  { width:120,title:'养老缴费基数实际',dataIndex:'pensionBase',key:'pensionBase'},
  {
    title:'养老保险',dataIndex:'pension',key:'pension',
    children:[
      {width:120,title:'单位20%',dataIndex:'pensionUnit',key:'pensionUnit'},
      {width:120,title:'个人8%',dataIndex:'pensionPersonal',key:'pensionPersonal'},
    ]
  },
  {
    title:'失业保险',dataIndex:'unemploymentInsurance',key:'unemploymentInsurance',
    children:[
      {width:120,title:'单位0.5%',dataIndex:'unemploymentInsuranceUnit',key:'unemploymentInsuranceUnit'},
      {width:120,title:'个人0.5%',dataIndex:'unemploymentInsurancePersonal',key:'unemploymentInsurancePersonal'},
    ]
  },
  {
    title:'工伤保险',dataIndex:'injuryWorkUnsurance',key:'injuryWorkUnsurance',
    children:[
      {width:120,title:'单位0.7%',dataIndex:'injuryWorkUnsuranceUnit',key:'injuryWorkUnsuranceUnit'},
    ]
  },
  {width:120,title:'医疗缴费基数',dataIndex:'medicalPayBase',key:'medicalPayBase'},
  {
    title:'医疗保险',dataIndex:'medicalInsurance',key:'medicalInsurance',
    children:[
      {width:120,title:'单位8%',dataIndex:'medicalInsuranceUnit',key:'medicalInsuranceUnit'},
      {width:120,title:'个人2%',dataIndex:'medicalInsurancePersonal',key:'medicalInsurancePersonal'},
    ]
  },
  {
    title:'生育保险',dataIndex:'bearInsuranceTitle',key:'bearInsuranceTitle',
    children:[
      {width:120,title:'单位0.6%',dataIndex:'bearInsurance',key:'bearInsurance'},
    ]
  },
  {
    title:'大额医疗',dataIndex:'decimalMedical',key:'decimalMedical',
    children:[
      {width:120,title:'单位/年',dataIndex:'decimalMedicalUnit',key:'decimalMedicalUnit'},
      {width:120,title:'个人/年',dataIndex:'decimalMedicalPersonal',key:'decimalMedicalPersonal'},
    ]
  },
  {width:120,title:'新住房公积金基数',dataIndex:'housePayBase',key:'housePayBase'},
  {
    title:'新住房公积金',dataIndex:'housePay',key:'housePay',
    children:[
      {width:120,title:'单位12%',dataIndex:'housePayUnit',key:'housePayUnit'},
      {width:120,title:'个人12%',dataIndex:'housePayPersonal',key:'housePayPersonal'},
    ]
  },
]
export default {
  namespace: 'user',
  state: {
    data:[],
    columns,
    column1,
    column2,
    column3,
  },
  reducers: {
    setData(state,{payload}){
     return {
       ...state,
       data:payload.data
     }
    }
  },
  effects: {
    *getData({payload},{call,put}){
      let data=yield call(appService.getSalaryData,{id:6})
        // let data=yield call(appService.getSalaryData,{id:window.localStorage.getItem(userIdKey)})
        data.map((item,index)=> {
          item.key = index
        })
      console.log(JSON.stringify(data[0])['wagePay'])
        yield put(createAction('setData')({data}))
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
