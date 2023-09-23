'use client';

import { ElementType, ReactNode } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export interface PositionData {
  title?: string;
  time?: string;
  company?: string;
  logoSrc?: string;
  description?: string;
  details?: string[];
  jobs?: Array<Omit<PositionData, 'jobs'>>;
}

interface PositionProps extends Omit<PositionData, 'logoSrc'> {
  logoSrc?: string;
  children?: ReactNode;
  component?: ElementType;
  nested?: boolean;
}

export const Position = ({
  title,
  time,
  company,
  logoSrc,
  description,
  details = [],
  jobs = [],
  nested = false,
  children,
}: PositionProps) => {
  return (
    <>
      {title && (
        <TimelineItem className='border-left-solid'>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                color: 'grey.400',
                border: 'none',
              }}
            >
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
                <Box
                  sx={{
                    width: 48,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <CircleIcon sx={{ height: 12 }} />
                </Box>
              )}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent component={'div'} sx={{ pt: '11.5px' }}>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', pb: 2 }}>
              <Box>
                {title && (
                  <Typography
                    sx={{ pt: 0, lineHeight: 1.35, fontWeight: 'bold' }}
                    variant={nested ? 'body1' : 'h6'}
                  >
                    {title}
                  </Typography>
                )}
                <Typography variant={'body2'}>
                  {company}
                  {company && time && ' '}
                  <Box component='span' sx={{ color: 'secondary' }}>
                    {time}
                  </Box>
                </Typography>
              </Box>
            </Box>
            {description && (
              <Typography variant={'body1'} sx={{ pb: 1 }}>
                {description}
              </Typography>
            )}
            <ul>
              {details.map((detail, i) => {
                return <li key={i}>{detail}</li>;
              })}
            </ul>

            {children}
          </TimelineContent>
        </TimelineItem>
      )}

      {jobs.map((job, i) => {
        return <Position {...job} nested={true} key={i} component={'li'} />;
      })}
    </>
  );
};
