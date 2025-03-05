/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/workshops/hero';
import Workshops from 'components/pages/workshops/workshops/workshops';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Sponsors from 'components/shared/sponsors';
import SEO_DATA from 'constants/seo-data';

const WorkshopsPage = ({ location }) => (
  <Layout headerClassnames="!bg-white">
    <Hero />
    <Workshops location={location} />
    <Sponsors />
  </Layout>
);

export default WorkshopsPage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.workshops} pathname={pathname} />
);
