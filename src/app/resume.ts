import { PositionData } from '../components/position';

export const resume: PositionData[] = [
  {
    title: 'Staff Software Engineer',
    time: 'May 2022 - Sep 2023',
    company: 'SHOWRUNNER',
    logoSrc: '/showrunner.png',
    details: [
      'Architected an on-prem application to lower the bar to virtual production',
      'Built native applications for iOS, MacOS and Windows',
    ],
  },
  {
    title: 'Architect / Senior Software Engineer',
    company: 'IBM',
    time: 'Jun 2019 - Jun 2022',
    logoSrc: '/ibm.jpeg',
    description:
      'Infusing AI into IBM and partner products to build meaningfully better experiences. Worked on company-wide strategic initiatives including:',
    jobs: [
      {
        title: 'ConveyorAI - a low code AI App platform',
        details: [
          'Architected an extensible platform for MLOps and managing models in production',
        ],
      },
      {
        title: 'Watson AIOps',
        details: [
          'Worked with AI Researchers to bring novel anomaly detection into a product',
          'Built DevOps platform for continues integration and delivery of multi-team product',
        ],
      },
      {
        title: 'Slack-IBM Partnership',
        details: ['Designed and built AI Infused integration into Slack'],
      },
      {
        title: 'Innersource@IBM',
        details: [
          'Championed innersourcing projects and owned several internal tools',
          'Built and maintained a python Kubernetes operator framework used by multiple CloudPak teams',
        ],
      },
    ],
  },
  {
    title: 'Senior Software Engineer',
    time: 'Aug 2018 - Jul 2019',
    company: 'Consensys',
    logoSrc: '/consensys.jpeg',
    description:
      'Built Web3studio to conceive and build things that inspire and enable more developers to build more novel, unexpected, innovative things that excite and activate the community to expand blockchain’s boundaries.',
    details: [
      'Lead open source communities around novel blockchain use cases, frameworks, and proof of concepts',
      'Guided team agile practices including planning and estimating via ZenHub, scrum, and retrospectives',
      'Continuously delivered multiple projects through a narrative, user-focused, design-oriented approach',
      'Used dev-ops engineering practices and TDD to continuously deploy services to production on AWS',
      'Created a dev-ops platform to deploy tamper-resistant, scalable, and DDOS protected distributed static websites',
      'Built a scalable, economic primitive with the initial use of bringing a recurring revenue stream to artists through a normally frowned upon practice of "bootlegging"',
      'Created a mobile application to show a new cryptographic approach to sharding content onto IPFS',
    ],
  },
  {
    title: 'Senior Software Engineer',
    time: 'Feb 2018 - Jul 2018',
    company: 'LifeOmic',
    logoSrc: '/lifeomic.jpeg',
    description:
      'Senior Software engineer focused on delivering a security product to market.',
    details: [
      'Continuously deployed microservice-based web application through AWS Lambda',
      'Worked closely with a team of front end engineers and designers to build the product and a cross-company design system',
      'Built continuous deployment system to AWS with terraform and docker',
    ],
  },
  {
    jobs: [
      {
        company: 'IBM Whitewater',
        logoSrc: '/ibm.jpeg',
        title: 'Senior Software Engineering Lead',
        time: 'Aug 2015 - Feb 2018',
        description:
          'Led a cross-site, multi-disciplinary team of engineers and designers in the goal of fostering better continuous delivery, collaboration, and cloud-based expertise across the company. By introducing, and making safe, best-of-breed tools like Slack, GitHub, and TravisCI we changed the landscape of engineering at IBM.',
        details: [
          'Developed full-stack homepage for IBMers to understand our tools and best practices.',
          'Closely interacted with Slack product developers, managers, and customer success to help develop their product for IBM, tune performance, and work through outages',
          'Led internal and cross-company learning reviews (post-mortems)',
          'Built internal tooling to automate common support requests',
          'Created internal Slack bots to educate IBMers on best practices in Slack usage and continuous delivery',
          'Worked with global FED@IBM community and lead Hackacademies, a multi-day event with conference like talks and hackathon focused on modern Front End Development best practices.',
          'Lead Developer Day, a third-day bootcamp for developers at IBM to learn modern testing practices, Agile, and Design Thinking',
          'Mentored teammates on best practices, agile, and early career',
        ],
      },
      {
        company: 'IBM Storefront',
        title: 'Senior Software Engineer',
        time: 'Feb 2015 - Aug 2015',
        description:
          "Senior Software engineer for IBM's Digital Storefront https://www.ibm.com/marketplace.",
        details: [
          "Developed full stack website for all of IBM's products",
          'Focused on user experience, site reliability, and code quality',
          'Continuously delivered code updates via TravisCI to IBM Bluemix (Cloud Foundry).',
          'Mentored new hires on CI/CD',
        ],
      },
      {
        company: 'IBM Service Engage',
        title: 'Software Engineer',
        time: 'Jul 2013 - Feb 2015',
        description: 'Product developer for IBM Service Engage.',
        details: [
          'Developed full-stack website for users to learn/try/buy IBM cloud technologies.',
          'Practiced test driven development and code reviews to ensure seamless production deploys and team learning.',
          'Worked with tightly integrated design and analytics team in order to deliver best possible user experience.',
          'Built and maintained continuous deployment pipeline (10-20 deploys per day) for full stack into production on IBM Bluemix (Cloud Foundry).',
        ],
      },
    ],
  },
];
