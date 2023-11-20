import React from 'react';
import profiles from "../tableData.json";

const ChartThree: React.FC = () => {
  return (
    <div className="max-h-full col-span-12 rounded-lg bg-[#F2EAE5] px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-8">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Today task
          </h5>
        </div>
      </div>

      <div className="mb-4 dark:border-gray-700 text-[#060606]">
        <ul
          className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation">
            <a
              href="#tabs-home"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent sm:px-7 px-3 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-[#060606]"
              data-te-toggle="pill"
              data-te-target="#tabs-home"
              role="tab"
              aria-controls="tabs-home"
              aria-selected="false"
            >
              All
              <span
                style={{ backgroundColor: '#2B5CE61A' }}
                className="inline-flex items-center justify-center w-4 h-4 ms-2 text-[10px] text-[#2B5CE6] rounded-full"
              >
                10
              </span>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-profile"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent sm:sm:px-7 px-3 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-[#060606] dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-[#060606]"
              data-te-toggle="pill"
              data-te-nav-active
              data-te-target="#tabs-profile"
              role="tab"
              aria-controls="tabs-profile"
              aria-selected="true"
            >
              Important
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-messages"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent sm:px-7 px-3 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-[#060606]"
              data-te-toggle="pill"
              data-te-target="#tabs-messages"
              role="tab"
              aria-controls="tabs-messages"
              aria-selected="false"
            >
              Notes
              <span
                style={{ backgroundColor: '#2B5CE61A' }}
                className="inline-flex items-center justify-center w-4 h-4 ms-2 text-[10px] text-[#2B5CE6] rounded-full"
              >
                5
              </span>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-contact"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent sm:px-7 px-3 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
              data-te-toggle="pill"
              data-te-target="#tabs-contact"
              role="tab"
              aria-controls="tabs-contact"
              aria-selected="false"
            >
              Links
              <span
                style={{ backgroundColor: '#2B5CE61A' }}
                className="inline-flex items-center justify-center w-4 h-4 ms-2 text-[10px] text-[#2B5CE6] rounded-full"
              >
                10
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
          data-te-tab-active
        >
          <ul className="text-[#060606] space-y-1 text-gray-500 list-inside dark:text-gray-400">
            {profiles.tasks.map((t) => (
              <li className="px-3 py-1.5 flex items-center">
                {t.filled ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <circle cx="9" cy="9" r="9" fill="#e65f2b" />
                    <path
                      d="M6 9L8 11L12 7"
                      stroke="white"
                      stroke-linecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="#060606"
                      stroke-opacity="0.64"
                    />
                  </svg>
                )}
                <div className="flex-1 min-w-0">
                  <p className="ml-2 text-sm font-medium text-gray-900 truncate dark:text-white">
                    {t.text}
                  </p>
                </div>
                <span
                  style={{ backgroundColor: t.bgColor, color: t.color }}
                  className={`text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300`}
                >
                  {t.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
