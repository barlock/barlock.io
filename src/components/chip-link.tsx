import { Chip, ChipProps } from '@mui/material';
import { SxProps } from '@mui/material/styles';
import * as React from 'react';
import { cloneElement, ReactElement } from 'react';

import { breakpoint, spreadable } from '@/sx';

interface ChipLinkProps {
  href: string;
  icon: ReactElement;
  label: ChipProps['label'];
  sx?: SxProps;
}

export const ChipLink = ({ href, icon, label, sx }: ChipLinkProps) => (
  <Chip
    component='a'
    href={href}
    icon={cloneElement(icon, { color: 'primary.main' })}
    label={label}
    variant='outlined'
    clickable
    sx={[
      {
        fontSize: '1rem',
        fontWeight: '600',
        borderWidth: 2,
        borderColor: 'currentColor',
        color: 'text',
      },
      breakpoint('md', {
        color: 'common.white',
      }),
      ...spreadable(sx),
    ]}
  />
);
