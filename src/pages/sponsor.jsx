import React, { useEffect } from 'react';

const prosp_link =
  'https://docs.google.com/document/d/1ECnExeIaYBsiQroiWbpp01pRA6Dyjt_Cn1CrJNfvg-w/edit?tab=t.0#heading=h.qmhbyqtdndtd';

const SponsorRedirect = () => {
  useEffect(() => {
    window.location.href = prosp_link;
  }, []);

  return <div>Redirecting...</div>;
};

export default SponsorRedirect;
