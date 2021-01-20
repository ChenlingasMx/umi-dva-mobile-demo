import proxyRequest from 'utils/request';
import {baseUrl} from '../utils/baseServer'
export async function login(params) {
  return proxyRequest.post(baseUrl+'/api/login', params);
}
