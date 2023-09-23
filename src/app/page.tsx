'use client';

import Typography from '@mui/material/Typography';
import { Position, PositionData } from '@/components/position';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import Timeline from '@mui/lab/Timeline';
import Box from '@mui/material/Box';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Chip, Container, SxProps } from '@mui/material';
import { resume } from './resume';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../components/section-title';
import { HexClip } from '../components/hex-clip';
import Grid from '@mui/material/Unstable_Grid2';
import { SkillList } from '../components/skill-list';
import { ReactNode } from 'react';
import { breakpoint, spreadable } from '../sx';

const avatarSize = 200;

interface LayoutProps {
  sx?: SxProps;
  children: ReactNode;
}

const Aside = ({ sx, children }: LayoutProps) => {
  return (
    <Grid
      xs={10}
      sm={9}
      md={4}
      component={'aside'}
      sx={[
        { pl: 4, display: 'flex', flexDirection: 'column' },
        breakpoint('md', {
          color: 'primary.contrastText',
          backgroundColor: 'primary.main',
        }),
        ...spreadable(sx),
      ]}
    >
      {children}
    </Grid>
  );
};

const Article = ({ sx, children }: LayoutProps) => {
  return (
    <Grid
      sx={[
        { px: 4, display: 'flex', flexDirection: 'column' },
        ...spreadable(sx),
      ]}
      xs={10}
      sm={9}
      md={8}
      component={'article'}
    >
      {children}
    </Grid>
  );
};

export default function HomePage() {
  return (
    <Grid container component={Container} sx={{ ml: 4 }}>
      <Aside sx={{ pr: 4 }}>
        <HexClip size={avatarSize} sx={{ alignSelf: 'center', mt: 4 }}>
          <Image
            className='rounded-full'
            src='/avatar.webp'
            alt='Profile Picture'
            width={avatarSize}
            height={avatarSize}
            priority
          />
        </HexClip>
      </Aside>
      <Article
        sx={{
          pt: 4,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h3' sx={{ fontWeight: 500 }}>
          Michael Barlock
        </Typography>
        <Typography variant='h2'>Staff Software Engineer</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Chip
            component={'a'}
            href={'https://github.com/barlock'}
            icon={<GitHubIcon />}
            label={'barlock'}
            variant='outlined'
            clickable
          />
          <Chip
            component={'a'}
            href={'https://www.linkedin.com/in/barlock/'}
            icon={<LinkedInIcon />}
            label={'/in/barlock'}
            variant='outlined'
            clickable
          />
        </Box>
      </Article>
      <Aside>
        <Section title='About Me'>
          <SectionText>
            Design curious full-stack engineer. I build high-quality,
            performant, secure, and maintainable cloud-native applications that
            delight users across industries.
            <br />
            <br />I use continuous delivery to create everything from a cloud
            platform for AI apps to blockchain to managing physical and virtual
            smart studios for film and television.
            <br />
            <br />I love mentoring and teaching others, barbeque, and ringing
            chords with my barbershop quartet.
          </SectionText>
        </Section>
        <Section title={'Education'}>
          <SectionText>2009-2013</SectionText>
          <SectionText>Bachelors - Computer Science</SectionText>
          <SectionText>Minor in Entrepreneurship/Music</SectionText>
          <SectionText>University of North Carolina, Chapel Hill</SectionText>
        </Section>

        <Section title={'Skills'}>
          <SkillList
            skills={[
              'Typescript',
              'Node.js',
              'Javascript',
              'React',
              'Kubernetes',
              'Docker',
              'GraphQL',
              'AWS',
              'IBM Cloud',
              'Terraform',
              'CloudFormation',
              'Unreal Engine',
              'gRPC',
              'Python',
              'Solidity',
            ]}
          />
        </Section>

        <Section title={'References'}>
          <SectionText>Available on Request</SectionText>
        </Section>
      </Aside>
      <Article>
        <SectionTitle>Experience</SectionTitle>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {resume.map((position, i) => (
            <Position {...position} key={i} />
          ))}
        </Timeline>
      </Article>
    </Grid>
  );
}
