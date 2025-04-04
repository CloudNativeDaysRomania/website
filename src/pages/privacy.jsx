/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/privacy/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const Team = () => (
  <Layout>
    <Hero />
  </Layout>
);

export default Team;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.conduct} pathname={pathname} />
);
