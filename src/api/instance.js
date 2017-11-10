import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://'+location.hostname+':3001/api/',
  headers: { 'Content-Type': 'application/json' }
})

export default instance
