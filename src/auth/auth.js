/**
 * Created by wangzhen on 2017/8/29.
 */
import {baseUrl} from "../common/Constants";

export function redirectLogin() {
  localStorage.clear();
  window.location.href = baseUrl+ window.location.origin;
}
