import axiosInstance from '@/configs/axios'

export const LoginService = (data) => {
  return axiosInstance.post('api/Auth/login', data)
}

export const RegisterService = (data) => {
  return axiosInstance.post('api/Auth/user-register', data)
}

export const VerifyOtpService = (otp, email) => {
  const data = new FormData()
  data.append('otp', otp)
  data.append('email', email)
  return axiosInstance.put(`api/OTP/verify-email`, data)
}
