import { createContext } from 'react'

type ThemeProps = {
  theme: string
  color: string
  background: string
  colorButton: string
  backgroundWrapper: string
  backgroundTabBar: string
  colorTabBar: string
  buttonSignin: string
}
const themeContext = createContext<ThemeProps>({
  theme: 'light' || 'dark',
  color: '#000000' || '#ffffff',
  background: '#EEEEEE' || '#111111',
  colorButton: '#0066FF' || '#ffff',
  backgroundWrapper: '#fff' || '#000',
  backgroundTabBar: '#fff' || '#555555',
  colorTabBar: '#0000FF' || '#fff',
  buttonSignin: '#0066FF' || '#777777',
})

export default themeContext
