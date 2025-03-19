/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

import AdrianVladuPhoto from './images/adrian-vladu-photo.jpg';
import AlessandroPilottiPhoto from './images/alessandro-pilotti-photo.jpg';
import AlessandroVozzaPhoto from './images/alessandro-vozza-photo.jpg';
import AlexRaiuPhoto from './images/alex-raiu-photo.jpg';
import AlexandrosCharosPhoto from './images/alexandros-charos-photo.jpg';
import AlexandruDejanuPhoto from './images/alexandru-dejanu-photo.jpg';
import AndraSomesanPhoto from './images/andra-somesan-photo.jpg';
import AndradaRaducanuPhoto from './images/andrada-raducanu-photo.jpg';
import AndreiCiocPhoto from './images/andrei-cioc-photo.jpg';
import AndreiPetrescuPhoto from './images/andrei-petrescu-photo.jpg';
import AndreiaIrinaOcanoaiaPhoto from './images/andreia-irina-ocanoaia-photo.jpg';
import CarlosMestrePhoto from './images/carlos-mestre-del-pino-photo.jpg';
import CarmenBobeiPhoto from './images/carmen-bobei-photo.jpg';
import ClaudiuHobjilaPhoto from './images/claudiu-hobjila-photo.jpg';
import DianaTodeaPhoto from './images/diana-todea-photo.jpg';
import FlorinLoghiadePhoto from './images/florin-loghiade-photo.jpg';
import GenericSpeakerPhoto from './images/generic-speaker-photo.jpg';
import GeorgeTudureanPhoto from './images/george-tudurean-photo.jpg';
import IulianTaiatuPhoto from './images/iulian-taiatu-photo.png';
import KatharinaSickPhoto from './images/katharina-sick-photo.jpg';
import MariusIordachePhoto from './images/marius-iordache-photo.jpg';
import MihaiGoguPhoto from './images/mihai-gogu-photo.png';
import OvidiuValeanuPhoto from './images/ovidiu-valeanu-photo.jpg';
import RaduGheorghePhoto from './images/radu-gheorghe-photo.jpg';
import RaduZamfirPhoto from './images/radu-zamfir-photo.jpg';
import RazvanDeaconescuPhoto from './images/razvan-deaconescu-photo.jpg';
import TimothyMamoPhoto from './images/timothy-mamo-photo.jpg';
import YujinKimPhoto from './images/yujin-kim-photo.jpg';

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
        id: '21',
        name: 'Andra Somesan',
        company: 'AWS',
        photo: AndraSomesanPhoto,
      },
    ],
    presentation: ``,
  },
  {
    id: '02',
    time: '10:15',
    title: ' AI or Not AI, That Is the Question',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '22',
        name: 'George Haber',
        company: 'Entrepreneur',
        photo: GenericSpeakerPhoto,
      },
    ],
    presentation: ``,
  },
  {
    time: '10:45',
    title: 'Break/Split Room',
    duration: '15 min',
  },
  {
    id: '031',
    time: '11:00',
    title: 'The first CNCF / Linux Foundation Operating System - Flatcar Container Linux',
    duration: '30 min',
    isKeynote: false,
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
      id: '043',
      time: '11:45',
      title: 'From zero to developer: my one year serendipity journey with OpenTelemetry',
      duration: '30 min',
      speakers: [
        {
          id: '17',
          name: 'Diana Todea',
          company: 'EQS Group',
          photo: DianaTodeaPhoto,
        },
      ],
      presentation: `Becoming a contributor to an open-source project is a transformative step in any developer's career. This session explores the journey from first-time contributor to active developer, covering best practices for navigating project communities, understanding codebases, and making meaningful contributions. Learn strategies for selecting the right project, mastering collaboration tools, and embracing the culture of open-source development. The audience will be inspired about my one year journey with the open source project OpenTelemetry and how I have built a proof of concept for it and achieved developer status for this project. By the end of this talk, the public will gain insights into the tools to become a better developer and how to build more engagement with the community.`,
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
      title: 'CAPtivating architecture: Navigating Distributed Systems and Microservices',
      duration: '30 min',
      speakers: [
        {
          id: '19',
          name: 'Alexandros Charos',
          company: 'OPAP',
          photo: AlexandrosCharosPhoto,
        },
      ],
      presentation: `The goal of this presentation is to go through with the audience the various pitfalls and gotchas that distributed systems entail.
We will go through a case study where a monolith was broken down to smaller services and the technical, business and organisational justifications for doing so.
<br/><br/>
We will evaluate our approaches in tackling some tough distributed systems problems as we analyse them in terms of communication (synchronous/asynchronous) and coordination (orchestration/choreography).
<br/><br/>
Finally we will focus on the overlooked importance of proper timeout and retry policies as a means to increase your system's resilience and therefore stability.`,
    },

    thirdTrack: {
      id: '053',
      time: '12:30',
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
    time: '13:00',
    title: ' Lunch Break',
    duration: '1 hour',
  },
  {
    id: '061',
    time: '14:00',
    title:
      'Dynamic Large Scale Spark on Kubernetes:Empowering the Community with Argo Workflows and Argo Events',
    duration: '30 min',
    speakers: [
      {
        id: '16',
        name: 'Ovidiu Valeanu',
        company: 'Amazon Web Services',
        photo: OvidiuValeanuPhoto,
      },
    ],
    presentation:
      'Are you eager to build and manage large-scale Spark clusters on Kubernetes for powerful data processing? Whether you are starting from scratch or considering migrating Spark workloads from existing Hadoop clusters to Kubernetes, the challenges of configuring storage, compute, networking, and optimizing job scheduling can be daunting. Join us as we unveil the best practices to construct a scalable Spark clusters on Kubernetes, with a special emphasis on leveraging Argo Workflows and Argo Events.' +
      '<br/><br/>' +
      'In this talk, we will guide you through the journey of building highly scalable Spark clusters on Kubernetes, using the most popular open-source tools. We will showcase how to harness the potential of Argo Workflows and Argo Events for event-driven job scheduling, enabling efficient resource utilization and seamless scalability. By integrating these powerful tools, you will gain better control and flexibility for executing Spark jobs on Kubernetes.',

    secondTrack: {
      id: '062',
      time: '14:00',
      title: 'Closing the Loop: Applying Least Privilege and Ensuring We Did It Well',
      duration: '30 min',
      speakers: [
        {
          id: '17',
          name: 'Katharina Sick',
          company: 'Dynatrace',
          photo: KatharinaSickPhoto,
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
      title: 'Bare metal Kubernetes on mixed x64 and ARM64',
      duration: '30 min',
      speakers: [
        {
          id: '18',
          name: 'Alessandro Pilotti',
          company: 'Cloudbase Solutions',
          photo: AlessandroPilottiPhoto,
        },
        {
          id: '19',
          name: 'Adrian Vladu',
          company: 'Cloudbase Solutions',
          photo: AdrianVladuPhoto,
        },
      ],
      presentation:
        'This session goes through the lifecycle of an automated Kubernetes deployment on bare metal platforms, both ARM64 and X64 servers. The focus is on full automation, scalability, repeatability of the deployment, leveraging ArgoCD, Cluster API and Tinkerbell stack.' +
        '<br/><br/>' +
        'The end result of the automation is a production grade Kubernetes cluster that has BGP networking using Cilium, Ceph hyperconverged storage using Rook and even a VM control plane with Kubevirt. As for observability, Prometheus/Grafana and Sentry are a given.' +
        '<br/><br/>' +
        'From the perspective of the underlying operating systems, generic ones like Ubuntu and Mariner, or container native like Flatcar -- all are supported via the extendability of Cluster API.',
    },
  },
  {
    id: '071',
    time: '14:45',
    title: 'CD and GitOps with flux @AdoreMe',
    duration: '30 min',
    speakers: [
      {
        id: '20',
        name: 'Mihai Gogu',
        company: 'AdoreMe',
        photo: MihaiGoguPhoto,
      },
    ],
    presentation:
      'The session is about how we handle gitops with flux at AdoreMe.' +
      '<br/><br/>' +
      'The presentation will touch subjects like: what is gitops, what are the advantages of it, how we chose flux and how it helps us managing multiple clusters and continous delivery for our microservices.',

    secondTrack: {
      id: '072',
      time: '14:45',
      title: "Mastering Cloud Kubernetes: Navigating Azure's Kubernetes Service Maze",
      duration: '30 min',
      speakers: [
        {
          id: '8',
          name: 'Florin Loghiade',
          company: 'UiPath',
          photo: FlorinLoghiadePhoto,
        },
      ],
      presentation:
        "Containers are easy; orchestrating them is the issue. We have cloud providers which offer 'managed' Kubernetes offerings that provide a no-headache experience. Are they actually? What are cloud providers actually offering?" +
        '<br/><br/>' +
        "We have multiple and even 'serverless' options when looking at cloud offerings for Kubernetes. Take Azure with their AKS offering, not fully managed; AWS with their EKS, not fully managed; the same thing goes with GCP." +
        '<br/><br/>' +
        'Picking your poison has meaning when coming to cloud offerings, and this session will cover pain points, issues and other caveats while deploying your services on Azure Kubernetes-managed offering while finding tips & tricks on making your life easier.',
    },

    thirdTrack: {
      id: '073',
      time: '14:45',
      title: 'Using Unikernels to deploy real-world apps',
      duration: '30 min',
      speakers: [
        {
          id: '21',
          name: 'Andreia-Irina Ocanoaia',
          company: 'Genezio',
          photo: AndreiaIrinaOcanoaiaPhoto,
        },
      ],
      presentation:
        'In this presentation, we will dive deep into the practical aspects of using unikernels to deploy production environments. Unikernels bring a fresh perspective to how we deploy applications promising significant increase in efficiency, security, and resource utilization.' +
        '<br/><br/>' +
        'But how can we practically harness this power to run real world applications?' +
        '<br/><br/>' +
        "That's the question we'll answer together in this talk." +
        '<br/><br/>' +
        "Whether you're a seasoned Node.js developer, a DevOps enthusiast, or just curious about the next frontier in cloud architectures, this talk is a great introduction to the challenges of running in a different and more lightweight architecture.",
    },
  },

  {
    id: '081',
    time: '15:30',
    title: 'Challenges of Migrating a High Traffic Mobile Game to Kubernetes',
    duration: '30 min',
    speakers: [
      {
        id: '22',
        name: 'Andrei Petrescu',
        company: 'CloudHero',
        photo: AndreiPetrescuPhoto,
      },
    ],
    presentation:
      'Migrating high-traffic applications is not easy, more so when you are constrained to do the migration within a reasonable time frame. Add to mix fundamental changes to the platform (Kubernetes instead of VMs, different cloud providers, different database versions), things can get tricky.' +
      '<br/><br/>' +
      "Join Andrei Petrescu, who leads the DevOps department at CloudHero, in a presentation about how he an his team planned and executed the migration of one of their customer's most popular game from VMs on Digital Ocean to Kubernetes on AWS." +
      '<br/><br/>' +
      'Andrei will go through the migration plan, setting up replication of the data, observability, developer productivity and security improvements of the new platform. Some of the technologies discussed are: MySQL, GitHub Actions, Jenkins, ArgoCD, Kubernetes (EKS), Redis / KeyDB, PHP-FPM.',

    secondTrack: {
      id: '082',
      time: '15:30',
      title: 'From Code to Cluster: Orchestrating 10,000+ Kubernetes deployments with 1 pipeline',
      duration: '30 min',
      speakers: [
        {
          id: '23',
          name: 'Andrada Raducanu',
          company: 'ING Hubs Romania',
          photo: AndradaRaducanuPhoto,
        },
      ],
      presentation:
        'There is a sea of tools one can use for the critical phase of Deployment during your SDLC. To keep our environment secure and reliable, ING chose to work with Kubernetes and Azure DevOps.' +
        '<br/><br/>' +
        'In this talk, we will share the success story of how 700 in-house developed APIs reached 10 000+ Production deployments in half a year, using one single pipeline.' +
        '<br/>' +
        'In order to stay in control, we use Open Policy Agent. To ensure the reliability and the resilience of the APIs, we use tools like: QuotaAutoscaler (ING open source CRD) and HorizontalPodAustoscaler, native rollback mechanisms with Helm, automatic certificates using CertManager and Prometheus monitoring.' +
        '<br/><br/>' +
        'The pipeline deploys code in Azure Kubernetes Service and on-prem Kubernetes clusters.' +
        '<br/>' +
        'This solution was built as a platform, designed to be agnostic to the target system, reducing the cognitive load on the teams and allowing them to focus on the application development.' +
        '<br/>' +
        'We call this The Kingsroad.',
    },

    thirdTrack: {
      id: '083',
      time: '15:30',
      title: 'Histology Augmentation: Scaling Federated Learning Solutions with Kubernetes',
      duration: '30 min',
      speakers: [
        {
          id: '24',
          name: 'Iulian Taiatu',
          company: 'Adobe',
          photo: IulianTaiatuPhoto,
        },
      ],
      presentation:
        'This paper presents a novel approach to augmenting histological image datasets for colorectal cancer using an Auxiliary Classifier Generative Adversarial Network (ACGAN) model within a Federated Learning (FL) framework.' +
        '<br/><br/>' +
        'The primary objective of this project is to enhance the dataset by generating synthetic images through the ACGAN model while preserving data privacy via FL. Different CNN and Vision Transformer-based models are employed to capture intrinsic data patterns.' +
        '<br/><br/>' +
        'Evaluation metrics include comparing classifier performance before and after augmentation, t-SNE plots to assess data structure similarity, FID scores for image quality comparison, and GradCAM analysis to visualize classifier focus areas.' +
        '<br/><br/>' +
        'The implementation leverages Kubernetes clusters to simulate FL, with each client represented as a namespace (e.g., hospital) to ensure data privacy. A dedicated namespace serves as the server for aggregating local client models into a global model for subsequent FL rounds.',
    },
  },
  {
    time: '16:00',
    title: ' Break',
    duration: '20 min',
    secondTrack: {},
    thirdTrack: {
      id: '092',
      time: '16:00',
      title: "2024: I Don't Know K8S and at This Point, I'm Too Afraid To Ask",
      duration: '20 min',
      speakers: [
        {
          id: '25',
          name: 'Alexandru Dejanu',
          company: 'Systematic',
          photo: AlexandruDejanuPhoto,
        },
      ],
      presentation:
        "It's 2024 and everybody has used or at least heard about Kubernetes… If you're at the start of the journey into Kubernetes, or you'd like to understand why Kubernetes is a compute abstraction and a platform for building platforms, then this talk is for you.",
    },
  },
  {
    id: '091',
    time: '16:20',
    title: '⚡️ Lightning Talk: Github Actions on Kubernetes',
    duration: '5 min',
    speakers: [
      {
        id: '26',
        name: 'Alex Raiu',
        company: 'Adobe',
        photo: AlexRaiuPhoto,
      },
    ],
    presentation:
      'GitHub Actions workflows for CI/CD with the power of multitenant Kubernetes clusters for enhanced scalability, security and resource utilization.',
  },
  {
    id: '101',
    time: '16:25',
    title: '⚡️ Lightning Talk: Kubernetes: A journey from Deckhand to Captain by passing CKA',
    duration: '5 min',
    speakers: [
      {
        id: '27',
        name: 'Carmen Bobei',
        company: 'ING Hubs',
        photo: CarmenBobeiPhoto,
      },
    ],
    presentation:
      'Kubernetes is like a ship, you either learn how to dock it and control it over seas or you shipwreck and drown. Being a DevOps Engineer controlling Kubernetes for the past 5 years I’ve been asked multiple times to dock the ship to port and thus to be the captain, but without an official rank I questioned myself over and over again.' +
      '<br/><br/>' +
      'I want to share my journey with you on achieving the rank of captain Kubernetes (CKA).' +
      '<br/><br/>' +
      'With this talk I hope to shed some light on the journey to come. I will tell you what I did to get ready in terms of trainings, playgrounds, and how to use the official documentation to your advantage, how to plan for a better study schedule, and how I made sure I was ready on the exam day and most importantly how I overcome my emotions.' +
      '<br/><br/>' +
      'It is not easy but if you practice, you will get to be captain K.',
  },
  {
    id: '111',
    time: '16:30',
    title: '⚡️ Lightning Talk: Securing the Cluster: Navigating Kubernetes Backup and Recovery',
    duration: '5 min',
    speakers: [
      {
        id: '28',
        name: 'Yujin Kim',
        company: 'consider it GmbH',
        photo: YujinKimPhoto,
      },
    ],
    presentation:
      'Securing a Kubernetes cluster involves addressing the challenges of backup and recovery, and transitioning beyond disaster recovery to ensure data resilience. In this presentation, I will share our journey to securing our own cluster. I will give a short overview over available solutions and explain which one we picked for our needs.' +
      '<br/>' +
      '<br/>' +
      'Furthermore, this talk will shed light on the various stages of the backup lifecycle from the initial setup and backup phases to the eventual restoration in the event of data loss. (And remember: a backup is only a backup if you checked that you can restore your data!) I hope to empower you to effectively respond to unexpected issues in your cluster.',
  },
  {
    id: '121',
    time: '16:35',
    title: '⚡️ Lightning Talk: Forester - KubeCon Hackathon Winner',
    duration: '5 min',
    speakers: [
      {
        id: '29',
        name: 'Radu Zamfir',
        company: 'dvloper.io',
        photo: RaduZamfirPhoto,
      },
      {
        id: '30',
        name: 'Andrei Cioc',
        company: 'dvloper.io',
        photo: AndreiCiocPhoto,
      },
      {
        id: '31',
        name: 'George Tudurean',
        company: 'dvloper.io',
        photo: GeorgeTudureanPhoto,
      },
    ],
    presentation:
      'We designed Forester, an app that spreads awareness and handles automatic detection and monitoring of deforestation globally, leveraging AI, open-source software and publicly available data such as satellite imagery.',
  },
  {
    time: '16:45',
    title: 'Break',
    duration: '15 min',
  },
  {
    id: '131',
    time: '17:00',
    title: 'Sponsored Keynote: May the Pods Be With You: A GKE Odyssey',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '3',
        name: 'Claudiu Hobjila',
        company: 'Google Cloud',
        photo: ClaudiuHobjilaPhoto,
      },
    ],
    presentation:
      "The session will provide a comprehensive overview of Google Kubernetes Engine (GKE). We'll cover core concepts, best practices, and real-world use cases.",
  },
  {
    id: '141',
    time: '17:30',
    title: 'Keynote: DevOps Lessons from a Primary School Teacher',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '4',
        name: 'Timothy Mamo',
        company: 'Community Enthusiast',
        photo: TimothyMamoPhoto,
      },
    ],
    presentation:
      'The ability to run stateful applications in general, and RDMS in particular, on Kubernetes is relatively new, but brings new and exciting capabilities to developers, DBAs and devops teams alike.' +
      '<br/><br/>' +
      'Think of self-service cluster creation and management, self-service backup and restore, automatic configuration of point-in-time recovery scenarios, etc. On top of that, by making Postgres clusters Kubernetes resources, you can now apply GitOps, CI/CD pipelines like Tekton and policy frameworks to your database.',
  },
  {
    time: '18:00',
    title: 'Closing Remarks from the Organizers',
    duration: '15 min',
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
                      <h3 className="inline-flex items-center gap-x-2">
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
                    <div className="mt-auto flex items-center gap-x-8 sm:gap-x-7">
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
