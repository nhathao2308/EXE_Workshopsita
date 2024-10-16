export const validationPatterns = {
  name: {
    pattern: /^[^\d\s][\p{L}'\s-]{0,20}$/u,
    message: 'Name must be letter and be between 1 and 20 characters!'
  },
  phoneNumber: {
    pattern: /^(0|\+84)[1-9]\d{8}$/,
    message: 'Phone number must start with 0, 10 number, must not have letter!'
  },
  email: {
    // eslint-disable-next-line no-useless-escape
    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: 'Invalid email format!'
  },
  number: {
    pattern: /^[1-9]\d{3}^$/,
    message: 'Min is 1 and just have number!'
  },
  password: {
    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,14}$/,
    message:
      'Password must have at least 1 uppercase letter, 6-14 character, at least 1 number and 1 special character'
  },
  Otp: {
    pattern: /^[0-9]{6}$/,
    message: 'Otp must be 6 digits!'
  }
}
