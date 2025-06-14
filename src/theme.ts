export interface Palette {
  palette: {
    muted: string
    muted2: string
    default: string
    surface1: string
    surface3: string
    surface5: string
    disabled: string
    disabledBtn: string
    err: string

    blue: {
      50: string
      60: string
      70: string
      100: string
      110: string
    }

    orange: {
      100: string
      200: string
      300: string
      400: string
      500: string
    }

    red: {
      40: string
      50: string
      110: string
    }

    violet: {
      100: string
      110: string
    }
  }
}

export interface UiSeettings {
  breakpoints: {
    s: number
    m: number
    xl: number
  }

  radius: {
    6: string
    8: string
    20: string
    100: string
  }
}

export const lightTheme = {
  palette: {
    muted: '#A0A9B8',
    muted2: '#69758E',
    default: '#293244',
    surface1: '#FFFFFF',
    surface3: '#F6F6F8',
    surface5: '#D0D4DC',
    disabled: 'rgba(68, 83, 113, 0.5)',
    disabledBtn: 'rgba(68, 83, 113, 0.1)',
    err: '#FADEE0',

    blue: {
      50: '#DAEDFD',
      60: '#C7E4FC',
      70: '#B5DBFB',
      100: '#45A5F6',
      110: '#007EE5',
    },

    orange: {
      100: '#FFE0B2',
      200: '#FFCC80',
      300: '#FFB74D',
      400: '#FFA726',
      500: '#FF9800',
    },

    red: {
      40: '#FDEEEF',
      50: '#FADEE0',
      110: '#E12828',
    },

    violet: {
      100: '#8A6BF4',
      110: '#6447CF',
    },
  },

  ui: {
    breakpoints: {
      s: 380,
      m: 640,
      xl: 1200,
    },

    radius: {
      6: '6px',
      8: '8px',
      20: '20px',
      100: '100px',
    },
  },
}

export default lightTheme
