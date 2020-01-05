import { useState } from 'react'
// import axios from 'axios'

export const useUser = () => {
  const [user, setUser] = useState({
    username: 'Sandra Wells',
    role: '2',
    status: 'in',
    code: '#202066'
  })

  return {
    user,
    setUser
  }
}
