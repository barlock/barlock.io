import { PositionData } from '../components/position';
import Link from '@mui/material/Link';

export const resume: PositionData[] = [
  {
    title: 'Staff Software Engineer',
    time: 'May 2022 - Sep 2023',
    company: 'SHOWRUNNER',
    logoSrc: '/showrunner.png',
    description: (
      <>
        Designed and built an award winning platform (
        <Link
          href={
            'https://reelchicago.com/article/showrunner-wins-product-of-the-year-at-nab/'
          }
        >
          NAB Product of the Year
        </Link>
        ) for high-tech filmmaking that connects physical sets with virtual
        environments in Unreal Engine. Using native apps for local and remote
        control, we pioneered production techniques to cut virtual production
        costs and reduce wasted time on set.
      </>
    ),
    details: [
      'Lead the engineering org and worked with product and design to release continuously',
      'Created remote dev and build environments for Unreal Engine',
      'Built WebRTC platform for real-time video streaming',
    ],
  },
  {
    jobs: [
      {
        title: 'Architect / Senior Software Engineer',
        logoSrc: '/ibm.jpeg',
        company: 'IBM Conveyor AI',
        time: 'Oct 2021 - Jun 2022',
        description: (
          <>
            Partnered with Watson Core and IBM Research to build a no or low
            code platform for AI applications. We took learnings from running
            Watson products and built a horizontally scalable MLOps system that
            anyone could use.
          </>
        ),
        details: [
          'Architected an extensible multi-language MLOps platform with gRPC',
          'Designed and implemented a SOC 2 compliant AWS deployment',
          'Lead a team of engineers working across organizations using Agile',
        ],
      },
      {
        title: 'Senior Software Engineer',
        company: 'IBM Watson AIOps',
        time: 'Jan 2020 - Oct 2021',
        description: (
          <>
            Productized AI models designed to detect software log anomalies from
            IBM Research. Designed and built a “Chat Opts” interface using Slack
            to alert users and allow them to take action.
          </>
        ),
        details: [
          <>
            Open Sourced Slack bot tools (
            <Link href={'https://github.com/IBM/slack-wrench'}>
              IBM/slack-wrench
            </Link>
            ) to simplify bot building and testing
          </>,
          'Built DevOps platform for continues integration and delivery of multi-team product',
          'Lead delivery and certification efforts for 30 person product team',
        ],
      },
      {
        title: 'Slack/IBM Partnership',
        company: 'IBM Watson',
        time: 'Jul 2019 - Oct 2021',
        description: (
          <>
            Worked with Slack’s partnership team to create unique slack
            experiences with Watson’s AI tech aimed at solving enterprise scale
            issues. We used design thinking and prototyped experiences for
            expert identification, organizational insights, and security (data
            loss protection). I also contributed to Slack’s own{' '}
            <Link
              href={
                'https://github.com/slackapi/bolt-js/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Aclosed+author%3Abarlock'
              }
            >
              developer tools
            </Link>{' '}
            improving performance and developer experience.
          </>
        ),
      },
      {
        title: 'InnerSource@IBM',
        company: 'IBM',
        time: 'Jul 2019 - Jun 2022',
        description: (
          <>
            Championed{' '}
            <Link
              href={'https://resources.github.com/innersource/fundamentals/'}
            >
              “inner sourcing”
            </Link>{' '}
            projects throughout the company and maintained several internal
            tools. I built and maintained a python Kubernetes{' '}
            <Link
              href={
                'https://kubernetes.io/docs/concepts/extend-kubernetes/operator/'
              }
            >
              operator framework
            </Link>{' '}
            used by multiple CloudPak teams as well as contributing to and
            supporting shared build and infrastructure tooling.
          </>
        ),
      },
    ],
  },
  {
    title: 'Senior Software Engineer',
    time: 'Aug 2018 - Jul 2019',
    company: 'Consensys',
    logoSrc: '/consensys.jpeg',
    description: (
      <>
        Built <Link href={'https://medium.com/web3studio'}>Web3Studio</Link> to
        conceive and build things that inspire and enable developers to build
        novel, unexpected, and innovative products that excite and activate the
        community to expand blockchain’s boundaries.
      </>
    ),
    details: [
      <>
        Prototyped tamper-resistant, distributed, static websites (
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
  },
  {
    title: 'Senior Software Engineer',
    time: 'Feb 2018 - Jul 2018',
    company: 'LifeOmic | JupiterOne',
    logoSrc: '/lifeomic.jpeg',
    description: (
      <>
        Worked full-stack on LifeOmic data platform and transitioned to
        JupiterOne where I lead the front-end team. I maintained a HIPPA
        compliant CI/CD pipeline and worked across the company to create a
        shared design system.
      </>
    ),
  },
  {
    jobs: [
      {
        company: 'IBM Whitewater',
        logoSrc: '/ibm.jpeg',
        title: 'Senior Software Engineering Lead',
        time: 'Aug 2015 - Feb 2018',
        description: (
          <>
            Led an enterprise transformation effort to bring best-of-breed tools
            to IBMers to improve productivity and happiness. We rolled out and
            facilitated the adoption of the worlds largest deployments of Slack,
            GitHub, and TravisCI. We changed how work is done inside IBM.
          </>
        ),
        details: [
          'Led a multi-disciplinary team in Agile and continuous integration and delivery',
          'Practiced resilience engineering to ensure tool uptime and reduce reduce alert-fatigue',
          'Led internal and cross-company learning reviews (post-mortems)',
          'Spread modern practices with multi-day conference like talks and hackathons',
          'Taught “Developer Days”, a new-hire bootcamp for testing, Agile, and Design Thinking',
          'Developed Slack bots automate internal processes',
        ],
      },
      {
        company: 'IBM Storefront',
        title: 'Software Engineer',
        time: 'Feb 2015 - Aug 2015',
        description: (
          <>
            Modernized IBM’s{' '}
            <Link href={'https://www.ibm.com/products'}>
              Digital Storefront
            </Link>{' '}
            with a focus on user experience, resilience engineering, and code
            quality. We continuously delivered code updates via TravisCI to IBM
            Bluemix (Cloud Foundry).
          </>
        ),
      },
      {
        company: 'IBM Service Engage',
        title: 'Software Engineer',
        time: 'Jul 2013 - Feb 2015',
        description: (
          <>
            Continuously delivered a full-stack interactive experience (learn,
            try, buy) for IBM Tivoli’s SaaS offerings. We pioneered CI/CD within
            IBM and deployed to IBM’s early cloud offering before it was in GA
            with fail overs to other providers. I worked closely with our design
            and analytics teams to iterate towards the best possible user
            experience.
          </>
        ),
      },
    ],
  },
];
