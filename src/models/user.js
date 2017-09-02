
import {createAction} from "../utils/index";
import * as appService from "../services/app";
import {userIdKey, usernameKey} from "../components/common/Constants";

const column1=[
  { title:'工号',dataIndex:'usercode',key:'usercode'},
  { title:'姓名',dataIndex:'username',key:'username'},
  { title:'岗位薪资',dataIndex:'jobSalary',key:'jobSalary'},
  { title:'薪级工资',dataIndex:'wagePay',key:'wagePay'},
  { title:'补贴款',dataIndex:'subsidy',key:'subsidy'},
  { title:'岗贴二',dataIndex:'jobSubsidy',key:'jobSubsidy'},
  { title:'房补',dataIndex:'houseSubsidy',key:'houseSubsidy'},
  { title:'管理津贴',dataIndex:'managerSubsidy',key:'managerSubsidy'},
  { title:'责任津贴',dataIndex:'responsibilitySubsidy',key:'responsibilitySubsidy'},
  { title:'教师津贴',dataIndex:'teacherSubsidy',key:'teacherSubsidy'},
]
const column2=[
  { title:'教辅津贴',dataIndex:'teacherAssistSubsidy',key:'teacherAssistSubsidy'},
  { title:'绩效津贴',dataIndex:'achievementSubsidy',key:'achievementSubsidy'},
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

]
const column3=[
  {
    title:'失业保险',dataIndex:'unemploymentInsurance',key:'unemploymentInsurance',
    children:[
      {title:'单位0.5%',dataIndex:'unemploymentInsuranceUnit',key:'unemploymentInsuranceUnit'},
      {title:'个人0.5%',dataIndex:'unemploymentInsurancePersonal',key:'unemploymentInsurancePersonal'},
    ]
  },
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

]
const column4=[
  {
    title:'新住房公积金',dataIndex:'housePay',key:'housePay',
    children:[
      {title:'单位12%',dataIndex:'housePayUnit',key:'housePayUnit'},
      {title:'个人12%',dataIndex:'housePayPersonal',key:'housePayPersonal'},
    ]
  },
  {title:'公积金单位补缴额',dataIndex:'fundUnit',key:'fundUnit'},
  {title:'公积金个人补缴额',dataIndex:'fundPersonal',key:'fundPersonal'},
  {
    title:'单位缴纳',
    children:[
      {title:'小计',dataIndex:'unitPayTotal',key:'unitPayTotal'},
    ]
  },
  {
    title:'个人缴纳',
    children:[
      {title:'小计',dataIndex:'personalPayTotal',key:'personalPayTotal'},
    ]
  },
  {
    title:'五险一金',
    children:[
      {title:'合计',dataIndex:'fiveOneTotal',key:'fiveOneTotal'},
    ]
  },
  {title:'应发工资',dataIndex:'shouldPay',key:'shouldPay'},
  {title:'个税',dataIndex:'personalTax',key:'personalTax'},
  {title:'实发工资',dataIndex:'factPay',key:'factPay'},
  {title:'服务费',dataIndex:'serviceTax',key:'serviceTax'},
  {title:'单位付款总计',dataIndex:'unitFinalPay',key:'unitFinalPay'},
]
const data=[
  [{
    achievementSubsidy:'',
    bearInsurance:'',
    decimalMedicalPersonal:'',
    decimalMedicalUnit:'',
    housePayBase:'',
    housePayPersonal:'',
    housePayUnit:'',
    houseSubsidy:'',
    id:'',
    injuryWorkUnsuranceUnit:'',
    jobSalary:'',
    jobSubsidy:'',
    managerSubsidy:'',
    medicalInsurancePersonal:'',
    medicalInsuranceUnit:'',
    medicalPayBase:'',
    name:'',
    pensionBase:'',
    pensionPersonal:'',
    pensionUnit:'',
    responsibilitySubsidy:'',
    salaryCount:'',
    specialSubsidy:'',
    subsidy:'',
    subsidyAdd:'',
    subsidyCount:'',
    teacherAssistSubsidy:'',
    teacherSubsidy:'',
    time:new Date().getTime()+'',
    totalSalary:'',
    unemploymentInsurancePersonal:'',
    unemploymentInsuranceUnit:'',
    wagePay:''
  }],
]

export default {
  namespace: 'user',
  state: {
    data:[],
    column1,
    column2,
    column3,
    column4,
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
    *getData({payload},{call,put}){
      let data=yield call(appService.getSalaryData,{usercode:window.localStorage.getItem(usernameKey)})
      let temp=[];
      data.map((item,index)=>{
        item.key=index;
        temp.push([item]);
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
