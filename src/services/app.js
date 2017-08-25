/**
 * Created by wangzhen on 2017/8/23.
 */

import * as Net from "../utils/net";

export function login(params) {
  return Net.POST('/api/login',{...params},false)
}

export function changePassword(params) {
  return Net.POST('/api/updatePassword',{...params})
}

export function getSalaryData(params) {
  return Net.GET('/api/getSalary',{...params})
}
