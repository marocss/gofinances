import 'styled-components'
import theme from './theme'

declare module 'styled-components' {
  type MyCustomTheme = typeof theme

  export interface DefaultTheme extends MyCustomTheme {}
}