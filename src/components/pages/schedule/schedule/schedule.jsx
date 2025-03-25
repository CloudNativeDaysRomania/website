/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

import AdelinaStanciuPhoto from './images/adelina-stanciu-photo.jpg';
import AdrianVladuPhoto from './images/adrian-vladu-photo.jpg';
import AleodorTabarceaPhoto from './images/aleodor-tabarcea-photo.jpg';
import AlessandroPilottiPhoto from './images/alessandro-pilotti-photo.jpg';
import AlessandroVozzaPhoto from './images/alessandro-vozza-photo.jpg';
import AlexandruDejanuPhoto from './images/alexandru-dejanu-photo.jpg';
import AndraSomesanPhoto from './images/andra-somesan-photo.jpg';
import AndreeaOlaruPhoto from './images/andreea-olaru-photo.jpg';
import AndrewMartinPhoto from './images/andrew-martin-photo.jpeg';
import BogdanTrufandaPhoto from './images/bogdan-trufanda-photo.jpg';
import CarlosMestrePhoto from './images/carlos-mestre-del-pino-photo.jpg';
import DianaTodeaPhoto from './images/diana-todea-photo.jpg';
import GenericSpeakerPhoto from './images/generic-speaker-photo.jpg';
import GeorgeHaberPhoto from './images/george-haber-photo.jpeg';
import IrinaVerlanPhoto from './images/irina-verlan-photo.jpg';
import IulianTaiatuPhoto from './images/iulian-taiatu-photo.png';
import LukaszHusarzPhoto from './images/lukasz-husarz-photo.jpg';
import MarcinPaluszekPhoto from './images/marcin-paluszek-photo.jpeg';
import MariusIordachePhoto from './images/marius-iordache-photo.jpg';
import MihaiVasilescuPhoto from './images/mihai-vasilescu-photo.jpg';
import NicolasFrankelPhoto from './images/nicolas-frankel-photo.jpg';
import PhilipMiglinciPhoto from './images/philip-miglinci-photo.jpg';
import PiotrTrebaczPhoto from './images/piotr-trebacz-photo.jpg';
import PlamenPetkovPhoto from './images/plamen-petkov-photo.jpg';
import RaduGheorghePhoto from './images/radu-gheorghe-photo.jpg';
import RalucaBicaPhoto from './images/raluca-bica-photo.jpg';
import RazvanDeaconescuPhoto from './images/razvan-deaconescu-photo.jpg';
import SimonaBotnerPhoto from './images/simona-botner-photo.jpg';
import VladOnetiuPhoto from './images/vlad-onetiu-photo.jpg';

