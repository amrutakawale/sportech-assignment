import React, { useState } from 'react';
import projects from '../tableData.json'
interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  return (
    <div className="max-h-[95%] col-span-12 rounded-lg bg-[#F2EAE5] px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="relative text-[#000606] text-lg font-bold mt-2.5">
            Project Summary
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
              Projects
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
            <button
              id="dropdownRadioButton"
              data-dropdown-toggle="dropdownRadio"
              className="ml-2 w-34 inline-flex items-center text-gray-500 bg-white focus:outline-none hover:bg-gray-100  font-medium rounded-full text-xs px-3 py-2.5"
              type="button"
            >
              Project manager
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
            <button
              id="dropdownRadioButton"
              data-dropdown-toggle="dropdownRadio"
              className="ml-2 inline-flex items-center text-gray-500 bg-white focus:outline-none hover:bg-gray-100  font-medium rounded-full text-xs px-3 py-2.5"
              type="button"
            >
              Status
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

      <div>
        <div id="chartOne" className="-ml-5">
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-[#060606] mt-6">
              <thead className="dark:bg-gray-700 border-b border-[#0000001A]">
                <tr>
                  <th scope="col" className="px-6 py-2">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Project manager
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Due date
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Progress
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.projects &&
                  projects.projects.length &&
                  projects.projects.map((pr) => (
                    <tr className="">
                      <td
                        scope="row"
                        className="px-6 py-2 whitespace-nowrap dark:text-white"
                      >
                        {pr.name}
                      </td>
                      <td className="px-6 py-2">{pr.projectManager}</td>
                      <td className="px-6 py-2">{pr.dueDate}</td>

                      <td className="px-6 py-2">
                        <span
                          style={{
                            backgroundColor: pr.bgColor,
                            color: pr.color,
                          }}
                          className={`text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300`}
                        >
                          {pr.status}
                        </span>
                      </td>
                      <td className="px-6 py-2">
                        <div className="relative h-10 w-10">
                          <svg
                            className="h-full w-full"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              // style={{ stroke: `${pr.color}` }}
                              stroke="#00000014"
                              cx="18"
                              cy="18"
                              r="16"
                              fill="none"
                              className="text-gray-200 dark:text-gray-700"
                              stroke-width="3"
                            ></circle>
                            <g className="origin-center -rotate-90 transform">
                              <circle
                                style={{
                                  stroke: pr.color,
                                }}
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                className="text-blue-600 dark:text-blue-500"
                                stroke-width="3"
                                stroke-dasharray="100"
                                strokeDashoffset={100 - pr.progress}
                              ></circle>
                            </g>
                          </svg>
                          <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <span className="text-center text-[10px] font-bold text-gray-800 dark:text-white">
                              {pr.progress + '%'}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
