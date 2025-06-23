import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

const Photos = () => (
  <section className="safe-paddings border-gray-100 relative mx-auto my-16 max-w-4xl rounded-3xl border bg-white py-16 shadow-md">
    <div className="container relative text-center">
      <h2
        className="mb-4 flex items-center justify-center gap-4 text-4xl font-bold leading-tight text-primary-1"
        id={LINKS.photos.id}
      >
        <svg className="h-10 w-10 text-primary-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
        Photo Albums
      </h2>
      <p className="mx-auto mb-8 max-w-[500px] text-lg leading-normal text-primary-1">
        Check out all the incredible moments captured during our two amazing days of Cloud Native
        Days Romania 2025.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-4">
        <Link
          className="group inline-flex items-center justify-center rounded-xl bg-primary-1 px-8 py-4 text-lg font-bold text-white shadow transition-all duration-200 hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-primary-1"
          to="https://photos.app.goo.gl/mAhd2poWz9VcfV2X6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Day 1</span>
          <svg
            className="ml-3 h-5 w-5 text-white transition-transform duration-200 group-hover:translate-x-1"
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
          className="group inline-flex items-center justify-center rounded-xl bg-primary-1 px-8 py-4 text-lg font-bold text-white shadow transition-all duration-200 hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-primary-1"
          to="https://photos.app.goo.gl/E6Ru1YQ8aTiFmGPn9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Day 2</span>
          <svg
            className="ml-3 h-5 w-5 text-white transition-transform duration-200 group-hover:translate-x-1"
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
