/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/ngo/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const NGO = () => (
  <Layout>
    <Hero />
  </Layout>
);

export default NGO;

export const Head = ({ location: { pathname } }) => <SEO {...SEO_DATA.ngo} pathname={pathname} />;
