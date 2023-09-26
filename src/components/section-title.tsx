import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { Link, SxProps } from '@mui/material';
import { breakpoint, gap, spreadable } from '@/sx';
import * as React from 'react';

interface SectionTitleProps {
  children: ReactNode;
  color?: string;
}

export const SectionTitle = ({ color, children }: SectionTitleProps) => (
  <Typography
    component={'h3'}
    variant={'sectionTitle'}
    sx={{
      mb: gap / 2,
      pt: gap,
      width: '100%',
      borderBottomStyle: 'solid',
      borderBottomWidth: 3,
      borderBottomColor: 'text',
      color: color,
    }}
  >
    <Box
      component={'span'}
      sx={{
        width: '100%',
        position: 'relative',
        bottom: -3,
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
}: SectionContactProps) => {
  return (
    <Box sx={sx}>
      <Box sx={{ display: 'flex', gap: 1, pb: 1 }}>
        {icon}
        <Typography variant={'body1'} sx={{ fontWeight: 700 }}>
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
};

interface SectionProps {
  title: string;
  children: ReactNode;
  sx?: SxProps;
  rootSx?: SxProps;
}

export const Section = ({ title, rootSx, sx, children }: SectionProps) => {
  return (
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
};
