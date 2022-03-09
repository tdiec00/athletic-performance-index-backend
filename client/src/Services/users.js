import {api} from "./apiConfig"

export const loginUser = async (loginData) => {
  const resp = await api.post(`signin`, loginData)
  localStorage.setItem("authToken", resp.data.token)
  localStorage.setItem("id", resp.data.user.id)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post("users", registerData)
  localStorage.setItem("authToken", resp.data.token)
  localStorage.setItem("id", resp.data.user.id)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}
