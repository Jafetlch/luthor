const auth = {
  login: {
    method: 'POST',
    url: '/login'
  },
  register: {
    method: 'POST',
    url: '/register'
  },
  logout: {
    method: 'POST',
    url: '/logout'
  }
}
export const API_ROUTES = {
  api: 'http://127.0.0.1:8000/api',
  ...auth
}
