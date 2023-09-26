'use client';

import { ElementType, ReactNode } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import CodeIcon from '@mui/icons-material/Code';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import { TimelineDot, TimelineConnector } from './timeline';
import { SxProps } from '@mui/material/styles';

export interface PositionData {
  title?: string;
  time?: string;
  company?: string;
  logoSrc?: string;
  stack?: ReactNode[];
  description?: ReactNode;
  details?: ReactNode[];
  jobs?: Array<Omit<PositionData, 'jobs'>>;
}

interface PositionProps extends PositionData {
  component?: ElementType;
  sx?: SxProps;
}

export const Position = ({
  title,
  time,
  company,
  logoSrc,
  description,
  details = [],
  jobs = [],
  sx,
  stack,
}: PositionProps) => {
  return (
    <Box sx={sx}>
      {title && (
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
          <TimelineContent component={'section'} sx={{ pr: 0, pt: 1 }}>
            <Box sx={{ pb: 2 }}>
              {title && (
                <Typography
                  sx={{
                    pt: 0,
                  }}
                  component={'h4'}
                  variant={'h6'}
                >
                  {title}
                </Typography>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant={'body2'}>{company}</Typography>
                <Typography variant={'body2'}>{time}</Typography>
              </Box>
            </Box>
            {description && (
              <Typography variant={'body1'} sx={{ pb: 1 }}>
                {description}
              </Typography>
            )}
            <Box component={'ul'} sx={{ pl: 2, listStyle: 'disc' }}>
              {details.map((detail, i) => {
                return <li key={i}>{detail}</li>;
              })}
            </Box>

            {stack && (
              <Typography variant={'body1'} sx={{ py: 1 }}>
                <CodeIcon sx={{ verticalAlign: 'bottom', mr: 0.5 }} />
                <Typography sx={{ fontWeight: 700 }} component={'span'}>
                  Stack:
                </Typography>{' '}
                {stack.join(' • ')}
              </Typography>
            )}
          </TimelineContent>
        </TimelineItem>
      )}

      {jobs.map((job, i) => {
        return <Position {...job} key={i} component={'li'} />;
      })}
    </Box>
  );
};
