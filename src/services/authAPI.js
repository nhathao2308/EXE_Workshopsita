import axiosInstance from '@/configs/axios'

export const LoginService = (data) => {
  return axiosInstance.post('api/Auth/login', data)
}

export const RegisterService = (data) => {
  return axiosInstance.post('api/Auth/user-register', data)
}
