import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

const Recordings = () => (
  <section className="safe-paddings border-gray-100 relative mx-auto my-16 max-w-4xl rounded-3xl border bg-white py-16 shadow-md">
    <div className="container relative text-center">
      <h2
        className="mb-4 flex items-center justify-center gap-4 text-4xl font-bold leading-tight text-primary-1"
        id={LINKS.recordings?.id}
      >
        <svg className="h-10 w-10 text-primary-1" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM15.5 12l-6 3.75V8.25l6 3.75z"
            clipRule="evenodd"
          />
        </svg>
        Catch Up on the Sessions
      </h2>
      <p className="mx-auto mb-8 max-w-[500px] text-lg leading-normal text-primary-1">
        Relive all the amazing talks and presentations from Cloud Native Days Romania 2025 through
        our comprehensive video recordings.
      </p>
      <Link
        className="group inline-flex items-center justify-center rounded-xl bg-primary-1 px-8 py-4 text-lg font-bold text-white shadow transition-all duration-200 hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-primary-1"
        to="https://www.youtube.com/playlist?list=PL6Ztcb9p-UpqG2s7j3mAz3fCuw7ehsrGC"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Watch Videos</span>
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
  </section>
);

export default Recordings;