// GenericSpeakerPhoto is default when no speaker picture is present
// TODO: merge with ITEMS array from components/pages/home/speakers
const ITEMS = [
  {
    title: 'Room 1',
    isHeader: true,
    secondTrack: {
      title: 'Room 2',
    },
    thirdTrack: {
      title: 'Room 3',
    },
  },
  {
    time: '8:00',
    title: 'Registration/Badge Pick Up',
    duration: '30 min',
  },
  {
    time: '8:30',
    title: 'Welcome coffee',
    duration: '60 min',
  },
  {
    time: '9:30',
    title: 'Intro from the Organizers',
    duration: '15 min',
  },
  {
    id: '01',
    time: '9:45',
    title: 'Unlocking Innovation: Start Thinking Like a Scientist',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '1',
        name: 'Andra Somesan',
        company: 'AWS',
        photo: AndraSomesanPhoto,
      },
    ],
    presentation: `Let’s dive into the mindset that drives groundbreaking discoveries. This keynote explores how curiosity, experimentation, and collaboration can revolutionize any new solution. Join me as we uncover practical strategies to foster innovation, break down complex problems, and harness data-driven insights to transform your strategies into game-changing realities.`,
  },
  {
    id: '02',
    time: '10:15',
    title: ' AI or Not AI, That Is the Question',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '2',
        name: 'George Haber',
        company: 'Entrepreneur',
        photo: GeorgeHaberPhoto,
      },
    ],
    presentation: `With a distinguished career in AI, tech innovation, and entrepreneurship, George will dive into the future of technology and business in his keynote.`,
  },
  {
    time: '10:45',
    title: 'Break/Split Room',
    duration: '15 min',
  },
  {
    id: '031',
    time: '11:00',
    title: 'Kube Resource Orchestrator: Simplify Kubernetes Resource Optimization',
    duration: '30 min',
    isKeynote: false,
    speakers: [
      {
        id: '31',
        name: 'Simona Botner',
        company: 'Google Cloud',
        photo: SimonaBotnerPhoto,
      },
    ],
    presentation:
      "This session provides a technical dive into Kube Resource Orchestrator, a groundbreaking tool for Kubernetes resource management. We'll explore its architecture, key components, and how it integrates with existing Kubernetes infrastructure. Learn how it leverages advanced algorithms and machine learning to automate resource optimization, improve cluster density, and reduce operational complexity. We'll also cover its API, configuration options, and best practices for deployment and management.",

    secondTrack: {
      id: '032',
      time: '11:00',
      title: 'The Way of Cloud Native AI',
      duration: '30 min',
      speakers: [
        {
          id: '13',
          name: 'Alessandro Vozza',
          company: 'Microsoft',
          photo: AlessandroVozzaPhoto,
        },
      ],
      presentation: `We will delve into the magic world of LLM training and inference using cloud native and open source tooling; we will explore how the current GenAI revolution benefits from open standards, programmable infrastructure and the powerful paradigms of cloud native. We will expouse practical knowledge on how and why running AI/ML workloads on Kubernetes and end up with a short demo.`,
    },
    thirdTrack: {
      id: '033',
      time: '11:00',
      title: 'Cloud Native Telco Transformation: From Legacy to Agility',
      duration: '30 min',
      speakers: [
        {
          id: '14',
          name: 'Marius Iordache',
          company: 'Orange Romania',
          photo: MariusIordachePhoto,
        },
      ],
      presentation: `Exploring how telecommunications providers modernize their infrastructure using cloud native principles and technologies`,
    },
  },
  {
    id: '041',
    time: '11:45',
    title: 'Nested Worlds: Unleash the Power of vClusters for Accelerated CI Workflows and Testing',
    duration: '30 min',
    speakers: [
      {
        id: '15',
        name: 'Iulian Taiatu',
        company: 'Adobe',
        photo: IulianTaiatuPhoto,
      },
    ],
    presentation: `As Kubernetes adoption accelerates, the demand for scalable, efficient, and isolated environments to manage increasingly complex workloads has become paramount. Virtual clusters (vClusters) offer an innovative solution by enabling nested Kubernetes clusters within shared host infrastructures. This paradigm integrates the advantages of independent control planes, dedicated API servers, and resource abstraction and sharing to facilitate seamless multi-tenancy while optimizing resource utilization.
<br/><br/>
This session provides a comprehensive exploration of the architecture and operational advantages of vClusters, emphasizing their role in enhancing multi-tenancy, automating testing processes, and streamlining CI/CD workflows. Through a detailed demonstration, attendees will gain practical insights into the application of vClusters in real-world scenarios, focusing on their capability to replicate production-grade environments for testing.
<br/><br/>
The live demo will highlight how vClusters simplify Kubernetes controller testing by creating isolated environments that integrate seamlessly with existing AWS Roles & Policies. Attendees will observe an end-to-end workflow, from provisioning vClusters to executing Pull Request tests, showcasing how this approach minimizes configuration overhead, optimizes CI pipelines, and supports scalable, efficient Kubernetes development practices.`,
    secondTrack: {
      id: '042',
      time: '11:45',
      title:
        'Proactive Threat Mitigation with Threat Modeler: Securing APIs and Authentication in Azure',
      duration: '30 min',
      speakers: [
        {
          id: '32',
          name: 'Adelina Stanciu',
          company: 'Finastra',
          photo: AdelinaStanciuPhoto,
        },
      ],
      presentation: `This in-depth session explores how to proactively identify and mitigate security threats in your cloud-native applications.
      <br/><br/>
      We will examine common security vulnerabilities such as Authentication Abuse, Malicious Insiders, and Insecure Interfaces and APIs in cloud environments, with a specific focus on Azure-native solutions.
      <br/><br/>
      You will learn best practices for securing APIs, including strong authentication, encryption, and API access control, to protect against unauthorized access and data breaches.
      <br/><br/>
      We will also highlight how Azure tools like Azure Key Vault and Azure API Management can help securely manage sensitive information and facilitate integration with external systems.
      <br/><br/>
      Through practical, real-world examples, we’ll explore how to leverage threat modeling techniques, identify vulnerable interfaces, and apply targeted security controls to defend against common attack vectors.`,
    },
    thirdTrack: {
      id: '043',
      time: '11:45',
      title: 'Zero Downtime, Maximum Play: Evolving Game Servers from Bare Metal to K3s',
      duration: '30 min',
      speakers: [
        {
          id: '17',
          name: 'Łukasz Husarz',
          company: 'Ten Square Games S.A.',
          photo: LukaszHusarzPhoto,
        },
        {
          id: '23',
          name: 'Marcin Paluszek',
          company: 'Ten Square Games S.A.',
          photo: MarcinPaluszekPhoto,
        },
      ],
      presentation: `In this session, we’ll share our journey of transforming a high-performance, custom-protocol-based game server from a traditional bare-metal setup to a dynamic, Kubernetes-powered environment (k3s) hosted entirely by our team. This transition from a classic Java, database, and load balancer model to a fully containerized deployment leveraged powerful tools like ArgoCD, Helm, Istio, and the Prometheus stack to achieve zero downtime during updates (custom solution), boost server responsiveness, enhance player experience, and introduce agile deployment strategies including canary, blue-green, and autoscaling based on player session metrics. Attendees will gain insight into the specific architectural choices, the challenges of adapting custom communication protocols to cloud-native solutions, and how we balanced the demands of performance and flexibility—all while keeping players in mind.`,
    },
  },
  {
    id: '051',
    time: '12:30',
    title: 'The Infinite Hotel: Scaling Multi-Tenant Platforms through a Unified API',
    duration: '30 min',
    speakers: [
      {
        id: '18',
        name: 'Carlos Mestre del Pino',
        company: 'Microsoft',
        photo: CarlosMestrePhoto,
      },
    ],
    presentation: `As platform teams evolve, platforms extend beyond infrastructure to application services, cloud resource management, and middleware orchestration. Managing these distributed components across clusters and teams demands a unified, scalable approach. This session shows how to manage infrastructure, tenants, and application services entirely through Kubernetes by building a modular, multi-tenant, multi-control-plane platform. Attendees will learn to extend the Kubernetes API with Control Planes for distributed, tenant-aware infrastructure management. We’ll explore CNCF projects to create abstractions and automation, enabling platform teams to offer consistent services and self-service capabilities. Topics include multi-tenancy with in- and out-of-cluster isolation, unified APIs for control-plane orchestration, and avoiding common pitfalls in multi-control-plane management. By the end, attendees will have a roadmap for scalable platforms supporting centralized and tenant-managed services.`,
    secondTrack: {
      id: '052',
      time: '12:30',
      title: 'Delete all Dockerfiles',
      duration: '30 min',
      speakers: [
        {
          id: '19',
          name: 'Piotr Trębacz',
          company: 'Freelancer',
          photo: PiotrTrebaczPhoto,
        },
      ],
      presentation: `Writing a good Dockerfiles is hard enough, teaching others how to do it and keeping it maintained is even harder. So how can you possibly keep touch with multiple teams spinning dozens of projects each? Of course you abstract and metaprogram! But how to avoid NIH syndrome then?
<br/><br/>
This talk will be about pitfalls of independent fullstack teams dockerizing their applications and showcase the open source solution that's in line with Platform Engineering - Cloud Native Buildpacks.
<br/><br/>
We will define what is a "Production Ready Container" for everybody and how to trigger its build with one command. I will show how easy it will be to add or expand the technology stacks that you maintain - so you won't need to hunt multiple repositories to change the Dockerfiles in each of them.`,
    },

    thirdTrack: {
      id: '053',
      time: '12:30',
      title: 'Migrating a production workload to another AWS account',
      duration: '30 min',
      speakers: [
        {
          id: '30',
          name: 'Andreea Olaru',
          company: 'eMag',
          photo: AndreeaOlaruPhoto,
        },
      ],
      presentation:
        'Our journey of migrating our production workload to another AWS account with challenges and discoveries. Migration including aurora db(mysql), TBs of s3 data, route53 zone, elasticache and some other aws compute services.',
    },
  },
  {
    time: '13:00',
    title: ' Lunch Break',
    duration: '1 hour',
  },
  {
    id: '061',
    time: '14:00',
    title:
      'Fleet Commander: Building a Scalable Hub-and-Spoke Architecture for Kubernetes Clusters',
    duration: '30 min',
    speakers: [
      {
        id: '24',
        name: 'Plamen Petkov',
        company: 'Fastmarkets',
        photo: PlamenPetkovPhoto,
      },
    ],
    presentation:
      "Every organization's journey with Kubernetes is unique. This talk shares our evolution from a simple AKS cluster template to Fleet Commander - a comprehensive hub-and-spoke platform managing multiple clusters. Through practical examples and real implementation details, we'll explore how we combined GitOps principles with open-source tools to build a solution that feels like a premium platform while maintaining full transparency and avoiding vendor lock-in. You'll see how we leveraged GitHub Actions, Terraform, and ArgoCD to create a streamlined workflow, and how we implemented Grafana's LGTM stack to achieve enterprise-grade observability without the enterprise price tag." +
      '<br/><br/>' +
      `Key Takeaways:<br/>
- Understanding the benefits and implementation patterns of a hub-and-spoke architecture for Kubernetes cluster management with practical configuration examples<br/>
- Learning how to leverage existing tools (ArgoCD, Grafana's LGTM) to build a centralized observability setup that feels like a premium SaaS solution<br/>
- Practical insights into cluster lifecycle with GitHub Actions and Terraform and cost-benefit analysis of building vs buying a cluster management solution<br/>
- Real-world examples of extending monitoring beyond Kubernetes to traditional VM workloads and SSL certificates` +
      '<br/><br/>' +
      'This talk is aimed at DevOps engineers, SREs, and platform engineers who manage multiple Kubernetes clusters and are looking for practical, transparent solutions to cluster management and observability challenges. Basic familiarity with Kubernetes concepts and GitOps principles is helpful but not required.',
    secondTrack: {
      id: '062',
      time: '14:00',
      title: 'Containing the Threat: Analyzing cryptomining campaigns',
      duration: '30 min',
      speakers: [
        {
          id: '25',
          name: 'Bogdan Trufanda',
          company: 'CrowdStrike',
          photo: BogdanTrufandaPhoto,
        },
        {
          id: '26',
          name: 'Mihai Vasilescu',
          company: 'CrowdStrike',
          photo: MihaiVasilescuPhoto,
        },
      ],
      presentation:
        'According to OWASP, insecure workload configuration is the top security problem in Kubernetes. With the shift to Platform engineering, minimizing the attack surface of our Kubernetes clusters becomes even more critical.' +
        '<br/><br/>' +
        "This talk will cover the Principle of Least Privilege and how it can be applied to balance robust security and a good experience for users and administrators. Moreover, we'll see how to use Falco to observe if we did well and detect suspicious events that may happen in our clusters anyway." +
        '<br/><br/>' +
        'Join us to discover how the Principle of Least Privilege, Falco and observability empower you to safeguard your Kubernetes ecosystem without making yourself and your users suffer.',
    },

    thirdTrack: {
      id: '063',
      time: '14:00',
      title: 'Headless Browsers in the Cloud',
      duration: '30 min',
      speakers: [
        {
          id: '20',
          name: 'Razvan Deaconescu',
          company: 'Unikraft / POLITEHNICA Bucharest',
          photo: RazvanDeaconescuPhoto,
        },
      ],
      presentation: `With the advanced of AI agents, headless browsers are an increasingly important part in the cloud ecosystem. They are useful to scrape websites, create screenshots and export contents, while using the full power of modern browsers (Chromium, Firefox).
      <br/><br/>
      The cloud ecosystem presents several headless browser offerings, such as <a href='https://www.browserless.io/'><u>Browserless.io</u></a>, <a href='https://www.browserbase.com/'><u>Browserbase</u></a>, <a href='https://www.zenrows.com/'><u>Zenrows</u></a>, <a href='https://phantomjscloud.com/'><u>PhantomJS Cloud</u></a>. Yet, these solutions mostly still use containers and do not fully use a true serverless model.
      <br/><br/>
      Enter <a href='https://unikraft.cloud/'><u>Unikraft Cloud</u></a>, the True Serverless Platform. Unikraft Cloud is the platform of choice for intermitent and bursty workloads, such as those that include headless browsers.
      <br/><br/>
      At Unikraft Cloud we offer support for Playwright and Puppeteer frameworks, backed by Firefox, Chromium and WebKit browsers, all running in a true serverless manner, including scale-to-zero, auto-scale, and stateful millisecond (re)starts. Moreover, we are to provide singular instances running browsers with a WebSocket interface, decoupling the application logic from the browser service. All backed by efficient virtual machines and the millisecond Unikraft Cloud technology.
      <br/><br/>
      We will demo the deployment and use of headless browsers in Unikraft Cloud, we will show how you can create fleets of headless browser instances with minimum costs and millisecond semantics, and we will take a glimpse into the inner magic of the Unikraft Cloud platform.`,
    },
  },
  {
    id: '071',
    time: '14:45',
    title:
      'Architecting Seismic Intelligence with a High-Performance Serverless Earthquake Alert System',
    duration: '30 min',
    speakers: [
      {
        id: '28',
        name: 'Vlad Onetiu',
        company: 'DataIceberg',
        photo: VladOnetiuPhoto,
      },
    ],
    presentation: `In our upcoming presentation, we'll explore a cutting-edge architectural solution for real-time SMS and email notifications, particularly geared towards responding to earthquake events. This system is designed to handle rapid data transmission, listening for event changes every second, making it ideal for real time critical alert scenarios. Central to our discussion will be the integration of Lambda functions and Confluent Kafka, coupled with advanced multithreading techniques and DynamoDB lock strategies.<br/><br/>
      A focal point of our presentation will be addressing the challenges and innovative solutions involved in integrating Confluent Kafka with Lambda functions to enable serverless operation of both producers and consumers. This is a key element in ensuring the quick and efficient distribution of notifications through parallel methods. Additionally, we will delve into the implementation of an automated scaling mechanism, which is vital for optimising the performance of the Serverless Notification ecosystem.<br/><br/>
      Our aim is to provide a comprehensive insight into how these technologies can be effectively combined to develop a robust and efficient system, capable of delivering critical real-time alerts for situations like earthquake occurrences, ultimately playing a crucial role in saving human lives.`,

    secondTrack: {
      id: '072',
      time: '14:45',
      title: 'Never Trust, Always Verify: Principles of Zero-Trust Security in Kubernetes',
      duration: '30 min',
      speakers: [
        {
          id: '29',
          name: 'Raluca Bica',
          company: 'Ericsson',
          photo: RalucaBicaPhoto,
        },
      ],
      presentation: `In an era of increasingly sophisticated cyber threats, the traditional "trust but verify" approach to security is no longer enough. Zero-trust security adopts the principle of "Never Trust, Always Verify" to secure every layer of a distributed system.<br/><br/>
        This session delves into how zero-trust can be used in Kubernetes with tools like network policies, service meshes, and policy engines to enforce authentication, authorization, and encryption.`,
    },

    thirdTrack: {
      id: '073',
      time: '14:45',
      title: 'Mastering Modern Software Distribution: On-Prem, Air-Gapped, and BYOC Challenges',
      duration: '30 min',
      speakers: [
        {
          id: '27',
          name: 'Philip Miglinci',
          company: 'Glasskube',
          photo: PhilipMiglinciPhoto,
        },
      ],
      presentation:
        'Distributing software across diverse environments—on-premises, air-gapped systems, and bring-your-own-cloud (BYOC) setups—presents unique challenges that can overwhelm even experienced teams. Each deployment target introduces specific requirements for installation, configuration, updates, and lifecycle management, making it critical to design flexible yet reliable distribution strategies.' +
        '<br/><br/>' +
        `This talk provides a comprehensive look into the modern approaches and tools that can help streamline software delivery. Topics include:
<br/>
- Packaging Strategies: Best practices for semantic versioning, dependency management, and build automation to ensure consistency and ease of deployment.
<br/>
- Pre-Flight and Target Assessments: How to prepare your software for complex environments by including pre-flight checks, configuration validation, and packaging dependencies for air-gapped installations.
<br/>
- Deployment Methods: Comparing methods like binaries, Docker images, Helm charts, and other BYOC models, highlighting their strengths and use cases.
<br/>
- Security and Application Boundaries: Key considerations for securing software within Kubernetes clusters, including the decision between namespaced and cluster-scoped installations, and how to minimize risks while maintaining operational flexibility.
<br/>
- Lifecycle Management: Strategies for managing updates, monitoring licenses, and maintaining communication with distributed deployment teams post-installation.
` +
        '<br/><br/>' +
        'The session will also dive into anonymized real-world examples, illustrating how successful organizations have navigated these challenges. You’ll learn actionable dos and don’ts, evaluate state-of-the-art tools, and discover new techniques to make your software easier to distribute, maintain, and upgrade across diverse environments.' +
        '<br/><br/>' +
        'Whether you’re dealing with air-gapped installations, multi-cloud configurations, or on-prem solutions, this talk will equip you with the knowledge and insights to take your software distribution processes to the next level.',
    },
  },

  {
    id: '081',
    time: '15:30',
    title: 'The first CNCF / Linux Foundation Operating System - Flatcar Container Linux',
    duration: '30 min',
    speakers: [
      {
        id: '12',
        name: 'Adrian Vladu',
        company: 'Cloudbase Solutions',
        photo: AdrianVladuPhoto,
      },
      {
        id: '11',
        name: 'Alessandro Pilotti',
        company: 'Cloudbase Solutions',
        photo: AlessandroPilottiPhoto,
      },
    ],
    presentation:
      "'A community Linux distribution designed for container workloads, with high security and low maintenance' - Flatcar Container Linux is the first Linux based operating system CNCF incubating project. In this presentation, we will go through what makes Flatcar Container Linux secure, easy to deploy and use in the cloud native context of containerization and Kubernetes.",
    secondTrack: {
      id: '082',
      time: '15:30',
      title: 'Vespa: A Fast Search/Vector DB with a Microservices Architecture',
      duration: '30 min',
      speakers: [
        {
          id: '16',
          name: 'Radu Gheorghe',
          company: 'Vespa.ai',
          photo: RaduGheorghePhoto,
        },
      ],
      presentation: `An architecture session, contrasting the layout of Vespa with that of more familiar search engines like Elasticsearch.
<br/><br/>
Explains how we can get a more stable and scalable cluster with massive query performance gains. And because there's no free lunch, the trade-offs in terms of complexity and write performance.
<br/><br/>
Contains an obligatory demo of running Vespa in Kubernetes.`,
    },

    thirdTrack: {
      id: '083',
      time: '15:30',
      title: 'From zero to developer: my one year serendipity journey with OpenTelemetry',
      duration: '30 min',
      speakers: [
        {
          id: '33',
          name: 'Diana Todea',
          company: 'EQS Group',
          photo: DianaTodeaPhoto,
        },
      ],
      presentation:
        "Becoming a contributor to an open-source project is a transformative step in any developer's career. This session explores the journey from first-time contributor to active developer, covering best practices for navigating project communities, understanding codebases, and making meaningful contributions. Learn strategies for selecting the right project, mastering collaboration tools, and embracing the culture of open-source development. The audience will be inspired about my one year journey with the open source project OpenTelemetry and how I have built a proof of concept for it and achieved developer status for this project. By the end of this talk, the public will gain insights into the tools to become a better developer and how to build more engagement with the community.",
    },
  },
  {
    id: '091',
    time: '16:15',
    title: 'Ops Conservation: The Total Amount of Operations in the Universe Remains Constant',
    duration: '30 min',
    speakers: [
      {
        id: '34',
        name: 'Alexandru Dejanu',
        company: 'Systematic',
        photo: AlexandruDejanuPhoto,
      },
    ],
    presentation:
      'From DevOps, to SRE and Platform Engineering, the world of operations is vast and ever-evolving. Join this presentation to explore and understand the intricate connections between containers, container runtimes, Kubernetes, GitOps and how they come together to shape modern Operations.',

    secondTrack: {
      id: '092',
      time: '16:15',
      title: 'Ethical AI in Cloud Native: Building Trustworthy Applications',
      duration: '30 min',
      speakers: [
        {
          id: '35',
          name: 'Irina Verlan',
          company: 'Google',
          photo: IrinaVerlanPhoto,
        },
      ],
      presentation: `As AI becomes an integral part of cloud-native technologies, the need for ethical considerations has never been greater. This workshop explores the critical frameworks and practices for ensuring AI applications are trustworthy, transparent, and fair. Attendees will learn how to address challenges like data privacy, algorithmic bias, and ethical decision-making within cloud-native environments. Through real-world case studies and hands-on exercises, participants will gain practical tools to assess and mitigate ethical risks in AI pipelines. Join us to discover how to build AI-driven solutions that not only perform but also align with responsible technology practices.`,
    },

    thirdTrack: {
      id: '093',
      time: '16:15',
      title: 'End-to-End Pull Request Testing on Kubernetes: A Walkthrough',
      duration: '30 min',
      speakers: [
        {
          id: '36',
          name: 'Nicolas Fränkel',
          company: 'Loft Labs',
          photo: NicolasFrankelPhoto,
        },
      ],
      presentation: `As applications increasingly rely on Kubernetes for deployment, ensuring seamless integration and end-to-end testing during pull requests is crucial. This talk dives into the practical steps of building a robust CI/CD pipeline that mirrors production environments, enabling reliable and efficient testing within your Kubernetes ecosystem.
<br/><br/>
We’ll explore how to:
<br/>
- Set up foundational unit and integration tests using modern tools like Testcontainers and GitHub Workflows.<br/>
- Integrate Google Kubernetes Engine (GKE) to emulate a production-grade cluster for testing.<br/>
- Leverage vCluster to isolate test environments, ensuring parallel runs and minimizing interference.<br/>
- Attendees will gain actionable insights to create scalable and maintainable testing pipelines via an existing working example.`,
    },
  },
  {
    time: '16:45',
    title: 'Break/Split room revert',
    duration: '15 min',
  },
  {
    id: '101',
    time: '17:00',
    title: 'Evolving to a Human-Centric Cloud Computing',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '3',
        name: 'Aleodor Tabarcea',
        company: 'Stripe',
        photo: AleodorTabarceaPhoto,
      },
    ],
    presentation:
      'Aleodor Tabarcea, Engineering Manager at Stripe, will explore how AI and natural language interfaces are revolutionizing cloud-native systems in his keynote.',
  },
  {
    id: '111',
    time: '17:30',
    title: "Andrew Martin's Closing Keynote",
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '4',
        name: 'Andrew Martin',
        company: 'CEO of ControlPlane',
        photo: AndrewMartinPhoto,
      },
    ],
    presentation:
      'Andrew Martin, CEO of ControlPlane, will share his insights from a wealth of experience in security engineering, systems development, and containerized solutions.',
  },
  {
    time: '18:00',
    title: 'Mingle and Networking',
    duration: '60 min',
  },
];

