import api from '../api/instance'

let currentUser = JSON.parse(localStorage.getItem('currentUser'))

export const authenticate = async user => {
  const body = JSON.stringify(user)
  const response = await api.post('authenticate', body)
  currentUser = response.data
  if (currentUser) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
    return Promise.resolve()
  } else {
    return Promise.reject()
  }
}

export const isLoggedIn = () => {
  return currentUser != null
}

export const logout = cb => {
  currentUser = null
  localStorage.removeItem('currentUser')
  cb()
}
