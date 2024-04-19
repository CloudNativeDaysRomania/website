/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

// import AdrianVladuPhoto from './images/adrian-vladu-photo.jpg';
// import AlessandroPilottiPhoto from './images/alessandro-pilotti-photo.jpg';
import AlessandroVozzaPhoto from './images/alessandro-vozza-photo.png';
import AlexRaiuPhoto from './images/alex-raiu-photo.png';
import AndraSomesanPhoto from './images/andra-somesan-photo.jpeg';
// import AndradaRaducanuPhoto from './images/andrada-raducanu-photo.jpg';
// import AndreiPetrescuPhoto from './images/andrei-petrescu-photo.jpg';
import AndreiPitisPhoto from './images/andrei-pitis-photo.jpg';
// import AndreiaIrinaOcanoaiaPhoto from './images/andreia-irina-ocanoaia-photo.jpg';
import CarmenBobeiPhoto from './images/carmen-bobei-photo.jpg';
import ClaudiuHobjilaPhoto from './images/claudiu-hobjila-photo.jpg';
// import FlorinLoghiadePhoto from './images/florin-loghiade-photo.jpg';
import GenericSpeakerPhoto from './images/generic-speaker-photo.jpg';
import GeorgeHantzarasPhoto from './images/george-hantzaras-photo.jpeg';
// import IulianTaiatuPhoto from './images/iulian-taiatu-photo.png';
import JosephSandovalPhoto from './images/joseph-sandoval-photo.jpg';
// import KatharinaSickPhoto from './images/katharina-sick-photo.jpg';
// import MarkSagiKazarPhoto from './images/mark-sagi-kazar-photo.jpg';
import MatthiasBertschyPhoto from './images/matthias-bertschy-photo.jpeg';
// import MihaiGoguPhoto from './images/mihai-gogu-photo.png';
import MihalceaMihaiAlexandruPhoto from './images/mihalcea-mihai-alexandru-photo.jpg';
import OctavianPetrePhoto from './images/octavian-petre-photo.jpg';
// import OvidiuValeanuPhoto from './images/ovidiu-valeanu-photo.jpg';
import SarahGruneisenPhoto from './images/sarah-gruneisen-photo.jpg';
import StefanProdanPhoto from './images/stefan-prodan-photo.jpeg';
import TimothyMamoPhoto from './images/timothy-mamo-photo.jpg';
// import VincenzoScamporlinoPhoto from './images/vincenzo-scamporlino-photo.jpeg';
import YujinKimPhoto from './images/yujin-kim-photo.jpg';

// import AlexandruDejanuPhoto from './images/adrian-vladu-photo.jpg';
// import AndreiStefaniePhoto from './images/adrian-vladu-photo.jpg';
// import GeorgeCiobanPhoto from './images/adrian-vladu-photo.jpg';
// import MohammedAboullaitePhoto from './images/adrian-vladu-photo.jpg';
// import SorinDumitrescuPhoto from './images/adrian-vladu-photo.jpg';
// import ThomasLabarussiasPhoto from './images/adrian-vladu-photo.jpg';

