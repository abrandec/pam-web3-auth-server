import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// Add color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

// extend the theme
const Theme = extendTheme({ config })

export default Theme
