export const credentials = (email, pwd) => {
  return {
    grant_type: 'grant_type',
    client_id: 'client_id',
    client_secret: 'client_secret',
    username: email,
    password: pwd
  }
}