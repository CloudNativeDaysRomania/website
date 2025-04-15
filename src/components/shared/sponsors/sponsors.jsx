import clsx from 'clsx';
import React from 'react';

// import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import AdoreMe from 'icons/sponsors-2025/adoreme-logo.png';
import Alchemy from 'icons/sponsors-2025/alchemy-logo.png';
import AWSIcon from 'icons/sponsors-2025/aws-logo.png';
import CloudHero from 'icons/sponsors-2025/cloudhero-logo.png';
import CNCF from 'icons/sponsors-2025/cncf-logo.png';
import ControlPlane from 'icons/sponsors-2025/controlplane-logo.png';
import CTSTradeIt from 'icons/sponsors-2025/ctstradeit-logo.png';
import DatanetSystems from 'icons/sponsors-2025/datanetsystems-logo.png';
import GoogleCloud from 'icons/sponsors-2025/googlecloud-logo.png';
import HaufeGroup from 'icons/sponsors-2025/haufegroup-logo.png';
import LifeInCloud from 'icons/sponsors-2025/lifeincloud-logo.png';
import Metaminds from 'icons/sponsors-2025/metaminds-logo.png';
import Orange from 'icons/sponsors-2025/orange-logo.png';
import Oveit from 'icons/sponsors-2025/oveit-logo.png';
import PureStorage from 'icons/sponsors-2025/purestorage-portworx-logo.png';
import Stripe from 'icons/sponsors-2025/stripe-logo.png';
import Systematic from 'icons/sponsors-2025/systematic-logo.png';
import Zitec from 'icons/sponsors-2025/zitec-logo.png';

const TITLE = 'Sponsors';

// export default Sponsors;

const ITEMS = [
  {
    title: 'Diamond',
    logos: [{ icon: Stripe, url: 'https://www.linkedin.com/company/stripe/' }],
    cardClassname: 'min-w-[488px] max-w-[330px] min-h-[152px] sm:min-w-[350px] sm:min-h-[130px]',
    iconClassname: 'max-w-[390px] sm:max-w-[350px]',
  },
  {
    title: 'Platinum',
    logos: [
      { icon: PureStorage, url: 'https://www.linkedin.com/company/portworx/' },
      { icon: Orange, url: 'https://www.linkedin.com/company/orange/' },
    ],
    cardClassname: 'min-w-[488px] max-w-[330px] min-h-[152px] sm:min-w-[350px] sm:min-h-[130px]',
    iconClassname: 'max-w-[390px] sm:max-w-[350px]',
  },
  {
    title: 'Gold',
    logos: [
      {
        icon: AdoreMe,
        url: 'https://www.linkedin.com/company/27228337/admin/page-posts/published/',
      },
      { icon: Metaminds, url: 'https://www.linkedin.com/company/metaminds-romania/' },
      { icon: DatanetSystems, url: 'https://www.linkedin.com/company/datanet-systems/' },
      { icon: GoogleCloud, url: 'https://www.linkedin.com/showcase/google-cloud/' },
    ],
    cardClassname: 'min-w-[488px] max-w-[330px] min-h-[152px] sm:min-w-[350px] sm:min-h-[130px]',
    iconClassname: 'max-w-[390px] sm:max-w-[350px]',
  },
  {
    title: 'Silver',
    logos: [
      { icon: Systematic, url: 'https://www.linkedin.com/company/systematic/' },
      { icon: Zitec, url: 'https://www.linkedin.com/company/lifeatzitec/' },
      { icon: LifeInCloud, url: 'https://www.linkedin.com/company/lifeincloud-global/' },
      { icon: Alchemy, url: 'https://www.linkedin.com/company/alchemyinc/' },
    ],
    cardClassname: 'min-w-[384px] min-h-[122px] sm:min-w-[320px] sm:min-h-[115px]',
    iconClassname: 'max-w-[330px] sm:min-w-[290px]',
  },
  {
    title: 'Bronze',
    logos: [
      { icon: CTSTradeIt, url: 'https://cz.linkedin.com/company/cts-trade-it' },
      { icon: Oveit, url: 'https://www.linkedin.com/company/oveit/' },
      {
        icon: ControlPlane,
        url: 'https://www.linkedin.com/company/controlplane/?viewAsMember=true',
      },
      {
        icon: AWSIcon,
        url: 'https://www.linkedin.com/company/amazon-web-services/',
      },
      {
        icon: HaufeGroup,
        url: 'https://www.linkedin.com/company/haufe-group/',
      },
    ],
    cardClassname: 'min-w-[280px] min-h-[104px] sm:min-w-[250px] sm:min-h-[94px]',
    iconClassname: 'max-w-[330px] sm:min-w-[290px]',
  },
  {
    title: 'Coffee Sponsor',
    logos: [{ icon: CloudHero, url: 'https://www.linkedin.com/company/cloud-hero' }],
    cardClassname: 'min-w-[280px] min-h-[104px] sm:min-w-[250px] sm:min-h-[94px]',
    iconClassname: 'max-w-[330px] sm:min-w-[290px]',
  },
  {
    title: 'After Party',
    logos: [
      { icon: CNCF, url: 'https://www.linkedin.com/company/cloud-native-computing-foundation' },
    ],
    cardClassname: 'min-w-[280px] min-h-[104px] sm:min-w-[250px] sm:min-h-[94px]',
    iconClassname: 'max-w-[330px] sm:min-w-[290px]',
  },
];

const Sponsors = () => (
  <section className="safe-paddings relative bg-white sm:pb-16">
    <div className="container-md text-center text-primary-1">
      <h2 className="text-6xl font-bold leading-denser text-primary-1" id={LINKS.sponsors.id}>
        {TITLE}
      </h2>
      <div style={{ marginTop: '4vh', marginBottom: '10vh' }} />
      <ul className="mt-16 flex flex-col ">
        {ITEMS.map(({ title, logos, cardClassname, iconClassname }, index) => (
          <li className="" key={index}>
            <p
              className="text-center text-4xl font-bold leading-normal text-primary-1"
              style={{
                background:
                  'linear-gradient(to right, #FFFFFF 0%, #7b79791f 30%, #7b79791f 70%, #FFFFFF 100%)',
                borderRadius: '10px',
              }}
            >
              {title}
            </p>

            <ul className="mb-[70px] mt-10 flex flex-wrap justify-center gap-x-8 xl:gap-y-6">
              {logos.map(({ icon, url }, index) => (
                <li className={clsx('flex items-center justify-center', cardClassname)} key={index}>
                  <Link
                    className="flex h-full w-fit items-center justify-center"
                    to={url}
                    target="_blank"
                  >
                    <img
                      className={clsx('h-auto w-3/4', iconClassname)}
                      src={icon}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="sponsor-logo"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Sponsors;
