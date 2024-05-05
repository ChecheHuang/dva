import request from '../utils/request';

export function getProduct(){
  return request('/api/product'); 
}