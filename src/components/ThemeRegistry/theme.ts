import type {} from '@mui/lab/themeAugmentation';

import { Manrope, JetBrains_Mono } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontFamilyMono: string;
  }

  interface TypographyVariantsOptions {
    fontFamilyMono: string;
  }
}

const sansSerif = Manrope({
  subsets: ['latin'],
  // display: 'swap',
});

const mono = JetBrains_Mono({
  weight: ['300'],
  subsets: ['latin'],
  display: 'auto',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
      paper: '#d6e3ff',
    },
    primary: {
      contrastText: '#f8fdff',
      light: '#d6e3ff',
      main: '#295ea7',
      dark: '#001b3d',
    },
    grey: {
      900: '#181c22',
      800: '#2d3038',
      700: '#44474e',
      600: '#5b5e66',
      500: '#74777f',
      400: '#8e9099',
      300: '#a8abb4',
      200: '#c4c6cf',
      100: '#e0e2ec',
    },
  },
  typography: {
    fontFamily: sansSerif.style.fontFamily,
    fontFamilyMono: mono.style.fontFamily,
  },
});

export default theme;
