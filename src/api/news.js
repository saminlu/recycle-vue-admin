import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/news/list',
    method: 'post',
    data: query
  })
}

export function fetchNews(id) {
  return request({
    url: '/news/detail/'+id ,
    method: 'get',
  })
}

export function createNews(data) {
  return request({
    url: '/news/create',
    method: 'post',
    data
  })
}

export function updateNews(data) {
  return request({
    url: '/news/update',
    method: 'post',
    data
  })
}
