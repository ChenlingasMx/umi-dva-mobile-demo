import proxyRequest from 'utils/request';

export async function reg(params) {
  return proxyRequest.get('/api/home', params);
}
