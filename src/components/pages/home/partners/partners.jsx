import React from 'react';

import Link from 'components/shared/link';

import AwsCommunityDayRomania from './images/AwsCommunityDayRomania_reworked.png';
import AwsUserGroupTimisoara from './images/AwsUserGroupTimisoara.png';
import AsociatiaBEST from './images/BEST_Bucharest.png';
import BucharestDevOpsHackersMeetup from './images/BucharestDevOpsHackersMeetup.png';
import CloudNativeTimisoara from './images/CloudNativeTimisoara.png';
import CloudNativeCluj from './images/CNCFCluj.png';
import KubeCareers from './images/kube-careers.png';
import KubeEvents from './images/kubevents.png';
import ROSEdu from './images/ROSEdu.png';

const TITLE = 'Community & Media Partners';

const ITEMS = [
  {
    icon: AwsUserGroupTimisoara,
    url: 'https://www.linkedin.com/company/aws-user-group-timisoara/',
  },
  {
    icon: AwsCommunityDayRomania,
    url: 'https://www.linkedin.com/company/aws-community-day-romania/',
  },
  { icon: BucharestDevOpsHackersMeetup, url: 'https://www.meetup.com/devops_hackers/' },
  // { icon: CloudNativeBucharest, url: '' }, // No logo
  { icon: CloudNativeCluj, url: 'https://www.linkedin.com/company/cloud-native-cluj-napoca/' },
  { icon: CloudNativeTimisoara, url: 'https://www.linkedin.com/company/cloud-native-timisoara/' },
  { icon: KubeCareers, url: 'https://kube.careers/' }, // Learnk8s
  { icon: KubeEvents, url: 'https://kube.events/' }, // Learnk8s
  {
    icon: ROSEdu,
    url: 'https://www.rosedu.org/?fbclid=IwY2xjawH8dDpleHRuA2FlbQIxMAABHXiQW_eipMYbkZFFQAzDZQq96Q0dlKttutoMxlaV7jjpYPv9zQg1oEbCmg_aem_805t1vkqzYnrQOHRKH03rQ',
  },
  // { icon: StagiiPeBune, url: '' }, // No logo
  // { icon: AwsTransylvaniaCloud, url: '' }, // No logo
  { icon: AsociatiaBEST, url: 'https://bestbucharest.ro/' },
];

const Partners = () => (
  <section className="safe-paddings relative bg-white pb-48 pt-24 lg:pb-40 md:pb-32 sm:pb-24 sm:pt-16">
    <div className="container text-center">
      <h2 className="text-6xl font-bold leading-denser text-primary-1">{TITLE}</h2>

      <ul className="mx-auto mt-20 flex max-w-[1000px] flex-wrap justify-center gap-x-8 gap-y-14">
        {ITEMS.map(({ icon, url }, index) => (
          <li className="flex min-h-[80px] min-w-[280px] items-center justify-center" key={index}>
            <Link className="flex h-full w-full items-center justify-center" to={url}>
              <img
                className="max-w-[210px]"
                src={icon}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Partners;
