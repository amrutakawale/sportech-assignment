import { Link } from 'react-router-dom';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import { useState } from 'react';
const Menus = [
  { title: 'Dashboard', src: 'Chart_fill' },
  { title: 'Inbox', src: 'Chat' },
  { title: 'Accounts', src: 'User', gap: true },
  { title: 'Schedule ', src: 'Calendar' },
  { title: 'Search', src: 'Search' },
  { title: 'Analytics', src: 'Chart' },
  { title: 'Files ', src: 'Folder', gap: true },
  { title: 'Setting', src: 'Setting' },
];
const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
  
}) => {

  return (
    <header className="sticky top-0 z-999 flex w-full bg-[#F2EAE5] drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-[#060606] delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-[#060606] delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-[#060606] delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-[#060606] delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-[#060606] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>
        <div className="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            
            <div className="relative text-[#000606] text-2xl font-bold">
              
              Dashboard
            </div>
          </form>
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <li>
              <div className="hidden sm:block">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      className="w-80 p-2 pl-8 rounded-full bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      placeholder="Search for anything..."
                      value=""
                    />
                    <svg
                      className="w-4 h-4 absolute left-2.5 top-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </form>
              </div>
            </li>
            <li>
              <DropdownNotification />
            </li>
            <li>
              <DropdownUser />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
