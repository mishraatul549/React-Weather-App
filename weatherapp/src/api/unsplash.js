import axios from 'axios'

export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers:{Authorization:'Client-ID fcd338d5cd53ad00f5de435aba10e4fe654075dfa3a3360cc2fde80afbaf97cc'}
}

);
