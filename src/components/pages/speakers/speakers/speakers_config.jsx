import AbdelSghiouarPhoto from './images/abdel-sghiouar.jpg';
import AdrianVladuPhoto from './images/adrian-vladu-photo.jpg';
import AlessandroPilottiPhoto from './images/alessandro-pilotti-photo.jpg';
import AlessandroVozzaPhoto from './images/alessandro-vozza-photo.jpg';
import AlexandrosCharosPhoto from './images/alexandros-charos-photo.jpg';
import AndraSomesanPhoto from './images/andra-somesan-photo.jpg';
import AndreiPetrescuPhoto from './images/andrei-petrescu-photo.jpg';
import CarlosMestrePhoto from './images/carlos-mestre-del-pino-photo.jpg';
import ClaudiuSonelPhoto from './images/claudiu-sonel.jpg';
import DianaTodeaPhoto from './images/diana-todea-photo.jpg';
import GenericSpeakerPhoto from './images/generic-speaker-photo.jpg';
import IulianTaiatuPhoto from './images/iulian-taiatu-photo.png';
import MariusIordachePhoto from './images/marius-iordache-photo.jpg';
import MarkSagiKazarPhoto from './images/mark-sagi-kazar-photo.jpg';
import PatrickDeKruijfPhoto from './images/patrick-de-kruijf.jpg';
import RaduDobrinescuPhoto from './images/radu-dobrinescu.png';
import RaduGheorghePhoto from './images/radu-gheorghe-photo.jpg';
import RazvanDeaconescuPhoto from './images/razvan-deaconescu-photo.jpg';
import RazvanValceanuPhoto from './images/razvan-valceanu.jpg';
import StefanProdanPhoto from './images/stefan-prodan-photo.jpeg';
import ViorelAnghelPhoto from './images/viorel-anghel.jpg';
import VladMocanuPhoto from './images/vlad-mocanu.jpg';

