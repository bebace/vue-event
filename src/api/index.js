import request from '@/utils/request'
export const registerAPI = () => {
  return request({
    url: '/api/reguser',
    method: 'POST',
    data: {
      username: 'zyhhapi',
      password: '123456'
    }
  })
}
