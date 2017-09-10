/**
 * Created by wangzhen on 2017/8/25.
 */
// export const baseUrl="http://115.159.211.47:8090"
// export const baseUrl = "http://127.0.0.1:8090"
export const baseUrl="http://202.118.27.233:8090"
// export const baseUrl="/api"

export const storageTokenKey = 'myTokenKey';

export const usernameKey = 'username';

export const userIdKey = "userIdKey";

export const roleKey = "roleKey";


export const column1 = [
  {title: '工号', dataIndex: 'usercode', key: 'usercode'},
  {title: '姓名', dataIndex: 'username', key: 'username'},
  {title: '岗位工资', dataIndex: 'jobSalary', key: 'jobSalary'},
  {title: '补发岗位工资', dataIndex: 'otherJobSalary', key: 'otherJobSalary'},
  {title: '薪级工资', dataIndex: 'wagePay', key: 'wagePay'},
  {title: '补发薪级工资', dataIndex: 'otherWagePay', key: 'otherWagePay'},
  {title: '补贴款', dataIndex: 'subsidy', key: 'subsidy'},
  {title: '补发补贴款', dataIndex: 'otherSubsidy', key: 'otherSubsidy'},
]
export const column2 = [
  {title: '岗贴二', dataIndex: 'jobSubsidy', key: 'jobSubsidy'},
  {title: '补发岗贴二', dataIndex: 'otherJobSubsidy', key: 'otherJobSubsidy'},
  {title: '房补', dataIndex: 'houseSubsidy', key: 'houseSubsidy'},
  {title: '补发房补', dataIndex: 'otherHouseSubsidy', key: 'otherHouseSubsidy'},
  {title: '管理津贴', dataIndex: 'managerSubsidy', key: 'managerSubsidy'},
  {title: '补发管理津贴', dataIndex: 'otherManagerSubsidy', key: 'otherManagerSubsidy'},
  {title: '责任津贴', dataIndex: 'responsibilitySubsidy', key: 'responsibilitySubsidy'},
  {title: '补发责任津贴', dataIndex: 'otherResponsibilitySubsidy', key: 'otherResponsibilitySubsidy'},
]
export const column3 = [
  {title: '教师津贴', dataIndex: 'teacherSubsidy', key: 'teacherSubsidy'},
  {title: '补发教师津贴', dataIndex: 'otherTeacherSubsidy', key: 'otherTeacherSubsidy'},
  {title: '教辅津贴', dataIndex: 'teacherAssistSubsidy', key: 'teacherAssistSubsidy'},
  {title: '补发教辅津贴', dataIndex: 'otherTeacherAssistSubsidy', key: 'otherTeacherAssistSubsidy'},
  {title: '绩效津贴', dataIndex: 'achievementSubsidy', key: 'achievementSubsidy'},
  {title: '补发绩效津贴', dataIndex: 'otherAchievementSubsidy', key: 'otherAchievementSubsidy'},
  {title: '岗贴增量', dataIndex: 'subsidyAdd', key: 'subsidyAdd'},
  {title: '补发岗贴增量', dataIndex: 'otherSubsidyAdd', key: 'otherSubsidyAdd'},

]
export const column4 = [
  {title: '特殊津贴', dataIndex: 'specialSubsidy', key: 'specialSubsidy'},
  {title: '工资额', dataIndex: 'salaryCount', key: 'salaryCount'},
  {title: '津贴额', dataIndex: 'subsidyCount', key: 'subsidyCount'},
  {title: '年终一次性奖', dataIndex: 'finalYearReward', key: 'finalYearReward'},
  {title: '业绩津贴', dataIndex: 'yejiSubsidy', key: 'yejiSubsidy'},
  {title: '目标考核奖', dataIndex: 'targetReward', key: 'targetReward'},
  {title: '实验室评估奖', dataIndex: 'labReward', key: 'labReward'},
  {title: '安全生产考核', dataIndex: 'safeProduceReward', key: 'safeProduceReward'},
]

export const column5 = [
  {title: '自筹年终奖', dataIndex: 'selfYearReward', key: 'selfYearReward'},
  {title: '工资合计', dataIndex: 'totalSalary', key: 'totalSalary'},
  // { title:'养老缴费基数实际',dataIndex:'pensionBase',key:'pensionBase'},
  {
    title: '养老保险', dataIndex: 'pension', key: 'pension',
    children: [
      {title: '单位20%', dataIndex: 'pensionUnit', key: 'pensionUnit'},
      {title: '个人8%', dataIndex: 'pensionPersonal', key: 'pensionPersonal'},
    ]
  },
  {
    title: '失业保险', dataIndex: 'unemploymentInsurance', key: 'unemploymentInsurance',
    children: [
      {title: '单位0.5%', dataIndex: 'unemploymentInsuranceUnit', key: 'unemploymentInsuranceUnit'},
      {title: '个人0.5%', dataIndex: 'unemploymentInsurancePersonal', key: 'unemploymentInsurancePersonal'},
    ]
  },
  {
    title: '工伤保险', dataIndex: 'injuryWorkUnsurance', key: 'injuryWorkUnsurance',
    children: [
      {title: '单位0.7%', dataIndex: 'injuryWorkUnsuranceUnit', key: 'injuryWorkUnsuranceUnit'},
    ]
  },
  // {title:'医疗缴费基数',dataIndex:'medicalPayBase',key:'medicalPayBase'},
  {
    title: '医疗保险', dataIndex: 'medicalInsurance', key: 'medicalInsurance',
    children: [
      {title: '单位8%', dataIndex: 'medicalInsuranceUnit', key: 'medicalInsuranceUnit'},
      {title: '个人2%', dataIndex: 'medicalInsurancePersonal', key: 'medicalInsurancePersonal'},
    ]
  },
]

export const column6 = [
  {
    title: '生育保险', dataIndex: 'bearInsuranceTitle', key: 'bearInsuranceTitle',
    children: [
      {title: '单位0.6%', dataIndex: 'bearInsurance', key: 'bearInsurance'},
    ]
  },
  {
    title: '大额医疗', dataIndex: 'decimalMedical', key: 'decimalMedical',
    children: [
      {title: '单位/年', dataIndex: 'decimalMedicalInsuranceUnit', key: 'decimalMedicalInsuranceUnit'},
      {title: '个人/年', dataIndex: 'decimalMedicalInsurancePersonal', key: 'decimalMedicalInsurancePersonal'},
    ]
  },
  {title: '新住房公积金基数', dataIndex: 'housePayBase', key: 'housePayBase'},
  {
    title: '新住房公积金', dataIndex: 'housePay', key: 'housePay',
    children: [
      {title: '单位12%', dataIndex: 'housePayUnit', key: 'housePayUnit'},
      {title: '个人12%', dataIndex: 'housePayPersonal', key: 'housePayPersonal'},
    ]
  },
  {title: '公积金单位补缴额', dataIndex: 'fundUnit', key: 'fundUnit'},
  {title: '公积金个人补缴额', dataIndex: 'fundPersonal', key: 'fundPersonal'},
]

export const column7 = [
  {title: '个税', dataIndex: 'personalTax', key: 'personalTax'},
  {title: '年终奖税', dataIndex: 'yearRewardTax', key: 'yearRewardTax'},
  {title: '实发工资', dataIndex: 'factPay', key: 'factPay'},
  {title: '服务费', dataIndex: 'serviceTax', key: 'serviceTax'},
  {title: '单位付款总计', dataIndex: 'unitFinalPay', key: 'unitFinalPay'},
]

