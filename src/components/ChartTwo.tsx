import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart';


const ChartTwo: React.FC = () => {
  return (
    <div className="max-h-[98%] col-span-12 rounded-lg border border-stroke bg-[#F2EAE5] py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="relative text-[#000606] text-lg font-bold mt-2.5">
            Overall Progress
          </div>
        </div>
        <div className="flex w-full max-w-50 justify-end">
          <div className="inline-flex items-center rounded-md  p-1.5 dark:bg-meta-4">
            <button
              id="dropdownRadioButton"
              data-dropdown-toggle="dropdownRadio"
              className="inline-flex items-center text-gray-500 bg-white focus:outline-none hover:bg-gray-100  font-medium rounded-full text-xs px-3 py-2.5"
              type="button"
            >
              All
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 dark:border-gray-700 text-[#060606]">
        <div className="flex flex-row list-none flex-wrap border-b-0 pl-0 justify-between">
          <GaugeChart
            className="min-h-[80%] sm:h-46 mb-6"
            id="gauge-chart5"
            nrOfLevels={420}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={['#1A932E', '#E5AE21', '#e65f2b']}
            percent={0.72}
            arcPadding={0.02}
            textColor={'#060606'}
            needleColor={'#F2EAE5'}
            needleBaseColor="#F2EAE5"
          />
          <div className="container mx-auto">
            <div className="flex justify-between sm:mt-10 sm:min-h-[150px] min-h-[100px] items-end">
              <div className="w-96 justify-between items-start flex">
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="text-[#060606] text-xl">95</div>
                  <div className="text-neutral-500 text-sm">Total projects</div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="text-[#1A932E] text-xl">26</div>
                  <div className="text-neutral-500 text-sm">Completed</div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="text-[#DFA510] text-xl">35</div>
                  <div className="text-neutral-500 text-sm">Delayed</div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="text-[#e65f2b] text-xl">35</div>
                  <div className="text-neutral-500 text-sm">On going</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
