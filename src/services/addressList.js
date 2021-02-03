import proxyRequest from 'utils/request';
import {baseUrl} from '../utils/baseServer'
export async function selectPage(params) {
  return proxyRequest.post(baseUrl+'/api/get/list', params);
}