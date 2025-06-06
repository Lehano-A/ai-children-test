import type { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#7928ca',
    success: '#17c964',
    error: '#f21361',
    warning: '#f5a623',

    background: '#ffffff',
    cardBackground: '#f5f5f5',
    text: '#333333',
    textSecondary: '#666666',
    border: '#eaeaea',
  },
  fonts: {
    primary: 'CirceRounded, -apple-system, BlinkMacSystemFont, Arial, sans-serif',
  },
  fontSizes: {
    small: '0.625rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '48px',
  },
  radii: {
    small: '4px',
    medium: '8px',
    large: '12px',
    circle: '50%',
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12)',
    medium: '0 4px 6px rgba(0,0,0,0.12)',
    large: '0 10px 20px rgba(0,0,0,0.19)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
}

// Экспорт по умолчанию (обычно light theme)
export default lightTheme
