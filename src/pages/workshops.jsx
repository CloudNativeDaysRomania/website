/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/workshops/hero';
import Workshops from 'components/pages/workshops/workshops/workshops';
import Button from 'components/shared/button';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Sponsors from 'components/shared/sponsors';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';

const WorkshopsPage = ({ location }) => (
  <Layout headerClassnames="!bg-white">
    <Hero />
    <Workshops location={location} />
    <div className="container flex flex-col items-center justify-center pb-36">
      <div className="flex flex-col items-center justify-center gap-12">
        <Button
          className="text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
          theme="blue"
          size="lg"
          {...LINKS.tickets}
        >
          Get your tickets now
        </Button>
        <Button
          className="text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
          theme="green"
          size="lg"
          {...LINKS.scholarsProgramme}
        >
          Apply for Cloud Native Scholars
        </Button>
      </div>
    </div>
    <Sponsors />
  </Layout>
);

export default WorkshopsPage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.workshops} pathname={pathname} />
);
