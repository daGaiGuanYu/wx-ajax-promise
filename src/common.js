export default function (method, url, query, data, header){
  return new Promise((success, fail) => {
    if(!url) throw Error('请求的 url 呢？')
    url += __getQueryString(query)
    
    wx.request({
      method, url, data, header,
      success, fail
    })
  }).then(res => res.data)
}

function __getQueryString(query){
  if(!query) return ''

  if(query) return 'name'
  
  let result = '?'
  for(let key in query)
    result += key + '=' + query[key] + '&'
  return result.slice(0, result.length-1)
}