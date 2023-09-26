import type {} from '@mui/lab/themeAugmentation';

import { Quicksand, JetBrains_Mono } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    sectionTitle: CSSProperties;
  }

  interface TypographyVariantsOptions {
    sectionTitle: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sectionTitle: true;
  }
}

const sansSerif = Quicksand({
  subsets: ['latin'],
});

const mono = JetBrains_Mono({
  weight: ['400'],
  subsets: ['latin'],
});

const grey = {
  900: '#1a1c1e',
  800: '#2f3033',
  700: '#46474a',
  600: '#5d5e62',
  500: '#76777a',
  400: '#909094',
  300: '#ababae',
  200: '#c7c6ca',
  100: '#e3e2e6',
};

const primary = {
  contrastText: '#f8fdff',
  light: '#1f4b82',
  main: '#0e223b',
};

const text = {
  primary: grey[900],
  secondary: primary.main,
  disabled: grey[400],
};

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
      paper: '#d6e3ff',
    },
    primary,
    secondary: {
      contrastText: '#181c22',
      main: '#ddb15f',
    },
    text,
    grey,
  },
  typography: {
    fontFamily: sansSerif.style.fontFamily,
    h2: {
      // Position Title
      fontSize: '3.052rem',
      fontWeight: 300,
    },
    h4: {
      // Name title
      fontSize: '2.441rem',
      fontWeight: 600,
    },
    sectionTitle: {
      // Section Title
      fontSize: '1.953rem',
      fontFamily: mono.style.fontFamily,
      lineHeight: 1,
    },
    h6: {
      // Position Title
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 700,
      color: primary.light,
    },
  },
});

export default theme;
