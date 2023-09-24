import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { breakpoint, spreadable } from '../sx';
import * as React from 'react';

interface LayoutProps {
  sx?: SxProps;
  children: ReactNode;
}

export const Aside = ({ sx, children }: LayoutProps) => {
  return (
    <Grid
      xs={12}
      sm={11}
      md={4}
      component={'aside'}
      sx={[
        {
          pl: 2,
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
        },
        breakpoint('md', {
          pl: 4,
          color: 'secondary.main',
          backgroundColor: 'primary.main',
        }),
        ...spreadable(sx),
      ]}
    >
      {children}
    </Grid>
  );
};

export const Article = ({ sx, children }: LayoutProps) => {
  return (
    <Grid
      sx={[
        {
          pl: 2,
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
        },
        breakpoint('md', { pl: 4 }),
        ...spreadable(sx),
      ]}
      xs={12}
      sm={11}
      md={8}
      component={'article'}
    >
      {children}
    </Grid>
  );
};
