import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/faq/list',
    method: 'post',
    data: query
  })
}