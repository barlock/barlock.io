import { Chip, ChipProps } from '@mui/material';
import * as React from 'react';
import { cloneElement, ReactElement } from 'react';

interface ChipLinkProps {
  href: string;
  icon: ReactElement;
  label: ChipProps['label'];
}

export const ChipLink = ({ href, icon, label }: ChipLinkProps) => {
  return (
    <Chip
      component={'a'}
      href={href}
      icon={cloneElement(icon, { color: 'primary.main' })}
      label={label}
      variant='outlined'
      clickable
      sx={{
        fontSize: '1rem',
        fontWeight: '600',
        borderWidth: 2,
        borderColor: 'primary.main',
        color: 'primary.main',
      }}
    />
  );
};
