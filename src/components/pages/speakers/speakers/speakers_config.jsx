import AbdelSghiouarPhoto from './images/abdel-sghiouar.jpg';
import AndreiPetrescuPhoto from './images/andrei-petrescu-photo.jpg';
import ClaudiuSonelPhoto from './images/claudiu-sonel.jpg';
import MarkSagiKazarPhoto from './images/mark-sagi-kazar-photo.jpg';
import PatrickDeKruijfPhoto from './images/patrick-de-kruijf.jpg';
import RaduDobrinescuPhoto from './images/radu-dobrinescu.png';
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
];

export default SPEAKERS;
