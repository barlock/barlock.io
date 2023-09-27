'use client';

import CircleIcon from '@mui/icons-material/Circle';
import CodeIcon from '@mui/icons-material/Code';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { ReactNode } from 'react';

import { TimelineDot, TimelineConnector } from './timeline';

export interface PositionData {
  title: string;
  time?: string;
  company?: string;
  logoSrc?: string;
  stack?: ReactNode[];
  description?: ReactNode;
  details?: ReactNode[];
}

interface PositionProps extends PositionData {}

export const Position = ({
  title,
  time,
  company,
  logoSrc,
  description,
  details = [],
  stack,
}: PositionProps) => (
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot>
        {logoSrc ? (
          <Image
            className='rounded-xl'
            src={logoSrc}
            alt='Profile Picture'
            width={48}
            height={48}
            priority
          />
        ) : (
          <CircleIcon
            sx={{ height: 12, width: 48, my: 1, color: 'text.secondary' }}
          />
        )}
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent component='section' sx={{ pr: 0, pt: 1 }}>
      <Box sx={{ pb: 2 }}>
        {title && (
          <Typography
            sx={{
              pt: 0,
            }}
            component='h4'
            variant='h6'
          >
            {title}
          </Typography>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='body2'>{company}</Typography>
          <Typography variant='body2'>{time}</Typography>
        </Box>
      </Box>
      {description && (
        <Typography variant='body1' sx={{ pb: 1 }}>
          {description}
        </Typography>
      )}
      <Box component='ul' sx={{ pl: 2, listStyle: 'disc' }}>
        {details.map((detail, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{detail}</li>
        ))}
      </Box>

      {stack && (
        <Typography variant='body1' sx={{ py: 1 }}>
          <CodeIcon sx={{ verticalAlign: 'bottom', mr: 0.5 }} />
          <Typography sx={{ fontWeight: 700 }} component='span'>
            Stack:
          </Typography>{' '}
          {stack.join(' • ')}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);
