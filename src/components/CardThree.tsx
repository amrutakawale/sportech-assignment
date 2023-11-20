const CardThree = () => {
 return (
   <div className="rounded-sm border border-stroke bg-[#F2EAE5] py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
     <div className="bg-[#70a1e5] flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="20"
         height="20"
         viewBox="0 0 20 20"
         fill="none"
       >
         <path
           fill-rule="evenodd"
           clip-rule="evenodd"
           d="M10.0002 1.52075C5.31986 1.52075 1.521 5.31961 1.521 9.99992C1.521 14.6802 5.31986 18.4791 10.0002 18.4791C14.6805 18.4791 18.4793 14.6802 18.4793 9.99992C18.4793 5.31961 14.6805 1.52075 10.0002 1.52075ZM0.145996 9.99992C0.145996 4.56022 4.56047 0.145752 10.0002 0.145752C15.4399 0.145752 19.8543 4.56022 19.8543 9.99992C19.8543 15.4396 15.4399 19.8541 10.0002 19.8541C4.56047 19.8541 0.145996 15.4396 0.145996 9.99992Z"
           fill="#F1F1F1"
         />
         <path
           fill-rule="evenodd"
           clip-rule="evenodd"
           d="M9.66113 5.19653C10.0408 5.19653 10.3486 5.50434 10.3486 5.88403V9.64237C10.3486 9.78312 10.4024 9.98713 10.5219 10.1967C10.6414 10.4063 10.7896 10.5562 10.91 10.6276L10.9118 10.6287L10.9118 10.6287L13.7534 12.3245C14.0795 12.5191 14.1861 12.9411 13.9915 13.2672C13.7969 13.5932 13.3749 13.6998 13.0488 13.5052L10.209 11.8105C10.2087 11.8103 10.2083 11.8101 10.208 11.8099C9.83387 11.5879 9.53317 11.2386 9.32746 10.8778C9.12155 10.5168 8.97363 10.0791 8.97363 9.64237V5.88403C8.97363 5.50434 9.28144 5.19653 9.66113 5.19653Z"
           fill="#F1F1F1"
         />
       </svg>
     </div>

     <div className="mt-4 flex items-end justify-between">
       <div>
         <span className="text-md text-[#797979]">Time spent</span>
         <h4 className="mt-1 text-title-md font-bold text-[#060606] dark:text-white">
           1022 <span className="text-sm">/1300 Hrs</span>
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

export default CardThree;
