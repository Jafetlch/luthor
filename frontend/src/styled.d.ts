import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    primary: {
      main: string
      text: string
    }
    card: {
      background: string
    }
    text: {
      main: string
    }
    boxShadow: {
      normal: string
    }
  }
}
