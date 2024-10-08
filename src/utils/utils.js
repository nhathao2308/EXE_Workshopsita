export const VietnameseProvinces = [
  'An Giang',
  'Bà Rịa - Vũng Tàu',
  'Bắc Giang',
  'Bắc Kạn',
  'Bạc Liêu',
  'Bắc Ninh',
  'Bến Tre',
  'Bình Định',
  'Bình Dương',
  'Bình Phước',
  'Bình Thuận',
  'Cà Mau',
  'Cao Bằng',
  'Đắk Lắk',
  'Đắk Nông',
  'Điện Biên',
  'Đồng Nai',
  'Đồng Tháp',
  'Gia Lai',
  'Hà Giang',
  'Hà Nam',
  'Hà Tĩnh',
  'Hải Dương',
  'Hậu Giang',
  'Hòa Bình',
  'Hưng Yên',
  'Khánh Hòa',
  'Kiên Giang',
  'Kon Tum',
  'Lai Châu',
  'Lâm Đồng',
  'Lạng Sơn',
  'Lào Cai',
  'Long An',
  'Nam Định',
  'Nghệ An',
  'Ninh Bình',
  'Ninh Thuận',
  'Phú Thọ',
  'Quảng Bình',
  'Quảng Nam',
  'Quảng Ngãi',
  'Quảng Ninh',
  'Quảng Trị',
  'Sóc Trăng',
  'Sơn La',
  'Tây Ninh',
  'Thái Bình',
  'Thái Nguyên',
  'Thanh Hóa',
  'Thừa Thiên Huế',
  'Tiền Giang',
  'Trà Vinh',
  'Tuyên Quang',
  'Vĩnh Long',
  'Vĩnh Phúc',
  'Yên Bái',
  'Phú Yên',
  'Cần Thơ',
  'Đà Nẵng',
  'Hải Phòng',
  'Hà Nội',
  'TP Hồ Chí Minh'
]
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
  }
}