// GenericSpeakerPhoto is default when no speaker picture is present
// TODO: merge with ITEMS array from components/pages/home/speakers
const ITEMS = [
  {
    title: 'Atlas 1',
    isHeader: true,
    secondTrack: {
      title: 'Atlas 2',
    },
    thirdTrack: {
      title: 'Merope',
    },
  },
  {
    time: '8:00',
    title: 'Registration/Badge Pick Up/ Welcome Coffee',
    duration: '75 min',
  },
  {
    time: '9:15',
    title: 'Intro from the Organizers',
    duration: '15 min',
  },
  {
    id: '01',
    time: '09:30',
    title: 'Keynote: A Decade of Kubernetes: Community-Driven Evolution and the Path Forward',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '2',
        name: 'Joseph Sandoval',
        company: 'Adobe',
        photo: JosephSandovalPhoto,
      },
    ],
    presentation:
      "We celebrate the milestone of ten years of Kubernetes; this keynote explores the journey from its inception to becoming the backbone of cloud-native technology. We'll look back at its history and the pivotal factor behind Kubernetes' success: its vibrant, innovative community." +
      "This talk delves into how the collective passion, expertise, and collaborative spirit of the Kubernetes community have not only propelled the platform's advancements but also shaped the very future of cloud computing. Looking ahead, we'll discuss the crucial role the community will play in steering Kubernetes through the next decade of challenges and opportunities, ensuring its continued relevance and leadership in the tech landscape.",
  },
  {
    id: '02',
    time: '10:05',
    title: 'Keynote: From Open Source Contributor to Serial Entrepreneur',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '1',
        name: 'Andrei Pitis',
        company: 'Genezio',
        photo: AndreiPitisPhoto,
      },
    ],
    presentation:
      'This talk highlights the importance of contributing to open-source projects and the impact of community engagement on both personal growth and the development of the tech industry. Andrei will share his journey from co-founding RoEduNet, which provided free internet to students, to becoming a serial entrepreneur.',
  },
  {
    time: '10:40',
    title: 'Break',
    duration: '20 min',
  },
  {
    id: '031',
    time: '11:00',
    title: 'Revolutionise your Kubernetes game with cdk8s',
    duration: '25 min',
    speakers: [
      {
        id: '6',
        name: 'Andra Somesan',
        company: 'Amazon Web Services',
        photo: AndraSomesanPhoto,
      },
    ],
    presentation:
      'Developer experience finally gets the attention it deserves. Many organisations have adopted different frameworks and technologies to help enhance it. Join this session to learn how to write secure, well-architected Kubernetes applications and learn how cdk8s leverages third-party integrations to combat misconfigurations, all that while improving your developers experience and productivity. A key benefit of cdk8s is its environment agnosticism. It generates portable YAML manifests that can be readily deployed to any Kubernetes cluster, whether self-managed on-premises or managed services on public clouds. Overall, cdk8s has the potential to revolutionise how cloud native development teams define, deploy, and manage modern distributed applications on Kubernetes. Its abstractions enable developers to focus on business logic rather than YAML Engineering.',
    secondTrack: {
      id: '032',
      time: '11:00',
      title: 'Trust no one: implementing zero trust security with Ambient Service Mesh',
      duration: '25 min',
      speakers: [
        {
          id: '7',
          name: 'Alessandro Vozza',
          company: 'Solo.io',
          photo: AlessandroVozzaPhoto,
        },
      ],
      presentation:
        'We live in a brave new world of cyber attacks, state-sponsored hacking and global instability fueled by (cyber and not) wars; perimeter security is just not up to the task of securing the modern digital infrastructure.' +
        '<br/>' +
        'Zero Trust Security Model assumes that an enterprise-owned environment is not different or trustworthy than any non enterprise-owned environment. In this paradigm, an enterprise must assume no implicit trust and continually analyze and evaluate the risks to its assets.' +
        '<br/>' +
        'We will show how we can simply and scalably implement new ways to perform the necessary steps towards achieving perfect zero-trust architecture, and what entails for operations and development.',
    },
    thirdTrack: {
      id: '033',
      time: '11:00',
      title: 'Building Internal Developer Platforms with Kubernetes Operators',
      duration: '25 min',
      speakers: [
        {
          id: '10',
          name: 'George Hantzaras',
          company: 'MongoDB',
          photo: GeorgeHantzarasPhoto,
        },
      ],
      presentation:
        'In this presentation, we will dive deep into the world of Kubernetes operators and how they can be leveraged to empower platform engineering teams and extend Kubernetes as the platform of platforms.' +
        '<br/>' +
        'We will start by introducing the concept of Kubernetes operators, their architecture, as well as how their development becomes easier leveraging the Operator Framework. We will then explore the advantages of using Kubernetes operators to manage complex applications and how they can streamline the deployment, scaling, and management of these applications. We will also provide real-world examples of operators that have been successfully deployed by platform engineering teams in the process of building an IDP.' +
        '<br/>' +
        'We will then demonstrate how an architecture of an IDP leveraging operators would look like and how this integrates with other CNCF tools, like Tekton, ArgoCD, Istio, and more as well as how infrastructure as code can be simplified with this approach.',
    },
  },
  {
    id: '041',
    time: '11:45',
    title: 'Introducing Timoni the Next-Gen Package Manager for Kubernetes',
    duration: '25 min',
    speakers: [
      {
        id: '5',
        name: 'Stefan Prodan',
        company: 'ControlPlane',
        photo: StefanProdanPhoto,
      },
    ],
    presentation:
      'In this session, Stefan will introduce a new open source tool called Timoni.' +
      '<br/>' +
      'Stefan will tell the story how he discovered CUE, a novel language, with a rich set of APIs which has the potential to revolutionise the way we think about configuration.' +
      '<br/><br/>' +
      'He will explain how Timoni leverages CUE to offer a better experience of creating, packaging and delivering apps to Kubernetes.' +
      '<br/><br/>' +
      ' Finally, Stefan will demonstrate how Timoni can be used together with CNCF Flux and how Timoni overcomes the limitations of Helm and Kustomize.',
    secondTrack: {
      id: '042',
      time: '11:45',
      title: 'Cloud native for governmental workloads: Challenges & Lesson Learned',
      duration: '25 min',
      speakers: [
        {
          id: '11',
          name: 'Mihai Mihalcea',
          company: 'STS',
          photo: MihalceaMihaiAlexandruPhoto,
        },
        {
          id: '12',
          name: 'Octavian Petre',
          company: 'STS',
          photo: OctavianPetrePhoto,
        },
      ],
      presentation:
        "Although the current market shift inclines towards public cloud adoption, how can you manage the situation if your business model requires your product to operate with citizens' data and state-level affairs?" +
        '<br/>' +
        'Well, the straightforward answer will be on-prem infrastructure, and what doesn’t work better with on-prem infrastructure than open-source technologies? We will see how this approach has been working for us so far.' +
        '<br/>' +
        'At STS we provide secure networks, IT&C services and support for the Romanian public government authorities and institutions.' +
        '<br/>' +
        'During this talk, we will outline the implementation of specific operations on our on-premises K8s infrastructure, along with the challenges that arise. Our focus will be primarily on the adoption process of the GitOps concept, the implementation of the Continuous Delivery ecosystem across multiple projects, and the networking challenges at the container level. We will also delve into the processes encountered within a self-managed infrastructure.',
    },
    thirdTrack: {
      id: '043',
      time: '11:45',
      title: 'Who the Helm Owns this YAML?!',
      duration: '25 min',
      speakers: [
        {
          id: '13',
          name: 'Matthias Bertschy',
          photo: MatthiasBertschyPhoto,
        },
      ],
      presentation:
        'Security scanners are great, by catching important security issues and misconfigurations before they reach production. But sometimes, they actually flag security issues in your production runtime––and then things start to get sketchy.' +
        '<br/><br/>' +
        "Who owns this YAML? Who needs to fix it? How do I propagate this fix to my hundreds of clusters in production?! Enter ArgoCD + Helm. In this talk we'll share how to track ownership of resources using ArgoCD's powerful GitOps capabilities, and propagating fixes to multiple locations through a single source using Helm. We'll demonstrate how these tools together can provide greater governance without losing control.",
    },
  },
  {
    time: '13:00',
    title: ' Lunch Break',
    duration: '1 hour',
  },
  {
    id: '061',
    time: '11:45',
    title: 'Introducing Timoni the Next-Gen Package Manager for Kubernetes',
    duration: '25 min',
    speakers: [
      {
        id: '5',
        name: 'Stefan Prodan',
        company: 'ControlPlane',
        photo: StefanProdanPhoto,
      },
    ],
    presentation:
      'In this session, Stefan will introduce a new open source tool called Timoni.' +
      '<br/>' +
      'Stefan will tell the story how he discovered CUE, a novel language, with a rich set of APIs which has the potential to revolutionise the way we think about configuration.' +
      '<br/><br/>' +
      'He will explain how Timoni leverages CUE to offer a better experience of creating, packaging and delivering apps to Kubernetes.' +
      '<br/><br/>' +
      ' Finally, Stefan will demonstrate how Timoni can be used together with CNCF Flux and how Timoni overcomes the limitations of Helm and Kustomize.',
    secondTrack: {
      id: '062',
      time: '11:45',
      title: 'Cloud native for governmental workloads: Challenges & Lesson Learned',
      duration: '25 min',
      speakers: [
        {
          id: '11',
          name: 'Mihai Mihalcea',
          company: 'STS',
          photo: MihalceaMihaiAlexandruPhoto,
        },
        {
          id: '12',
          name: 'Octavian Petre',
          company: 'STS',
          photo: OctavianPetrePhoto,
        },
      ],
      presentation:
        "Although the current market shift inclines towards public cloud adoption, how can you manage the situation if your business model requires your product to operate with citizens' data and state-level affairs?" +
        '<br/>' +
        'Well, the straightforward answer will be on-prem infrastructure, and what doesn’t work better with on-prem infrastructure than open-source technologies? We will see how this approach has been working for us so far.' +
        '<br/>' +
        'At STS we provide secure networks, IT&C services and support for the Romanian public government authorities and institutions.' +
        '<br/>' +
        'During this talk, we will outline the implementation of specific operations on our on-premises K8s infrastructure, along with the challenges that arise. Our focus will be primarily on the adoption process of the GitOps concept, the implementation of the Continuous Delivery ecosystem across multiple projects, and the networking challenges at the container level. We will also delve into the processes encountered within a self-managed infrastructure.',
    },
    thirdTrack: {
      id: '063',
      time: '11:45',
      title: 'Who the Helm Owns this YAML?!',
      duration: '25 min',
      speakers: [
        {
          id: '13',
          name: 'Matthias Bertschy',
          photo: MatthiasBertschyPhoto,
        },
      ],
      presentation:
        'Security scanners are great, by catching important security issues and misconfigurations before they reach production. But sometimes, they actually flag security issues in your production runtime––and then things start to get sketchy.' +
        '<br/><br/>' +
        "Who owns this YAML? Who needs to fix it? How do I propagate this fix to my hundreds of clusters in production?! Enter ArgoCD + Helm. In this talk we'll share how to track ownership of resources using ArgoCD's powerful GitOps capabilities, and propagating fixes to multiple locations through a single source using Helm. We'll demonstrate how these tools together can provide greater governance without losing control.",
    },
  },
  {
    time: '16:00',
    title: ' Break',
    duration: '20 min',
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
    secondTrack: {},
    thirdTrack: {
      id: '092',
      time: '16:20',
      title: 'DevOps Lessons from a Primary School Teacher',
      duration: '25 min',
      speakers: [
        {
          id: '25',
          name: 'Timothy Mamo',
          company: 'DigitalOcean',
          photo: TimothyMamoPhoto,
        },
      ],
      presentation:
        'The ability to run stateful applications in general, and RDMS in particular, on Kubernetes is relatively new, but brings new and exciting capabilities to developers, DBAs and devops teams alike. Think of self-service cluster creation and management, self-service backup and restore, automatic configuration of point-in-time recovery scenarios, etc. On top of that, by making Postgres clusters Kubernetes resources, you can now apply GitOps, CI/CD pipelines like Tekton and policy frameworks to your database.',
    },
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
      '<br/>' +
      'I want to share my journey with you on achieving the rank of captain Kubernetes (CKA).' +
      '<br/>' +
      'With this talk I hope to shed some light on the journey to come. I will tell you what I did to get ready in terms of trainings, playgrounds, and how to use the official documentation to your advantage, how to plan for a better study schedule, and how I made sure I was ready on the exam day and most importantly how I overcome my emotions.' +
      '<br/>' +
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
        id: '31',
        name: 'Radu Zamfir',
      },
      {
        id: '32',
        name: 'Andrei Cioc',
      },
      {
        id: '33',
        name: 'George Tudurean',
      },
    ],
    presentation:
      'We designed Forester, an app that spreads awareness and handles automatic detection and monitoring of deforestation globally, leveraging AI, open-source software and publicly available data such as satellite imagery.',
  },
  {
    id: '131',
    time: '16:40',
    title: 'Sponsored Keynote: May the Pods Be With You: A GKE Odyssey',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '4',
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
    time: '17:15',
    title: 'Keynote: Empowerment Through Adversity: Leading with Personal Dragons',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '3',
        name: 'Sarah Gruneisen',
        company: 'Novoda',
        photo: SarahGruneisenPhoto,
      },
    ],
    presentation:
      'Embrace the odyssey of confronting personal dragons—those challenges that test resilience, growth, and leadership. This talk is an anthem for harnessing personal adversities to fuel team empowerment and innovation. Combining rich narratives, data insights, and triumphs over adversity, it offers a holistic approach to leadership in tech. Learn to leverage your journey to inspire effective leadership, cultivating an environment where challenges are met with courage and transformed into collective strength and unity.',
  },
  {
    time: '17:15',
    title: 'Closing Remarks from the Organizers',
    duration: '15 min',
  },
  {
    time: '18:00',
    title: 'Mingle and Networking',
    duration: '1 hour',
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
                                  {speakers.length < 3 && (
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
                                  {speakers.length < 3 && (
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