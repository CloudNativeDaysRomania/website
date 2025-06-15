import React from 'react';

const TITLE = 'Organizational Affiliation';

const Hero = () => (
  <section className="safe-paddings pb-10 pt-24 lg:pt-[4.5rem] md:pb-4 md:pt-16 sm:py-8">
    <div className="container mt-4 text-left text-primary-1 sm:px-7">
      <h1
        className="text-6xl font-bold leading-denser tracking-[-0.01em] md:text-4xl"
        dangerouslySetInnerHTML={{ __html: TITLE }}
      />
      <br />
      <p>
        We confirm that the domain <strong>cloudnativeromania.org</strong> is exclusively owned and
        operated by our nonprofit organization, <strong>ASOCIAȚIA CLOUD NATIVE</strong>.
      </p>
      <br />
      <div className="space-y-4">
        <p>
          <strong>Submitted Domain:</strong> cloudnativeromania.org
        </p>
        <p>
          <strong>Nonprofit Organization Name:</strong> ASOCIAȚIA CLOUD NATIVE
        </p>
        <p>
          <strong>Google for Nonprofits Account Administrator Email:</strong> elif.samedin@gmail.com
        </p>
      </div>
      <br />
      <p>
        If further information is required, please reach out to us at the contact email provided.
      </p>
    </div>
  </section>
);

export default Hero;
