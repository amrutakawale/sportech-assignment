const MapOne = () => {
  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-[#F2EAE5] py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="relative text-[#000606] text-lg font-bold mt-2.5">
            Projects Workload
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
              Last 3 months
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
        <div className="flex flex-row list-none flex-wrap border-b-0 pl-0  justify-between">
          <div className="flex flex-col items-center min-h-[250px] justify-end">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#060606]">
              <span className="text-white font-bold text-sm">07</span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <span className="text-[12px] text-[#797979]">Sam</span>
          </div>
          <div className="flex flex-col items-center min-h-[250px] justify-end">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#060606]">
              <span className="text-white font-bold text-sm">08</span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <span className="text-[12px] text-[#797979]">Meldy</span>
          </div>
          <div className="flex flex-col items-center min-h-[250px] justify-end">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#060606]">
              <span className="text-white font-bold text-sm">02</span>
            </div>
            <span className="text-[12px] text-[#797979]">Ken</span>
          </div>
          <div className="flex flex-col items-center min-h-[250px] justify-end">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#e65f2b]">
              <span className="text-white font-bold text-sm">10</span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <span className="text-[12px] text-[#797979]">Dmitry</span>
          </div>
          <div className="flex flex-col items-center min-h-[250px] justify-end">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#060606]">
              <span className="text-white font-bold text-sm">08</span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <span className="text-[12px] text-[#797979]">Vego</span>
          </div>
          <div className="flex flex-col items-center min-h-[250px] justify-end">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#060606]">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <span className="text-[12px] text-[#797979]">Kadin</span>
          </div>
          <div className="flex flex-col items-center min-h-[250px] justify-end">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#060606]">
              <span className="text-white font-bold text-sm">04</span>
            </div>
            <div className="flex items-center justify-center border border-[#060606] h-8 w-8 rounded-full bg-[#F2EAE5]">
              <span className="text-white font-bold text-sm"></span>
            </div>
            <span className="text-[12px] text-[#797979]">Melm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapOne;
