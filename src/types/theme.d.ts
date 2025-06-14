import 'styled-components'
import type { LightTheme, UiSeettings } from '../theme'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: LightTheme
    ui: UiSeettings
  }
}
