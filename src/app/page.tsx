'use client';

import Typography from '@mui/material/Typography';
import { Position } from '@/components/position';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import Box from '@mui/material/Box';

import { Container } from '@mui/material';
import { resume } from './resume';
import {
  IndentSectionText,
  Section,
  SectionContact,
  SectionText,
  SectionTitle,
} from '../components/section-title';
import { HexClip } from '../components/hex-clip';
import Grid from '@mui/material/Unstable_Grid2';
import QRCode from 'react-qr-code';
import { SkillList } from '../components/skill-list';
import { breakpoint } from '../sx';
import { Timeline } from '../components/timeline';
import * as React from 'react';
import { Article, Aside } from '../components/resume';
import { ChipLink } from '../components/chip-link';
import { Smartphone, Email, Computer } from '@mui/icons-material';

const avatarSize = 200;

// Set this at build time to render contact section
const email = process.env.NEXT_PUBLIC_EMAIL;
const phone = process.env.NEXT_PUBLIC_PHONE;

export default function HomePage() {
  return (
    <Grid
      container
      component={Container}
      sx={[
        {
          p: 0,
          mx: 'auto',
        },
        breakpoint('sm', {
          mx: 0,
          px: 2,
        }),
        breakpoint('lg', {
          pl: 4,
        }),
      ]}
    >
      <Aside
        sx={[
          {
            flexDirection: 'column',
            justifyContent: 'center',
            pr: 2,
          },
          breakpoint('md', {
            px: 0,
          }),
        ]}
      >
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
          ['@media print']: {
            pt: 8,
          },
        }}
      >
        <Typography variant='h3' component={'h1'}>
          Michael Barlock
        </Typography>
        <Typography variant='h2'>Staff Software Engineer</Typography>
        <Box sx={{ display: 'flex', gap: 2, pt: 2 }}>
          <ChipLink
            href={'https://github.com/barlock'}
            icon={<GitHubIcon />}
            label={'barlock'}
          />
          <ChipLink
            href={'https://www.linkedin.com/in/barlock/'}
            icon={<LinkedInIcon />}
            label={'/in/barlock'}
          />
        </Box>
      </Article>

      <Aside
        sx={{
          ['@media print']: {
            height: '200vh',
          },
        }}
      >
        {email && phone && (
          <Section
            title={'Contact'}
            sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}
          >
            <Box sx={{ position: 'relative' }}>
              <SectionContact icon={<Computer />} title={'Website'}>
                https://barlock.io
              </SectionContact>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '30%',
                  maxWidth: 100,
                }}
              >
                <QRCode
                  size={256}
                  level={'L'}
                  bgColor={'transparent'}
                  fgColor={'currentColor'}
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                  viewBox={`0 0 256 256`}
                  value={'https://barlock.io'}
                />
              </Box>
            </Box>
            <SectionContact icon={<Smartphone />} title={'Phone'}>
              {phone}
            </SectionContact>

            <SectionContact icon={<Email />} title={'Email'}>
              {email}
            </SectionContact>
          </Section>
        )}

        <Section title='About Me'>
          <IndentSectionText>
            I’m a design curious, full-stack software engineer. I build
            high-quality, performant, secure, and maintainable cloud-native
            applications that delight users across industries.
            <br />
            <br />I use continuous delivery to create everything from a cloud
            platform for AI apps to blockchain to managing physical and virtual
            smart studios for film and television.
            <br />
            <br />I love mentoring and teaching others, barbeque, home
            automation, and ringing chords with my barbershop quartet.
          </IndentSectionText>
        </Section>
        <Section title={'Education'}>
          <SectionText>University of North Carolina, Chapel Hill</SectionText>
          <IndentSectionText sx={{ mt: 1 }}>
            <Box component={'span'} sx={{ fontWeight: 700 }}>
              Bachelor of Computer Science
            </Box>
            <br />
            Minor in Entrepreneurship/Music
          </IndentSectionText>
        </Section>

        <Section title={'Skills'}>
          <SkillList
            skills={[
              'Typescript',
              'Node.js',
              'Javascript',
              'React',
              'Agile',
              'DevOps',
              'MLOps',
              'Kubernetes',
              'Docker',
              'GraphQL',
              'AWS',
              'IBM Cloud',
              'Terraform',
              'GitHub Actions',
              'Travis CI',
              'Kubeflow',
              'Unreal Engine',
              'gRPC',
              'Python',
              'Solidity',
              'Java',
            ]}
          />
        </Section>

        <Section title={'References'}>
          <SectionText>Available on Request</SectionText>
        </Section>
      </Aside>
      <Article>
        <SectionTitle color={'text.secondary'}>Experience</SectionTitle>
        <Timeline>
          {resume.map((position, i) => (
            <Position
              {...position}
              key={i}
              sx={[
                {
                  printBreakBefore: 'always',
                  printBreakInside: 'never',
                  mb: 1,
                },
                i === 3 && {
                  ['@media print']: {
                    pt: 12,
                  },
                },
              ]}
            />
          ))}
        </Timeline>
      </Article>
    </Grid>
  );
}
