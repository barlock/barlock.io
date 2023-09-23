import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { TypographyProps } from '@mui/system';
import { SxProps } from '@mui/material';

interface SectionTitleProps {
  children: ReactNode;
  color?: string;
}

export const SectionTitle = ({ color, children }: SectionTitleProps) => (
  <Typography
    variant={'h4'}
    color={color}
    sx={{
      ['&:before']: {
        content: '"<"',
      },
      ['&:after']: {
        content: '"/>"',
      },
      fontFamily: 'fontFamilyMono',
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderBottomColor: 'text',
      mb: 2,
      pt: 4,
      color,
    }}
  >
    {children}
  </Typography>
);

interface SectionTextProps {
  children: ReactNode;
}

export const SectionText = ({ children }: SectionTextProps) => {
  return <Typography variant={'body1'}>{children}</Typography>;
};

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <Box sx={{ pr: 4 }}>{children}</Box>
    </>
  );
};
