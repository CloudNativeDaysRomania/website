import React from 'react';

import illustration from './images/romania.svg';

const TITLE = 'Cloud Native Days Romania';

const DESCRIPTION =
  'The Kubernetes & Cloud Native community will gather at the Radisson Blu in Bucharest, Romania. Join us for one day technical event loaded with exciting talks and networking opportunities. Cloud Native Days Romania is aimed at developers, platform people, and other IT professionals with an interest in cloud native technologies.';

const Hero = () => (
  /*
    const cloudsBack = {
      animationData: cloudsAnimation, // Your back animation JSON
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  
    const { View: View, play: playBack } = useLottie(cloudsBack);
  
    useEffect(() => {
      playBack();
    }, [playBack]);
  
    */

  <section className="safe-paddings overflow-hidden bg-opacity-10 pt-28 md:pt-24">
    <div className="container flex flex-row pb-16 md:flex-col md:items-center md:text-center">
      <div className="flex w-1/2 flex-col md:w-full md:items-center md:text-center">
        <span className="w-fit rounded-3xl bg-yellow px-4 py-2 text-sm font-bold leading-none text-black">
          5-6 MAY 2025
        </span>
        <h1 className="mt-3 min-w-[38rem] max-w-[570px] text-8xl font-bold leading-denser text-primary-1 lg:max-w-[500px] md:min-w-min sm:text-7xl">
          {TITLE}
        </h1>
        <p className="mt-5 max-w-[500px] text-lg leading-normal text-primary-1 lg:max-w-[500px]">
          {DESCRIPTION}
        </p>

        {/* <div className="relative flex flex-wrap gap-4 pb-16 md:justify-center">
          <Button
            className="mt-7 text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
            theme="blue"
            size="lg"
            {...LINKS.tickets}
          >
            Get your tickets now
          </Button>
        </div> */}

        {/* <div className="bg-gray-50 mt-5 max-w-[500px] rounded-lg px-0 py-4 pb-16 text-lg leading-normal text-primary-1 lg:max-w-[500px]">
          <h3 className="mb-2 text-xl font-bold text-blue-1">Cloud Native Scholars</h3>
          <p>{SCHOLARS_DESCRIPTION}</p>
          <Button
            className="mt-7 text-white shadow-[0_15px_40px_#999999] hover:shadow-[0px_15px_30px_#adadad]"
            theme="green"
            size="lg"
            {...LINKS.scholarsProgramme}
          >
            Apply for Cloud Native Scholars
          </Button>
        </div> */}
      </div>
      <div className="mt-40 flex w-1/2 items-start justify-center md:mt-0 md:w-full md:items-center md:text-center">
        <img
          className="h-auto w-full max-w-[600px] object-contain"
          src={illustration}
          loading="eager"
          alt="Romania illustration"
        />
      </div>
    </div>
  </section>
);
export default Hero;
