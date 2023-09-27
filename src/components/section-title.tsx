import { Link, SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import * as React from 'react';

import { breakpoint, gap, spreadable } from '@/sx';

interface SectionTitleProps {
  children: ReactNode;
  color?: string;
}

/* eslint-disable react/jsx-no-comment-textnodes */
export const SectionTitle = ({ color, children }: SectionTitleProps) => (
  <Typography
    component='h3'
    variant='sectionTitle'
    sx={{
      mb: gap / 2,
      pt: gap,
      width: '100%',
      borderBottomStyle: 'solid',
      borderBottomWidth: 3,
      borderBottomColor: 'text',
      color,
    }}
  >
    <Box
      component='span'
      sx={{
        width: '100%',
        position: 'relative',
        bottom: -3,
      }}
    >
      //
      {children}
    </Box>
  </Typography>
);
/* eslint-enable react/jsx-no-comment-textnodes */

interface SectionTextProps {
  children: ReactNode;
  sx?: SxProps;
}

export const SectionText = ({ sx, children }: SectionTextProps) => (
  <Typography sx={sx} variant='body1'>
    {children}
  </Typography>
);

export const IndentSectionText = ({ sx, children }: SectionTextProps) => (
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

interface SectionContactProps {
  icon: ReactNode;
  title: string;
  href?: string;
  sx?: SxProps;
  children: ReactNode;
}

export const SectionContact = ({
  icon,
  title,
  href,
  sx,
  children,
}: SectionContactProps) => (
  <Box sx={sx}>
    <Box sx={{ display: 'flex', gap: 1, pb: 1 }}>
      {icon}
      <Typography variant='body1' sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
    </Box>

    <IndentSectionText>
      {href ? (
        <Link
          sx={{ color: 'currentColor', textDecorationColor: 'currentColor' }}
          href={href}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </IndentSectionText>
  </Box>
);

interface SectionProps {
  title: string;
  children: ReactNode;
  sx?: SxProps;
  rootSx?: SxProps;
}

export const Section = ({ title, rootSx, sx, children }: SectionProps) => (
  <Box sx={rootSx}>
    <SectionTitle>{title}</SectionTitle>
    <Box
      sx={[
        { pr: gap, color: 'text' },
        breakpoint('md', {
          color: 'common.white',
        }),
        ...spreadable(sx),
      ]}
    >
      {children}
    </Box>
  </Box>
);
