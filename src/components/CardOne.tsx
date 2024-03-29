const CardOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-[#F2EAE5] py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="bg-[#d398e7] flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          className="fill-white dark:fill-white "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 20.75C0 20.3358 0.335786 20 0.75 20H18.75C19.1642 20 19.5 20.3358 19.5 20.75C19.5 21.1642 19.1642 21.5 18.75 21.5H0.75C0.335786 21.5 0 21.1642 0 20.75Z"
            fill=""
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 8.13086C0 7.16665 0.785786 6.38086 1.75 6.38086H3.34998C4.31419 6.38086 5.09998 7.16665 5.09998 8.13086V16.7509C5.09998 17.7151 4.31419 18.5009 3.34998 18.5009H1.75C0.785786 18.5009 0 17.7151 0 16.7509V8.13086ZM1.75 7.88086C1.61421 7.88086 1.5 7.99507 1.5 8.13086V16.7509C1.5 16.8866 1.61421 17.0009 1.75 17.0009H3.34998C3.48576 17.0009 3.59998 16.8866 3.59998 16.7509V8.13086C3.59998 7.99507 3.48576 7.88086 3.34998 7.88086H1.75Z"
            fill=""
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.19922 4.93945C7.19922 3.97524 7.98501 3.18945 8.94922 3.18945H10.5492C11.5134 3.18945 12.2992 3.97524 12.2992 4.93945V16.7495C12.2992 17.7137 11.5134 18.4995 10.5492 18.4995H8.94922C7.98501 18.4995 7.19922 17.7137 7.19922 16.7495V4.93945ZM8.94922 4.68945C8.81343 4.68945 8.69922 4.80367 8.69922 4.93945V16.7495C8.69922 16.8852 8.81343 16.9995 8.94922 16.9995H10.5492C10.685 16.9995 10.7992 16.8852 10.7992 16.7495V4.93945C10.7992 4.80367 10.685 4.68945 10.5492 4.68945H8.94922Z"
            fill=""
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.3984 1.75C14.3984 0.785786 15.1842 0 16.1484 0H17.7484C18.7126 0 19.4984 0.785786 19.4984 1.75V16.75C19.4984 17.7142 18.7126 18.5 17.7484 18.5H16.1484C15.1842 18.5 14.3984 17.7142 14.3984 16.75V1.75ZM16.1484 1.5C16.0127 1.5 15.8984 1.61421 15.8984 1.75V16.75C15.8984 16.8858 16.0127 17 16.1484 17H17.7484C17.8842 17 17.9984 16.8858 17.9984 16.75V1.75C17.9984 1.61421 17.8842 1.5 17.7484 1.5H16.1484Z"
            fill=""
          />
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <span className="text-md text-[#797979]">Total revenue</span>
          <h4 className="mt-1 text-title-md font-bold text-[#060606] dark:text-white">
            $53,00989
          </h4>
          <span className="flex items-center gap-1 mt-2 text-xs font-medium text-[#060606]">
            <svg
              className="fill-meta-3"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.0611 3.49414C5.0611 3.25252 5.25698 3.05664 5.4986 3.05664L10.5061 3.05664C10.6221 3.05664 10.7334 3.10273 10.8155 3.18478C10.8975 3.26683 10.9436 3.37811 10.9436 3.49414L10.9436 8.50164C10.9436 8.74326 10.7477 8.93914 10.5061 8.93914C10.2645 8.93914 10.0686 8.74326 10.0686 8.50164L10.0686 3.93164L5.4986 3.93164C5.25698 3.93164 5.0611 3.73577 5.0611 3.49414Z"
                fill="#1A932E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.18436 10.8155C3.0135 10.6446 3.0135 10.3676 3.18436 10.1967L10.1264 3.25472C10.2972 3.08387 10.5742 3.08387 10.7451 3.25472C10.916 3.42558 10.916 3.70259 10.7451 3.87344L3.80308 10.8155C3.63222 10.9863 3.35521 10.9863 3.18436 10.8155Z"
                fill="#1A932E"
              />
            </svg>
            12% increase from last month
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
