import { PositionData } from '@/components/position';
import Link from '@mui/material/Link';

export const resume: PositionData[] = [
  {
    title: 'Staff Software Engineer',
    time: 'May 2022 - Sep 2023',
    company: 'SHOWRUNNER',
    logoSrc: '/showrunner.png',
    details: [
      <>
        Developed from scratch, an{' '}
        <Link
          href={
            'https://reelchicago.com/article/showrunner-wins-product-of-the-year-at-nab/'
          }
        >
          award-winning
        </Link>{' '}
        filmmaking platform that connects physical sets with Unreal Engine with
        WebRTC real-time video streaming
      </>,
      'Architected end-to-end pipeline for building and deploying web and native apps with local and remote control',
      'Led Agile engineering org and facilitated continuous releases with collaboration from product and design',
    ],
    stack: [
      'Typescript',
      'React',
      'GitHub Actions',
      'WebRTC',
      'GraphQL',
      'Ionic',
      'Unreal Engine',
    ],
  },
  {
    title: 'Architect / Senior Software Engineer',
    logoSrc: '/ibm.webp',
    company: 'IBM | ConveyorAI • Watson AIOps • Slack/IBM Partnership',
    time: 'Jul 2019 - Jun 2022',
    details: [
      'Architected enterprise-scale MLOps platform, enabling no/low-code AI app development',
      <>
        Open source improvements to Slack’s own{' '}
        <Link
          href={
            'https://github.com/slackapi/bolt-js/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Aclosed+author%3Abarlock'
          }
        >
          developer tools
        </Link>{' '}
        and{' '}
        <Link href={'https://github.com/IBM/slack-wrench'}>bot tooling</Link> to
        simplify infusing AI into Slack bots
      </>,
      'Evangelized “inner source” and built a company-wide Python K8s operator framework',
      'Designed and implemented a SOC 2 compliant AWS deployment',
      'Led delivery, engineering, DevOps, and certification efforts for 30+ person product team',
    ],
    stack: [
      'Typescript',
      'Python',
      'AWS',
      'gRPC',
      'OpenShift',
      'Jenkins',
      'Terraform',
    ],
  },
  {
    title: 'Senior Software Engineer',
    time: 'Aug 2018 - Jul 2019',
    company: 'Consensys',
    logoSrc: '/consensys.jpeg',
    details: [
      <>
        Built tamper-resistant, distributed, static websites (
        <Link href={'https://github.com/ConsenSys/web3studio-soy'}>
          ConsenSys/web3studio-soy
        </Link>
        )
      </>,
      <>
        Created the{' '}
        <Link href={'https://github.com/ConsenSys/web3studio-bootleg'}>
          first music NFT
        </Link>{' '}
        that pays back royalties to artists. Custom dApp, ERC712 contract
        extension deployed to Ethereum main-net.
      </>,
    ],
    stack: ['Solidity', 'Ethereum', 'React', 'IPFS', 'Smart Contracts', 'Web3'],
  },
  {
    title: 'Senior Software Engineer',
    time: 'Feb 2018 - Jul 2018',
    company: 'LifeOmic | JupiterOne',
    logoSrc: '/lifeomic.jpeg',
    details: [
      'Built HIPPA-compliant continuous CI/CD pipeline to AWS using Terraform and Docker',
      'Worked cross-company and discipline to create a shared design system',
      'Led Agile frontend team for JupiterOne',
    ],
    stack: [
      'Typescript',
      'React',
      'Terraform',
      'AWS',
      'GraphQL',
      'Docker',
      'Jenkins',
    ],
  },
  {
    company: 'IBM | Whitewater • Storefront • Service Engage',
    logoSrc: '/ibm.webp',
    title: 'Senior Software Engineer',
    time: 'Jul 2013 - Feb 2018',
    details: [
      'Led transformation effort and rolled out Slack, GitHub, and TravisCI to 400k IBMers',
      'Taught modern practices through conference-like talks and hackathons worldwide',
      'Used resilience engineering to ensure uptime and led internal and held cross-company learning reviews (post-mortems) with vendors',
      'Developed Slack bots to automate internal processes',
    ],
    stack: ['Node.js', 'React', 'TravisCI', 'IBM Cloud', 'NewRelic', 'Java'],
  },
];
