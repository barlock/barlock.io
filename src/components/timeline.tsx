import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { breakpoint, spreadable } from '@/sx';
import { TimelineConnectorProps, TimelineDotProps } from '@mui/lab';
import MuiTimelineConnector from '@mui/lab/TimelineConnector';
import MuiTimelineDot from '@mui/lab/TimelineDot';
import CircleIcon from '@mui/icons-material/Circle';
import * as React from 'react';

export const Timeline = (props: Omit<TimelineProps, 'ref'>) => {
  return (
    <MuiTimeline
      sx={[
        {
          mt: 0,
          py: 0,
          pl: 0,
          pr: 2,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        },
        breakpoint('md', {
          p: 0,
        }),
      ]}
      {...props}
    />
  );
};

export const TimelineConnector = (props: TimelineConnectorProps) => {
  return (
    <MuiTimelineConnector
      {...props}
      sx={{ backgroundColor: 'text.secondary', width: 3 }}
    />
  );
};

export const TimelineDot = ({ sx, children, ...props }: TimelineDotProps) => {
  return (
    <MuiTimelineDot
      sx={[
        {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          border: 'none',
          p: 0,
          my: 1,
        },
        ...spreadable(sx),
      ]}
      {...props}
    >
      {children ?? <CircleIcon sx={{ height: 16, color: 'text.secondary' }} />}
    </MuiTimelineDot>
  );
};
