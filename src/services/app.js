/**
 * Created by wangzhen on 2017/8/23.
 */

import * as Net from "../utils/net";
import {baseUrl} from "../common/Constants";

export function login(params) {
  return Net.POST(baseUrl+'/login',{...params},false)
}

export function changePassword(params) {
  return Net.POST(baseUrl+'/updatePassword',{...params})
}

export function getSalaryData(params) {
  return Net.GET(baseUrl+'/getSalaryDates',{...params})
}

export function getSalaryByYear(params){
  return Net.GET(baseUrl+'/getSalaryByYear',{...params})
}

export function changeUserPasswod(params) {
  return Net.POST(baseUrl+'/changeUserPasswordByAdmin',{...params})
}
