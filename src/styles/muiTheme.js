export const COLORS = {
  common: {
    black: '#000',
    white: '#f8f3f0',
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
    }
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
