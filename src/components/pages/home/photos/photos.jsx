import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

const Photos = () => (
  <section className="safe-paddings to-blue-900 relative overflow-hidden bg-gradient-to-br from-primary-1 py-24 lg:py-20 md:py-16">
    {/* Background decoration */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white blur-xl" />
      <div className="bg-yellow-300 absolute bottom-20 right-20 h-24 w-24 rounded-full blur-lg" />
      <div className="bg-blue-300 absolute left-1/4 top-1/2 h-16 w-16 rounded-full blur-md" />
    </div>

    <div className="container relative text-center">
      <h2
        className="flex items-center justify-center gap-4 text-6xl font-bold leading-denser text-white lg:text-5xl md:text-4xl sm:text-3xl"
        id={LINKS.photos.id}
      >
        <svg
          className="h-16 w-16 text-white lg:h-14 lg:w-14 md:h-12 md:w-12 sm:h-10 sm:w-10"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
        Photo Albums Are Live!
      </h2>
      <p className="mx-auto mt-6 max-w-[600px] text-xl leading-normal text-white/90 lg:text-lg md:max-w-md md:text-base">
        Check out all the incredible moments captured during our two amazing days of Cloud Native
        Days Romania 2025.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-4">
        <Link
          className="hover:bg-gray-50 hover:shadow-3xl group relative inline-flex min-w-[220px] transform items-center justify-center rounded-2xl bg-white px-10 py-5 text-lg font-bold text-primary-1 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 sm:min-w-[200px]"
          to="https://photos.app.goo.gl/mAhd2poWz9VcfV2X6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="from-blue-500/20 to-blue-600/20 absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative">Day 1</span>
          <svg
            className="text-blue-600 relative ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        <Link
          className="hover:bg-gray-50 hover:shadow-3xl group relative inline-flex min-w-[220px] transform items-center justify-center rounded-2xl bg-white px-10 py-5 text-lg font-bold text-primary-1 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 sm:min-w-[200px]"
          to="https://photos.app.goo.gl/E6Ru1YQ8aTiFmGPn9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="from-green-500/20 to-green-600/20 absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative">Day 2</span>
          <svg
            className="text-green-600 relative ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

export default Photos;