const SPEAKERS = [
  {
    id: '1',
    name: 'Abdel Sghiouar',
    position: 'Cloud Developer Advocate at Google Cloud',
    content:
      'Abdel Sghiouar is a senior Cloud Developer Advocate @Google Cloud. A co-host of the Kubernetes Podcast by Google and a CNCF Ambassador. His focused areas are GKE/Kubernetes, Service Mesh and Serverless.' +
      '<br/><br/>' +
      "Abdel started his career in datacenters and infrastructure in Morocco where he is originally. Before moving to Google's largest EU datacenter in Belgium. Then in Sweden he joined Google Cloud Professional Services and spent 5 years working with Google Cloud customers on architecting and designing large scale distributed systems before turning to advocacy and community work.",
    photo: AbdelSghiouarPhoto,
    twitterUrl: 'https://x.com/boredabdel',
    linkedInUrl: 'https://www.linkedin.com/in/sabdelfettah/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://boredabdel.medium.com',
    time: '09:30',
    title: 'Workshop: Hands-on with Ray on Kubernetes',
    duration: '90 min',
  },
  {
    id: '2',
    name: 'Andrei Petrescu',
    position: 'DevOps Department Lead @ CloudHero',
    content:
      'Andrei Petrescu leads the DevOps Department at CloudHero and has experience with running Kubernetes in production for 7+ years.' +
      '<br/><br/>' +
      'He has held workshops and presentations on various topics at Cloud Native Bucharest, Voxxed Days and CloudHero-organized events. He is a CKA and Professional Architect on AWS.',
    photo: AndreiPetrescuPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/andrei-petrescu-cloudhero/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '09:30',
    title: 'Workshop: Istio Service Mesh',
    duration: '90 min',
  },
  {
    id: '3',
    name: 'Vlad Mocanu',
    position: 'Senior Platform Engineer at Metaminds',
    content:
      'With 20 years of experience in the tech trenches, I’ve seen it all—from bare-metal servers that needed a hug to cloud-native architectures that scale like magic.' +
      '<br/><br/>' +
      'These days, I’m all about Kubernetes and cloud-native technologies, where my passion lies somewhere between “obsession” and “true love.” If it runs in a container, orchestrates with Kubernetes I’m probably already tinkering with it.',
    photo: VladMocanuPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/vtmocanu/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '09:30',
    title: 'Workshop: Escape from Certificate Hell: Managing Trust in Your Kubernetes Cluster',
    duration: '90 min',
  },
  {
    id: '4',
    name: 'Razvan Valceanu',
    position: 'Senior DevOps at Metaminds',
    content: 'Automation enthusiast and Open Source believer.',
    photo: RazvanValceanuPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://linkedin.com/in/oxigen/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '09:30',
    title: 'Workshop: Escape from Certificate Hell: Managing Trust in Your Kubernetes Cluster',
    duration: '90 min',
  },
  {
    id: '5',
    name: 'Viorel Anghel',
    position: 'Head of Cloud and Infrastructure @ eSolutions.ro',
    content:
      'DevOps tech lead, trainer, mentor, speaker. Background in Unix/Linux systems administration, high availability, scalability, change and config management. Kubernetes certified CKA & CKAD.',
    photo: ViorelAnghelPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://linkedin.com/in/viorelanghel/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:30',
    title: 'Workshop: Kubernetes debug techniques',
    duration: '90 min',
  },
  {
    id: '6',
    name: 'Márk Sági-Kazár',
    position: 'CNCF Ambassador',
    content:
      'Mark is a software engineer from Hungary passionate about open source both as a maintainer and as a contributor. Besides writing code, he loves every part of software engineering from software design to dev-ops and infrastructure.' +
      '<br/><br/>' +
      'When he is not coding, Mark attends a local folk dance group, organizes and attends meetups or just stays at home with a beer and a great book.',
    photo: MarkSagiKazarPhoto,
    twitterUrl: 'https://twitter.com/sagikazarmark/',
    linkedInUrl: 'https://linkedin.com/in/sagikazarmark/',
    githubUrl: '',
    communityUrl: 'https://sagikazarmark.hu',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:30',
    title: 'Workshop: Accelerate Your Development and CI/CD Pipelines with Dagger',
    duration: '90 min',
  },
  {
    id: '7',
    name: 'Patrick de Kruijf',
    position: 'Azure Architect / Global Landing Zone Solutions Lead @ Xebia',
    content:
      'Patrick is a passionate consultant with broad knowledge of infrastructure and security aspects of IT. As a Cloud Architect and Specialist, he helps customers by designing, implementing, and assessing cloud architectures and solutions in alignment with his customers’ business and IT objectives.' +
      '<br/><br/>' +
      'Throughout the past 16 years, Patrick has accumulated a broad experience in Infrastructure, Security, and Consulting, mainly at companies that relied heavily on Microsoft technology.' +
      '<br/><br/>' +
      'He applies state-of-the-art technologies and concepts, including the cloud and DevOps, to help his customers create business value. His approach is one of honesty and building relationships, which always makes him a trusted advisor for his stakeholders. Patrick has a clear and analytical mindset and is a consultant with excellent communication and presentation skills.',
    photo: PatrickDeKruijfPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://linkedin.com/in/patrickdk/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://azurefreakconfessions.com',
    time: '11:30',
    title: 'Workshop: Govern your Azure environment with Azure Policy',
    duration: '90 min',
  },
  {
    id: '8',
    name: 'Radu Dobrinescu',
    position: 'Amazon Web Services, Sr. Partner Solutions Architect',
    content:
      'Radu Dobrinescu is a Senior Partner Solutions Architect at Amazon Web Services (AWS). He has been working in technology for 17 years spanning different technologies and roles.' +
      '<br/><br/>' +
      'He is currently focused on building the AWS partner ecosystem across Central and Eastern Europe by helping AWS partners build their cloud center of excellence and deliver world-class cloud transformation journeys to their customers.' +
      '<br/><br/>' +
      'Radu helps partners design and deploy innovative products and services that leverage the benefits of the AWS platform with a special focus on containerized workloads and DevOps practices and tools, as well as Data Analytics.',
    photo: RaduDobrinescuPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://linkedin.com/in/radudobrinescu',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '14:00',
    title: 'Workshop: AWS GameDay: Llama Farmer - a Kubernetes Day of Fun',
    duration: '120 min',
  },

  {
    id: '9',
    name: 'Stefan Prodan',
    position: 'Flux project Core Maintainer at ControlPlane',
    content:
      'Stefan is a Principal Engineer at ControlPlane and an open source contributor to cloud-native projects.' +
      '<br/><br/>' +
      "He is the creator of Flagger the progressive delivery operator for Kubernetes, and a core maintainer of the CNCF's Flux project." +
      'Stefan has over 20 years of experience with software development and he enjoys programming in Go and writing about distributed systems.',
    photo: StefanProdanPhoto,
    twitterUrl: 'https://twitter.com/stefanprodan',
    linkedInUrl: 'https://linkedin.com/in/stefanprodan',
    githubUrl: 'https://github.com/stefanprodan',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://stefanprodan.com',
    time: '14:00',
    title: 'Workshop: Applied GitOps with Flux Operator',
    duration: '120 min',
  },
  {
    id: '10',
    name: 'Claudiu Sonel',
    position: 'Senior DevOps Consultant @ ENDAVA',
    content:
      'Claudiu is an experienced Senior Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Linux System Administration, AWS, GCP, Jenkins, Docker, Kubernetes and Infrastructure as Code. Claudiu has successfully designed and managed complex cloud-native infrastructures for diverse organizations.' +
      '<br/><br/>' +
      'As a passionate advocate for automation and scalability, Claudiu specializes in leveraging Kubernetes to create resilient, cost-effective , and high-performing systems. Claudiu empowers teams to unlock the full potential of AWS and Kubernetes for modern workloads.',
    photo: ClaudiuSonelPhoto,
    linkedInUrl: 'https://linkedin.com/in/claudiusonel/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://sessionize.com/claudiusonel',
    time: '14:00',
    title: 'Workshop: Amazon EKS Autoscaling',
    duration: '90 min',
  },
  {
    id: '11',
    name: 'Alessandro Pilotti',
    position: 'CEO @ Cloudbase Solutions',
    content:
      'Alessandro Pilotti is the CEO of Cloudbase Solutions, a company focused on cloud computing interoperability with a strong open source contribution background, especially around OpenStack, Kubernetes and Ceph. Alessandro has been a speaker for many years at key international industry conferences, including the OpenStack / OpenInfra Summits, Cephalocon, //Build, Oracle OpenWorld, KubeCon and many other cloud related events.' +
      '<br/><br/>' +
      'In the spare time, he enjoys flying with his paraglider into old fashioned clouds.',
    photo: AlessandroPilottiPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/alessandropilotti',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://cloudbase.it/blog',
    time: '09:30',
    title: 'The first CNCF / Linux Foundation Operating System - Flatcar Container Linux',
    duration: '60 min',
  },
  {
    id: '12',
    name: 'Adrian Vladu',
    position: 'Senior Cloud Engineer @ Cloudbase Solutions',
    content:
      `Adrian Vladu has an experience of more than 6 years in the cloud computing area, with a focus on Linux and Windows inter-operability.
<br/><br/>
He leverages his knowledge and experience as a core reviewer of openstack/ cloudbase - init, maintainer of lis / lis - pipeline, cloudbase / cloudbase - init - ci and cloudbase / windows - openstack - imaging - tools open source projects.
<br/><br/>
Besides the coding time, his interests in the cloud domain are performance frameworks like OpenStack with OVS / DPDK and fd.io, which he enjoys to deploy and optimize.` +
      '<br/><br/>' +
      'When out of office, he tries to get as many people as possible on the technology train, by giving training and presentations to the community. When offline, he is an avid reader and a stoic at heart.',
    photo: AdrianVladuPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/adrianvladu/',
    githubUrl: 'https://github.com/ader1990',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://sessionize.com/adrian-vladu',
    time: '09:30',
    title: 'The first CNCF / Linux Foundation Operating System - Flatcar Container Linux',
    duration: '60 min',
  },
  {
    id: '13',
    name: 'Alessandro Vozza',
    position: 'Technical Specialist Application Innovation & AI @ Microsoft',
    content: `Community leader and CNCF ambassador, Alessandro has spent the last few years building cloud native infrastructures for Microsoft customers, animating the Dutch community, and training others to pass the CKx exams. He has passion for all things cloud native, he's been around open source for 25 years and recently moved to a new Developer Relations role. Twitter handle: @bongo`,
    photo: AlessandroVozzaPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/alessandrovozza',
    githubUrl: 'https://github.com/ader1990',
    communityUrl: '',
    instagramUrl: 'https://www.instagram.com/cloudnativeams/',
    websiteUrl: 'https://dev.to/ams0',
    time: '11',
    title: 'The Way of Cloud Native AI',
    duration: '30 min',
  },
  {
    id: '14',
    name: 'Marius Iordache',
    position: 'Telco Cloud & Service Platforms Manager @ Orange Romania',
    content: `Experienced Telecom industry with more that 16 years in network domain, network enthusiast for designing telco networks.
<br/><br/>
Involved in networks evolution activities and principles, author or co-author of more than 40 papers, studies and white papers, related to 5G and 6G future networks for operators and industry transformation to cloud native implementations.`,
    photo: MariusIordachePhoto,
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '11',
    title: 'Cloud Native Telco Transformation: From Legacy to Agility',
    duration: '30 min',
  },
  {
    id: '15',
    name: 'Iulian Taiatu',
    position: 'Software Development Engineer @ Adobe',
    content: `Iulian-Marius Tăiatu is currently a Master of Science student specializing in Artificial Intelligence at the Faculty of Automatic Control and Computer Science, Bucharest. He works at Adobe as a member of the EthosI&R team, focusing on cloud application deployment infrastructure. Iulian is particularly experienced in managing and optimizing a wide fleet of Kubernetes clusters and developing cloud-related solutions using state-of-the-art upstream technologies.
<br/><br/>
Iulian’s dedication to advancing his field is evident through his continuous involvement in cutting-edge projects and participation in industry events, where his contributions to cloud technologies and Kubernetes management have been recognized.`,
    photo: IulianTaiatuPhoto,
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://sessionize.com/iulian-taiatu',
    time: '11:45',
    title: 'Nested Worlds: Unleash the Power of vClusters for Accelerated CI Workflows and Testing',
    duration: '30 min',
  },
  {
    id: '16',
    name: 'Radu Gheorghe',
    position: 'Software Engineer @ Vespa.ai',
    content: `Radu is in the search space for 13 years, mainly on Elasticsearch, Solr, OpenSearch and more recently Vespa.ai. Helps users with both the relevance and the maintenance side of retrieval, and it's the latter that naturally leads to Kubernetes. Enjoys education in all its forms (training, blog posts, books, conferences...) and got the chance to be involved in them.`,
    photo: RaduGheorghePhoto,
    linkedInUrl: 'https://www.linkedin.com/in/ragheorghe/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '11:45',
    title: 'Vespa: A Fast Search/Vector DB with a Microservices Architecture',
    duration: '30 min',
  },
  {
    id: '17',
    name: 'Diana Todea',
    position: 'Senior Site Reliability Engineer @ EQS Group',
    content: `Diana is a Senior Site Reliability Engineer at EQS Group specialized in Observability. She is passionate about serverless, SecOps and machine learning. She is an OpenTelemetry contributor and supports women in tech.`,
    photo: DianaTodeaPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/diana-todea-b2a79968',
    githubUrl: 'https://github.com/didiViking/Conferences_Talks',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: 'https://sessionize.com/diana-todea',
    time: '11:45',
    title: 'From zero to developer: my one year serendipity journey with OpenTelemetry',
    duration: '30 min',
  },
  {
    id: '18',
    name: 'Carlos Mestre del Pino',
    position: 'Cloud Solution Architect @ Microsoft',
    content: `Carlos Mestre del Pino is a cloud solution architect at Microsoft in Amsterdam. With over three years of Kubernetes experience, he has managed large Kubernetes environments and is now supporting Azure's customers on their Kubernetes and platform building journey.
<br/><br/>
Member of the organizing team for KCD Netherlands, he is a community oriented person which loves sharing his knowledge and passion for technology, as he has previously done such as Cloud Native Rejekts in Paris and KCD Denmark 2024.`,
    photo: CarlosMestrePhoto,
    linkedInUrl: 'https://linkedin.com/in/mestredelpino',
    githubUrl: 'https://github.com/didiViking/Conferences_Talks',
    communityUrl: 'https://www.mestredelpino.com',
    instagramUrl: 'https://twitter.com/mestredelpino',
    websiteUrl: 'https://sessionize.com/mestredelpino',
    time: '12:30',
    title: 'The Infinite Hotel: Scaling Multi-Tenant Platforms through a Unified API',
    duration: '30 min',
  },
  {
    id: '19',
    name: 'Alexandros Charos',
    position: 'Engineering Manager @ OPAP',
    content: `Passionate about creating functional and efficient software, Alex was introduced to the world of software engineering in his teenage years and has never stopped learning since.
Currently, as a Software Development Manager at OPAP, Greece’s leading lottery and Sportsbook operator, Alex has over 15 years of experience in software engineering, specializing in distributed systems. He has led numerous successful projects worldwide, demonstrating expertise in designing and implementing scalable solutions.
<br/><br/>
In his free time, he enjoys playing football, reading literature, and running.`,
    photo: AlexandrosCharosPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/alex-charos/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '12:30',
    title: 'CAPtivating architecture: Navigating Distributed Systems and Microservices',
    duration: '30 min',
  },
  {
    id: '20',
    name: 'Razvan Deaconescu',
    position: 'Community Manager @ Unikraft, Associate Professor @ POLITEHNICA Bucharest',
    content: `Razvan is an Associate Professor at University POLITEHNICA of Bucharest, Romania, the Computer Science and Engineering Department and Community Manager for the Unikraft OSS community (and Unikraft GmbH). He's primarily interested in operating systems and security, with a penchant for teaching and mentoring. If a class uses "operating systems" as part of its name, it's likely e is part of the team.`,
    photo: RazvanDeaconescuPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/razvandeaconescu/',
    githubUrl: '',
    communityUrl: 'https://unikraft.org/',
    instagramUrl: '',
    websiteUrl: '',
    time: '12:30',
    title: 'Headless Browsers in the Cloud',
    duration: '30 min',
  },
  {
    id: '21',
    name: 'Andra Somesan',
    position: 'Solutions Architect @ AWS',
    content: ``,
    photo: AndraSomesanPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/andra-somesan-0003ab69/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '09:45',
    title: 'Unlocking Innovation: Start Thinking Like a Scientist',
    duration: '30 min',
  },
  {
    id: '22',
    name: 'George Haber',
    position: 'Entrepreneur',
    content: ``,
    photo: GenericSpeakerPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/georgehaber/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    time: '10:15',
    title: ' AI or Not AI, That Is the Question',
    duration: '30 min',
  },
];

export default SPEAKERS;
