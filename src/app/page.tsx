'use client';

import { Smartphone, Email, Computer, PictureAsPdf } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';
import { useEffect } from 'react';
import QRCode from 'react-qr-code';


import { resume } from './resume';

import { ChipLink } from '@/components/chip-link';
import { HexClip } from '@/components/hex-clip';
import { Position } from '@/components/position';
import { Article, Aside } from '@/components/resume';
import { Rotator } from '@/components/rotator';
import {
  IndentSectionText,
  Section,
  SectionContact,
  SectionText,
  SectionTitle,
} from '@/components/section-title';
import { Timeline } from '@/components/timeline';
import { breakpoint, gap } from '@/sx';

const avatarSize = 150;

// Set this at build time to render contact section
const email = process.env.NEXT_PUBLIC_EMAIL;
const phone = process.env.NEXT_PUBLIC_PHONE;
const hasContact = email && phone;

const HomePage = () => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(
      `%cIf you're seeing this, you're clearly one of my people. ` +
        `I wanted to build my resume in React to show off what my coding looks like. ` +
        `While you're here, checkout the performance stats and Lighthouse scores 😉.` +
        `\n\nYou can checkout the source for this website on GitHub:` +
        `\nhttps://github.com/barlock/barlock.io`,
      'font-family: sans-serif; font-size: 18px',
    );
  });
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
          breakpoint('md', {
            minHeight: '100vh',
          }),
        ]}
      >
        <HexClip
          size={avatarSize}
          sx={{ alignSelf: 'center', mt: gap + gap / 2, mb: gap, mr: gap }}
        >
          <Image
            className='rounded-full'
            src='/avatar.webp'
            alt='Profile Picture'
            width={avatarSize}
            height={avatarSize}
            priority
          />
        </HexClip>
        <Typography variant='h4' component='h1'>
          Michael Barlock
        </Typography>
        <Typography
          variant='h2'
          sx={[{ mb: gap / 2 }, breakpoint('md', { color: 'common.white' })]}
        >
          <Rotator
            sx={{ '@media print': { display: 'none' } }}
            delay={5000}
            items={[
              ['Staff Software', 'Engineer'],
              ['DevOps', 'Engineer'],
              ['Full-Stack', 'Engineer'],
              ['Barbeque', 'Expert'],
              ['UX', 'Engineer'],
              ['Cloud Native', 'Engineer'],
              ['MLOps', 'Engineer'],
              ['Barbershop', 'Harmonizer'],
            ]}
          />
           <Box
            sx={{ display: 'none', '@media print': { display: 'inline' } }}
            component='span'
           >
            Staff Software
            <br />
            Engineer
           </Box>
        </Typography>
        <Section
          title='Contact'
          sx={{
            gap: 3,
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: hasContact ? 'block' : 'none',
              '@media print': {
                display: 'block',
              },
            }}
          >
            <SectionContact
              icon={<Computer />}
              href='https://barlock.io'
              title='Website'
            >
              https://barlock.io
            </SectionContact>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '25%',
                maxWidth: 100,
              }}
            >
              <QRCode
                size={256}
                level='L'
                bgColor='transparent'
                fgColor='currentColor'
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                viewBox='0 0 256 256'
                value='https://barlock.io'
              />
            </Box>
          </Box>

          {hasContact && (
            <>
              <SectionContact icon={<Smartphone />} title='Phone'>
                {phone}
              </SectionContact>
              <SectionContact icon={<Email />} title='Email'>
                {email}
              </SectionContact>
            </>
          )}

          <SectionContact
            icon={<GitHubIcon />}
            title='GitHub'
            href='https://github.com/barlock'
          >
            barlock
          </SectionContact>
          <SectionContact
            icon={<LinkedInIcon />}
            title='LinkedIn'
            href='https://linkedin.com/in/barlock'
          >
            /in/barlock
          </SectionContact>
        </Section>
        <Section title='Education'>
          <SectionText>University of North Carolina, Chapel Hill</SectionText>
          <IndentSectionText sx={{ mt: 1 }}>
            <Box component='span' sx={{ fontWeight: 700 }}>
              B.S. in Computer Science
            </Box>
            <br />
            Minor in Entrepreneurship/Music
          </IndentSectionText>
        </Section>
        <Section title='References'>
          <SectionText>Available on Request</SectionText>
        </Section>
        <Box>
          <ChipLink
            sx={{
              mt: gap / 2,
              '@media print': {
                display: 'none',
              },
            }}
            href='/Michael_Barlock-Resume.docx'
            icon={<PictureAsPdf />}
            label='Download PDF'
          />
        </Box>
      </Aside>
      <Article>
        <SectionTitle>About Me</SectionTitle>
        <IndentSectionText>
          I&apos;m a design-curious, full-stack software engineer with a heavy
          focus on maximizing impact through effective experience design. I
          build high-quality, performant, secure, and maintainable cloud-native
          applications that delight users across industries.
          <br />
          <br />I love mentoring and teaching others, barbecue, home automation,
          and ringing chords with my barbershop quartet.
        </IndentSectionText>

        <SectionTitle color='text.secondary'>Experience</SectionTitle>
        <Timeline>
          {resume.map((position, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Position {...position} key={index} />
          ))}
        </Timeline>
      </Article>
    </Grid>
  );
};

export default HomePage;
