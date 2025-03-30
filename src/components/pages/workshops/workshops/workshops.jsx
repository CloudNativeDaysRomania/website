/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Modal from 'components/shared/modal';

import AbdelSghiouarPhoto from './images/abdel-sghiouar.jpg';
import AndreiPetrescuPhoto from './images/andrei-petrescu.jpg';
import ClaudiuSonelPhoto from './images/claudiu-sonel.jpg';
import GenericSpeakerPhoto from './images/generic-speaker-photo.jpg';
import MarkSagiKazarPhoto from './images/mark-sagi-kazar.jpg';
import PatrickDeKruijfPhoto from './images/patrick-de-kruijf.jpg';
import RaduDobrinescuPhoto from './images/radu-dobrinescu.png';
import RazvanValceanuPhoto from './images/razvan-valceanu.jpg';
import StefanProdanPhoto from './images/stefan-prodan.jpeg';
import ViorelAnghelPhoto from './images/viorel-anghel.jpg';
import VladMocanuPhoto from './images/vlad-mocanu.jpg';

// GenericSpeakerPhoto is default when no speaker picture is present
// TODO: merge with ITEMS array from components/pages/home/speakers
const ITEMS = [
  {
    title: 'Workshop Room 1',
    isHeader: true,
    secondTrack: {
      title: 'Workshop Room 2',
    },
    thirdTrack: {
      title: 'Workshop Room 3',
    },
  },
  {
    time: '8:30',
    title: 'Registration / Badge Pick Up / Welcome Coffee',
    duration: '60 min',
  },
  {
    id: '011',
    time: '09:30',
    title: 'Hands-on with Ray on Kubernetes',
    duration: '90 min',
    speakers: [
      {
        id: '21',
        name: 'Abdel Sghiouar',
        company: 'Google Cloud',
        photo: AbdelSghiouarPhoto,
      },
    ],
    presentation:
      'The rapidly evolving landscape of Machine Learning and Large Language Models demands efficient scalable ways to run distributed workloads to train, fine-tune and serve models. Ray is an Open Source framework that simplifies distributed machine learning, and Kubernetes streamlines deployment.' +
      '<br/><br/>' +
      "In this hands-on session we will explore Ray as a framework and how it integrates with Kubernetes to run scalable distributed machine learning workloads. We will cover Ray scalability, patterns for running RayJobs and RayServe and will cover best practices for creating multi-tenant ML platforms using Ray on Kubernetes with fair-sharing of scarce hardware accelerators. We'll uncover how to combine Ray and Kubernetes for your ML projects.",
    secondTrack: {
      id: '012',
      time: '09:30',
      title: 'Istio Service Mesh Workshop',
      duration: '90 min',
      speakers: [
        {
          id: '22',
          name: 'Andrei Petrescu',
          company: 'CloudHero',
          photo: AndreiPetrescuPhoto,
        },
      ],
      presentation:
        'Dive into the world of service meshes with this hands-on workshop on Istio, the industry-leading solution for managing, securing, and observing microservices.' +
        '<br/><br/>' +
        "Participants will learn to deploy and configure Istio in a Kubernetes environment, explore core features like traffic management, service discovery, and resilience, and enable advanced observability with tools like Prometheus and Grafana. Through practical examples, you'll master concepts such as load balancing, circuit breaking, and fault injection, empowering you to build and operate reliable, high-performing distributed systems." +
        '<br/><br/>' +
        'Ideal for developers and DevOps engineers, this workshop provides real-world insights and a strong foundation in Istio essentials. No prior experience with service meshes is required.',
    },
    thirdTrack: {
      id: '013',
      time: '09:30',
      title: 'Escape from Certificate Hell: Managing Trust in Your Kubernetes Cluster',
      duration: '90 min',
      speakers: [
        {
          id: '37',
          name: 'Vlad Mocanu',
          company: 'Metaminds',
          photo: VladMocanuPhoto,
        },
        {
          id: '38',
          name: 'Razvan Valceanu',
          company: 'Metaminds',
          photo: RazvanValceanuPhoto,
        },
      ],
      presentation:
        'Managing trust and certificates in Kubernetes can quickly become overwhelming without the right tools and strategies. In this workshop, we’ll explore how to escape "certificate hell" by leveraging cert-manager (CNCF graduated project), trust-manager, and Kyverno (CNCF incubating project) to streamline and secure your cluster’s trust management.' +
        '<br/><br/>' +
        'We’ll start by using cert-manager to create and manage a custom Certificate Authority (CA). Then, we’ll introduce trust-manager to bundle this CA into a trust bundle, making it available across the cluster. Finally, we’ll integrate Kyverno to enforce policies that automatically mount these trust bundles into any newly created pods, ensuring seamless trust propagation with minimal manual intervention.' +
        '<br/><br/>' +
        'This session is perfect for DevOps practitioners and Kubernetes administrators looking to simplify certificate management, improve security, and maintain consistency in their clusters. By the end, you’ll have a clear understanding of how to build and manage a robust trust architecture for your Kubernetes environment.',
    },
  },
  {
    time: '11:00',
    title: 'Break',
    duration: '30 min',
  },
  {
    id: '021',
    time: '11:30',
    title: 'Kubernetes debug techniques',
    duration: '90 min',
    speakers: [
      {
        id: '5',
        name: 'Viorel Anghel',
        company: 'esolutions.ro',
        photo: ViorelAnghelPhoto,
      },
    ],
    presentation:
      'An interactive workshop on "Kubernetes Debug Techniques", designed to equip participants with essential tools and strategies for troubleshooting K8S clusters and workloads.' +
      '<br/><br/>' +
      'Hands-on examples from simple (like kubectl describe) to advanced debugging techniques (like ephemeral containers).' +
      '<br/><br/>' +
      'Topics: ' +
      '<br/><br/>' +
      ' - know your nodes and resources (kubectl get nodes, kubectl top, kube-capacity)' +
      '<br/>' +
      ' - base component statuses: etcd, ingress controller, core-dns' +
      '<br/>' +
      ' - kubectl describe, events and kubectl logs' +
      '<br/>' +
      ' - a short list of common error messages and what they mean' +
      '<br/>' +
      ' - kubectl exec and cp (kubectl cp and solving the lack of tar with kubectl exec!!!)' +
      '<br/>' +
      ' - creating your debug pod' +
      '<br/>' +
      ' - ephemeral containers and kubectl debug' +
      '<br/>' +
      ' - debugging complex objects - cert-manager example',
    secondTrack: {
      id: '022',
      time: '11:30',
      title: 'Accelerate Your Development and CI/CD Pipelines with Dagger',
      duration: '90 min',
      speakers: [
        {
          id: '6',
          name: 'Márk Sági-Kazár',
          company: 'CNCF Ambassador',
          photo: MarkSagiKazarPhoto,
        },
      ],
      presentation:
        'Tired of environment drift and inconsistent build results across machines and CI servers? Frustrated by onboarding delays when setting up development environments on new hardware or debugging why scripts fail in CI but work locally?' +
        '<br/><br/>' +
        'If any of the above resonates, this workshop (and Dagger) is for you.' +
        '<br/><br/>' +
        "Dagger is a portable, programmable CI/CD engine that runs your pipelines in containers. In this workshop, we'll explore how Dagger can:" +
        '<br/><br/>' +
        ' - Eliminate Environment Discrepancies: Use containerization to ensure your development and CI environments are identical.' +
        '<br/>' +
        ' - Simplify Onboarding: Create self-contained environments that new team members can spin up instantly.' +
        '<br/>' +
        ' - Streamline CI/CD Pipelines: Define complex pipelines with code-first configuration, reducing failures due to environment differences.' +
        '<br/>' +
        ' - Enhance Productivity: Focus on coding rather than environment setup and debugging.' +
        '<br/>' +
        " - Through a hands-on session, we'll port an existing development and CI setup to Dagger using a realistic example project. You'll gain practical experience in:" +
        '<br/>' +
        ' - Writing Dagger pipelines using Go' +
        '<br/>' +
        ' - Orchestrating builds, tests, and deployments in a consistent environment' +
        '<br/>' +
        ' - Integrating Dagger into existing workflows' +
        '<br/>' +
        "By the end of this workshop, you'll be equipped to leverage Dagger to standardize environments, accelerate your CI/CD pipelines, and improve team collaboration.",
    },
    thirdTrack: {
      id: '023',
      time: '11:30',
      title: 'Govern your Azure environment with Azure Policy',
      duration: '90 min',
      speakers: [
        {
          id: '7',
          name: 'Patrick de Kruijf',
          company: 'Xebia',
          photo: PatrickDeKruijfPhoto,
        },
      ],
      presentation:
        'When your Azure environment is relatively small, it is straightforward to keep track of what resources you have running in Azure and make sure that your solution is secure, compliant, and cost-effective. When your cloud workload gets bigger, and you have a lot of subscriptions and multiple management groups, that is much harder to do.' +
        '<br/><br/>' +
        'Luckily, Azure has a built-in feature called Azure Policy that can help you govern your Azure resources. But how do we implement policies, guarantee compliance and security, without decreasing developer agility?' +
        '<br/><br/>' +
        'This workshop will teach you how to deploy policies using Infrastructure as Code. You will get to use the built-in policies and will create and deploy your own. We will look at all the different effects that a policy can have and which should be used when.',
    },
  },
  {
    time: '13:00',
    title: 'Lunch',
    duration: '60 min',
  },
  {
    id: '031',
    time: '14:00',
    title: 'AWS GameDay: Llama Farmer - a Kubernetes Day of Fun',
    duration: '120 min',
    speakers: [
      {
        id: '8',
        name: 'Radu Dobrinescu',
        company: 'Amazon Web Services',
        photo: RaduDobrinescuPhoto,
      },
    ],
    presentation:
      'AWS GameDay is a gamified learning event that challenges participants to use AWS solutions to solve real-world technical problems in a team-based setting. GameDays are open-ended and non-prescriptive to give participants the freedom to explore and think outside the box.' +
      '<br/><br/>' +
      'Llama Farmer is a GameDay focused on Kubernetes. Its purpose is to let participants familiarize themselves with running Kubernetes on AWS, and solve challenges using both Kubernetes and EKS native tooling.' +
      '<br/><br/>' +
      'The target audience for this GameDay is the technical staff of customers and partners with an AWS knowledge L200-300 and Kubernetes knowledge L100-200, and some previous level of exposure to containers.' +
      '<br/><br/>' +
      'Additional notes: ' +
      '<br/><br/>' +
      'The usual 90 minutes for the workshop might not be enough to run through the entire GameDay experience. It is recommended to have allocated 180minutes as following:' +
      '<br/>' +
      '30min: Intro & presentation (setting GameDay context)' +
      '<br/>' +
      '15min: Accessing sandbox accounts and Game starts' +
      '<br/>' +
      '120min: Game runs' +
      '<br/>' +
      '15min: Wrap up & award ceremony',
    secondTrack: {
      id: '032',
      time: '14:00',
      title: 'Applied GitOps with Flux Operator',
      duration: '120 min',
      speakers: [
        {
          id: '9',
          name: 'Stefan Prodan',
          company: 'ControlPlane',
          photo: StefanProdanPhoto,
        },
      ],
      presentation:
        'In this workshop Stefan will introduce Flux Operator, a new component in the Flux CD ecosystem, that is designed to streamline the GitOps workflow for managing the delivery of application and infrastructure workloads on multi-tenant Kubernetes clusters.' +
        '<br/><br/>' +
        'The attendees will get hands-on experience with Flux Operator and learn how to bootstrap a Kubernetes cluster from scratch, and how to deploy cluster addons and applications in a GitOps fashion using a GitHub repository as the single source of truth.' +
        '<br/><br/>' +
        'The workshop will cover Flux key features such as multi-tenancy, Helm release management, continuous delivery observability, secrets encryption and dependency management.' +
        '<br/><br/>' +
        'Additional notes: ' +
        '<br/><br/>' +
        'The attendees will need to have a laptop with Docker and Git installed and a personal account on GitHub. If they have a Windows machine, they must have installed the Windows Subsystem for Linux.',
    },
    thirdTrack: {
      id: '033',
      time: '14:00',
      title: 'Amazon EKS Autoscaling',
      duration: '90 min',
      speakers: [
        {
          id: '10',
          name: 'Claudiu Sonel',
          company: 'Endava',
          photo: ClaudiuSonelPhoto,
        },
      ],
      presentation:
        'Efficient resource management is vital for businesses scaling their applications in Amazon EKS. This makes autoscaling a crucial aspect of managing workloads in Amazon Elastic Kubernetes Service (EKS), ensuring optimal resource utilization and performance while keeping costs under control.' +
        '<br/><br/>' +
        "In this hands-on workshop, you'll dive into the world of autoscaling in Amazon Elastic Kubernetes Service (EKS) using a variety of powerful tools and techniques. We'll start by exploring the fundamentals of autoscaling in Kubernetes and how it integrates with Amazon EKS. You'll learn how to use Cluster Autoscaler and Horizontal Pod Autoscaler to dynamically scale your clusters and workloads based on demand." +
        '<br/><br/>' +
        "We'll then introduce Karpenter, an open-source, high-performance Kubernetes cluster autoscaler that simplifies the scaling process with advanced features like node provisioning and efficient resource utilization. A key part of the session will include a detailed comparison between Cluster Autoscaler (CA) and Karpenter, focusing on their differences, use cases, and benefits, helping you choose the best autoscaling tool for your environment." +
        '<br/><br/>' +
        "Additionally, you’ll gain hands-on experience with practical tools such as Terraform for automating infrastructure setup and kubectl commands to manage Kubernetes resources efficiently. By the end of this workshop, you'll be equipped with the knowledge and skills to implement autoscaling strategies in your EKS environment, optimizing both performance and cost." +
        '<br/><br/>' +
        "What You'll Learn:" +
        '<br/>' +
        ' - Setting up and configuring Cluster Autoscaler and Horizontal Pod Autoscaler in Amazon EKS.' +
        '<br/>' +
        ' - Introduction to Karpenter and how it compares to Cluster Autoscaler.' +
        '<br/>' +
        ' - Automating infrastructure provisioning with Terraform.' +
        '<br/>' +
        ' - Managing autoscaling with kubectl commands for EKS.' +
        '<br/>' +
        ' - Best practices for autoscaling Kubernetes workloads in production environments.' +
        '<br/><br/>' +
        'Prerequisites:' +
        '<br/>' +
        ' - Basic familiarity with Kubernetes concepts and Amazon EKS.' +
        '<br/>' +
        ' - Experience with command-line tools like kubectl and Terraform is helpful but not required.' +
        '<br/><br/>' +
        "This workshop is ideal for DevOps engineers, Kubernetes enthusiasts, and anyone looking to optimize resource management in Amazon EKS through autoscaling. Whether you're looking to fine-tune your existing autoscaling setup or explore new ways to optimize resource usage in Amazon EKS, this workshop will equip you with the tools and knowledge to scale your infrastructure effectively.",
    },
  },
  {
    time: '16:00',
    title: 'Networking',
    duration: '60 min',
  },
];

const Workshops = ({ location }) => {
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
    <section className="safe-paddings pb-20 pt-9 lg:px-8 md:px-5 sm:pt-10 xs:px-0">
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
                    'sm:hidden': isHeader, // Hide the header row on mobile
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

export default Workshops;
