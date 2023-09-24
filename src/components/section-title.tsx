import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material';
import { breakpoint, spreadable } from '../sx';
import * as React from 'react';

interface SectionTitleProps {
  children: ReactNode;
  color?: string;
}

export const SectionTitle = ({ color, children }: SectionTitleProps) => (
  <Typography
    component={'h3'}
    variant={'h4'}
    sx={{
      width: '100%',
      fontFamily: 'fontFamilyMono',
      borderBottomStyle: 'solid',
      borderBottomWidth: 3,
      borderBottomColor: 'text',
      mb: 2,
      pt: 4,
      color: color,
    }}
  >
    <Box
      component={'span'}
      sx={{
        width: '100%',
        position: 'relative',
        bottom: -8,
      }}
    >
      {'//'}
      {children}
    </Box>
  </Typography>
);

interface SectionTextProps {
  children: ReactNode;
  sx?: SxProps;
}

export const SectionText = ({ sx, children }: SectionTextProps) => {
  return (
    <Typography sx={sx} variant={'body1'}>
      {children}
    </Typography>
  );
};

export const IndentSectionText = ({ sx, children }: SectionTextProps) => {
  return (
    <SectionText
      sx={[
        {
          borderLeftStyle: 'solid',
          borderLeftWidth: 3,
          borderLeftColor: 'primary.light',
          pl: 2,
        },
        ...spreadable(sx),
      ]}
    >
      {children}
    </SectionText>
  );
};

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <Box
        sx={[
          { pr: 4 },
          breakpoint('md', {
            color: 'white',
          }),
        ]}
      >
        {children}
      </Box>
    </>
  );
};
