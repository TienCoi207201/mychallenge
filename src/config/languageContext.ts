import { createContext } from 'react'

type LanguageProps = {
  Sign_in_to_your_account: string
  Sign_in: string
  Forgot_you_password: string
  Your_contacts: string
  Add_a_new_contact: string
  Add_Edit_contact: string
  Full_name: string
  Phone_number: string
  Nick_name: string
  Location: string
  Settings: string
  Language: string
  Themes: string
  Notification: string
  Sign_out: string
  Contacts: string
  Add: string
}
const languageContext = createContext<LanguageProps>({
  Sign_in_to_your_account:
    'Đăng nhập bằng tài khoản của bạn' || 'Sign in to your account',
  Sign_in: 'Đăng nhập' || 'Sign in',
  Forgot_you_password: 'Quên mật khẩu' || 'Forgot you password',
  Your_contacts: 'Danh bạ' || 'Your contacts',
  Add_a_new_contact: 'Thêm danh bạ' || 'Add a new contact',
  Add_Edit_contact: 'Thêm / Sửa người liên hệ' || 'Add / Edit contact',
  Full_name: 'Tên đầy đủ' || 'Full name',
  Phone_number: 'Số điện thoại' || 'Phone number',
  Nick_name: 'Biệt danh' || 'Nick name',
  Location: 'Vị trí' || 'Location',
  Settings: 'Cài đặt' || 'Settings',
  Language: 'Ngôn ngữ' || 'Language',
  Themes: 'Chủ đề' || 'Themes',
  Notification: 'Thông báo' || 'Notification',
  Sign_out: 'Đăng xuất' || 'Sign out',
  Contacts: 'Danh bạ' || 'Contact',
  Add: 'Thêm' || 'Add',
})

export default languageContext
