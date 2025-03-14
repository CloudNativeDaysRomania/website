import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';

import illustration from './images/section-illustration.jpg';

const TITLE = 'Workshops';

const DESCRIPTION =
  "Prepare for an immersive learning experience. With interactive workshops led by industry experts, you'll get hands-on practice with real-world cloud-native technologies. All sessions will be conducted in English.";

const Workshops = () => (
  <section className="safe-paddings relative bg-white pb-40 lg:pb-32 md:py-24 sm:py-16">
    <div className="container flex items-center justify-between lg:flex-col">
      <div className="text-primary-1 lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center">
        <h2
          className="min-w-[428px] max-w-[428px] text-6xl font-bold leading-tight lg:min-w-0 lg:max-w-[800px]"
          id={LINKS.workshops.id}
        >
          {TITLE}
        </h2>
        <p className="mt-5 max-w-[488px] text-lg leading-normal lg:max-w-[650px]">{DESCRIPTION}</p>
        <Button className="mt-7" to="/workshops" theme="primary" size="lg">
          View full workshop schedule
        </Button>
      </div>
      <img
        className="mr-16 xl:ml-10 lg:mx-auto lg:mt-10 lg:h-auto sm:max-h-[200px]"
        src={illustration}
        width={520}
        height={191}
        loading="lazy"
        alt=""
      />
    </div>
  </section>
);

export default Workshops;
