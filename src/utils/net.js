/**
 * Created by wangzhen on 2017/7/13.
 */
import request from '../utils/request';
import qs ,{ parse } from 'qs';
import FormDataWrapper from 'object-to-formdata';
import merge from 'merge-object';

const cookieTrue = {
  credentials: 'include'
};
const jsonConf = {
  headers: {
    'Content-Type': 'application/json'
  }
}

async function POST(url,params,isJson){
  if(isJson === undefined){isJson = false};
  return request( url,merge({
    method: 'POST',
    body:isJson?JSON.stringify(params):FormDataWrapper(params),
  },isJson?merge(jsonConf,cookieTrue):cookieTrue));
}

async function GET(url,params){
  return request( url + `?${qs.stringify(params)}`,merge({
    method: 'GET',
  },cookieTrue));
}

export {POST,GET}