const Schedule = ({ location }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [issecondTrack, setIssecondTrack] = useState(false);
  const [isthirdTrack, setIsthirdTrack] = useState(false);
  const [modalDataId, setModalDataId] = useState(0);

  const handleModalShow = (id) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setModalDataId(id);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setIssecondTrack(false);
    setIsthirdTrack(false);
    setModalDataId(0);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { state = {} } = location;

      if (state?.modalId) {
        handleModalShow(Number(state.modalId));
      } else {
        handleModalHide();
      }

      if (state?.issecondTrack) {
        setIssecondTrack(true);
      }
      if (state?.isthirdTrack) {
        setIsthirdTrack(true);
      }
    }
  }, [location]);

  return (
    <section className="safe-paddings pb-48 pt-9 lg:px-8 lg:pb-44 md:px-5 md:pb-40 sm:pb-24 sm:pt-10 xs:px-0">
      <ul className="mx-auto w-[1600px] max-w-full rounded-[10px] border border-primary-2 shadow-lg">
        {ITEMS.map(
          (
            {
              id,
              time,
              title,
              duration,
              isKeynote,
              speakers,
              secondTrack,
              isHeader,
              room,
              thirdTrack,
            },
            index
          ) => {
            const isEven = index % 2 === 1;

            return (
              <li
                className={clsx(
                  'grid grid-cols-[114px_1fr] md:grid-cols-[106px_1fr] sm:grid-cols-1',
                  {
                    'bg-primary-4': isEven,
                    'bg-lightGreen': title === 'Welcome',
                    'bg-lightYellow': title === 'Lunch',
                    'bg-lightOrange': title === 'Drinks / networking',
                  }
                )}
                key={index}
              >
                <div className="flex items-center justify-center sm:justify-start sm:px-5 sm:pt-5">
                  <time className="mb-auto mt-7 text-[15px] font-semibold leading-none tracking-tight text-primary-1 opacity-60 md:mt-5 md:text-sm sm:my-0">
                    {time}
                  </time>
                  {isKeynote && (
                    <span className="ml-4 hidden rounded-full bg-blue-1 px-2 py-1.5 text-xs font-semibold leading-none tracking-tighter text-white sm:inline-flex">
                      Keynote
                    </span>
                  )}
                </div>
                <div
                  className={clsx('border-l border-l-primary-2 sm:border-none', {
                    'grid grid-cols-3 sm:grid-cols-1': secondTrack,
                  })}
                >
                  <div
                    className={clsx(
                      'flex flex-col gap-y-3 px-7 py-6 md:py-4 sm:gap-y-2 sm:px-5 sm:pb-4',
                      isKeynote ? 'sm:pt-2' : 'sm:pt-3'
                    )}
                  >
                    {isHeader ? (
                      <div className="header-sticky">
                        <h2 className="text-2xl font-bold leading-snug">{title}</h2>
                      </div>
                    ) : (
                      <h3 className="inline-flex items-center justify-center gap-x-2">
                        {id ? (
                          <Button
                            className="!whitespace-normal !text-left text-lg !font-semibold !leading-snug tracking-tight text-primary-1 transition-colors duration-200 hover:text-blue-1 md:text-base"
                            theme="link-primary"
                            onClick={() => handleModalShow(index)}
                          >
                            {title}
                          </Button>
                        ) : (
                          <span className="text-lg font-semibold leading-snug tracking-tight text-primary-1 md:text-base">
                            {title}
                          </span>
                        )}
                        {isKeynote && (
                          <span className="rounded-full bg-blue-1 px-2 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                            Keynote
                          </span>
                        )}
                      </h3>
                    )}
                    <div className="mt-auto flex items-center justify-center gap-x-8 sm:gap-x-7">
                      {duration && (
                        <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 md:text-xs">
                          {room || ITEMS[0].title} - {duration}
                        </span>
                      )}
                      {speakers && speakers.length > 0 && (
                        <ul className="relative inline-flex columns-3 gap-x-5 before:absolute before:-left-4 before:bottom-0 before:top-0 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 sm:gap-x-4">
                          {speakers.map(({ name, photo, company }, index) => (
                            <li className="w-full" key={index}>
                              <figure className="flex items-center gap-x-2">
                                <img
                                  className="h-7 w-7 rounded-full"
                                  src={photo || GenericSpeakerPhoto}
                                  width={28}
                                  height={28}
                                  alt={name}
                                  loading="lazy"
                                />
                                {speakers.length <= 3 && (
                                  <figcaption className="text-sm font-medium leading-none text-primary-5 md:text-[13px]">
                                    {name}, {company}
                                  </figcaption>
                                )}
                              </figure>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  {secondTrack && (
                    <div
                      className={clsx(
                        'flex flex-col gap-y-3 border-l border-primary-2 px-7 py-6 md:py-4 sm:gap-y-2 sm:border-l-0 sm:border-t sm:px-5 sm:pb-4',
                        isKeynote ? 'sm:pt-2' : 'sm:pt-3'
                      )}
                    >
                      {isHeader ? (
                        <div className="header-sticky">
                          <h2 className="text-2xl font-bold leading-snug">{secondTrack.title}</h2>
                        </div>
                      ) : (
                        <h3 className="inline-flex items-center gap-x-3">
                          {secondTrack.id ? (
                            <Button
                              className="!whitespace-normal !text-left text-lg !font-semibold !leading-snug tracking-tight text-primary-1 transition-colors duration-200 hover:text-blue-1 md:text-base"
                              theme="link-primary"
                              onClick={() => {
                                handleModalShow(index);
                                setIssecondTrack(true);
                              }}
                            >
                              {secondTrack.title}
                            </Button>
                          ) : (
                            <span className="text-lg font-semibold leading-snug tracking-tight text-primary-1 md:text-base">
                              {secondTrack.title}
                            </span>
                          )}
                          {secondTrack.isKeynote && (
                            <span className="rounded-full bg-blue-1 px-4 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                              Keynote
                            </span>
                          )}
                        </h3>
                      )}
                      <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
                        {duration && (
                          <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 md:text-xs">
                            {secondTrack.room ? secondTrack.room : ITEMS[0].secondTrack.title} -{' '}
                            {secondTrack.duration}
                          </span>
                        )}
                        {secondTrack.speakers && secondTrack.speakers.length > 0 && (
                          <ul className="relative inline-flex gap-x-5 before:absolute before:-left-4 before:bottom-0 before:top-0 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 sm:gap-x-4">
                            {secondTrack.speakers.map(({ name, photo, company }, index) => (
                              <li className="" key={index}>
                                <figure className="flex items-center gap-x-2">
                                  <img
                                    className="h-7 w-7 rounded-full"
                                    src={photo || GenericSpeakerPhoto}
                                    width={28}
                                    height={28}
                                    alt={`${name} photo`}
                                    loading="lazy"
                                  />
                                  {secondTrack.speakers.length < 3 && (
                                    <figcaption className="text-sm font-medium leading-none text-primary-5 md:text-[13px]">
                                      {name}, {company}
                                    </figcaption>
                                  )}
                                </figure>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                  {thirdTrack && (
                    <div
                      className={clsx(
                        'flex flex-col gap-y-3 border-l border-primary-2 px-7 py-6 md:py-4 sm:gap-y-2 sm:border-l-0 sm:border-t sm:px-5 sm:pb-4',
                        isKeynote ? 'sm:pt-2' : 'sm:pt-3'
                      )}
                    >
                      {isHeader ? (
                        <div className="header-sticky">
                          <h2 className="text-2xl font-bold leading-snug">{thirdTrack.title}</h2>
                        </div>
                      ) : (
                        <h3 className="inline-flex items-center gap-x-3">
                          {thirdTrack.id ? (
                            <Button
                              className="!whitespace-normal !text-left text-lg !font-semibold !leading-snug tracking-tight text-primary-1 transition-colors duration-200 hover:text-blue-1 md:text-base"
                              theme="link-primary"
                              onClick={() => {
                                handleModalShow(index);
                                setIsthirdTrack(true);
                              }}
                            >
                              {thirdTrack.title}
                            </Button>
                          ) : (
                            <span className="text-lg font-semibold leading-snug tracking-tight text-primary-1 md:text-base">
                              {thirdTrack.title}
                            </span>
                          )}
                          {thirdTrack.isKeynote && (
                            <span className="rounded-full bg-blue-1 px-4 py-2 text-xs font-semibold leading-none tracking-tighter text-white sm:hidden">
                              Keynote
                            </span>
                          )}
                        </h3>
                      )}
                      <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
                        {duration && (
                          <span className="rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 md:text-xs">
                            {thirdTrack.room ? thirdTrack.room : ITEMS[0].thirdTrack.title} -{' '}
                            {thirdTrack.duration}
                          </span>
                        )}
                        {thirdTrack.speakers && thirdTrack.speakers.length > 0 && (
                          <ul className="relative inline-flex gap-x-5 before:absolute before:-left-4 before:bottom-0 before:top-0 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 sm:gap-x-4">
                            {thirdTrack.speakers.map(({ name, photo, company }, index) => (
                              <li className="" key={index}>
                                <figure className="flex items-center gap-x-2">
                                  <img
                                    className="h-7 w-7 rounded-full"
                                    src={photo || GenericSpeakerPhoto}
                                    width={28}
                                    height={28}
                                    alt={`${name} photo`}
                                    loading="lazy"
                                  />
                                  {thirdTrack.speakers.length < 3 && (
                                    <figcaption className="text-sm font-medium leading-none text-primary-5 md:text-[13px]">
                                      {name}, {company}
                                    </figcaption>
                                  )}
                                </figure>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          }
        )}
      </ul>
      <Modal
        modalData={
          issecondTrack
            ? ITEMS[modalDataId].secondTrack
            : isthirdTrack
            ? ITEMS[modalDataId].thirdTrack
            : ITEMS[modalDataId]
        }
        isVisible={isModalVisible}
        isPresentationShow
        onModalHide={handleModalHide}
      />
    </section>
  );
};

export default Schedule;
