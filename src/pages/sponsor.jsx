import React, { useEffect } from 'react';

const prosp_link =
  'https://drive.google.com/file/d/1NsPCZBj7R38B3r-F8xlqJ37yc_MQEFgk/view?usp=sharing';

const SponsorRedirect = () => {
  useEffect(() => {
    window.location.href = prosp_link;
  }, []);

  return <div>Redirecting...</div>;
};

export default SponsorRedirect;
