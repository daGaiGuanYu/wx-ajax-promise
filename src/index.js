import common from './common'

module.exports = {
  get: (url, query, header) => common({
    method: 'get',
    url, query, header
  }),
  post: (url, data, header) => common({
    method: 'post',
    url, data, header
  }),
  delete: (url, data, header) => common({
    method: 'delete',
    url, data, header
  })
}