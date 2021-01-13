enum Method {
  GET,
  PUT,
  POST
}

const BASE_URL = 'http://127.0.0.1:8080/api/'

const auth = {
  LOGIN: {
    METHOD: Method.POST,
    URL: 'login/'
  },
  LOGOUT: {
    METHOD: Method.POST,
    URL: 'logout/'
  },
  REGISTER: {
    METHOD: Method.POST,
    URL: 'register/'
  }
}

export const API = {
  BASE_URL,
  ...auth
}
