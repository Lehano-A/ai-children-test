import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Normalize } from 'styled-normalize'
import './assets/fonts/fonts.css'
import App from './components/App/App.tsx'
import { ThemeProvider } from 'styled-components'
import lightTheme from './theme.ts'
import { GlobalStyles } from './styled/globalStyles.ts'
import store from './redux/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Normalize />
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
