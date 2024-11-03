import Grid from '@mui/material/Grid2';
import { SxProps, Theme } from '@mui/material/styles';
import { ReactNode } from 'react';
import * as React from 'react';

import { breakpoint, gap, spreadable } from '@/sx';

interface LayoutProps {
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

export const Aside = ({ sx, children }: LayoutProps) => (
  <Grid
    size={{
      xs: 12,
      md: 4
    }}
    component='aside'
    sx={[
      {
        pl: gap / 2,
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
      },
      breakpoint('md', {
        pl: gap,
        color: 'secondary.main',
        backgroundColor: 'primary.main',
      }),
      ...spreadable(sx),
    ]}
  >
    {children}
  </Grid>
);

export const Article = ({ sx, children }: LayoutProps) => (
  <Grid
    sx={[
      {
        pl: gap / 2,
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
      },
      breakpoint('md', { pl: gap, pt: gap }),
      ...spreadable(sx),
    ]}
    size={{
      xs: 12,
      md: 8
    }}
    component='article'
  >
    {children}
  </Grid>
);
