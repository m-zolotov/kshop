export const COLORS = {
  common: {
    white: '#f8f3f0',
    black: '#000',
  },
  gray: {
    gray1: '#e9e9e9',
    gray2: '#d3d3d3',
    gray3: '#bdbebd',
    gray4: '#a9a9a9',
    gray5: '#949494',
    gray6: '#808080',
    gray7: '#6a6a6a',
    gray8: '#545454',
    gray9: '#3f3f3f',
    gray10: '#2c2c2c',
    gray11: '#191919',
  },
  primary: {
    light: '#7986cb',
    main: '#3f51b5',
    dark: '#303f9f',
  },
  secondary: {
    light: '#ff4081',
    main: '#f50057',
    dark: '#c51162',
  },
  success: {
    main: '#28a745'
  },
  danger: {
    main: '#dc3545'
  },
  warning: {
    main: '#ffc107'
  },
  info: {
    main: '#17a2b8',
  },
  bgLight: '#f8f9fa',
  bgDark: '#343a40'
}

export const THEME = {
  UNIT: 8,
  EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  SHORTER: 200,
}

export default {
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
        backgroundColor: COLORS.common.white,
      },
    },
    MuiPaper: {
      root: {
        boxShadow: 'none',
      },
      elevation1: {
        boxShadow: 'none',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      light: COLORS.primary.light,
      main: COLORS.primary.main,
      dark: COLORS.primary.dark,
    },
    secondary: {
      light: COLORS.secondary.light,
      main: COLORS.secondary.main,
      dark: COLORS.secondary.dark,
    },
  },
}
