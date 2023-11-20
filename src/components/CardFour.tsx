const CardFour = () => {
 return (
   <div className="rounded-sm border border-stroke bg-[#F2EAE5] py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
     <div className="bg-[#f0c274] flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.00033 1.52075C6.84872 1.52075 5.10449 3.26498 5.10449 5.41659C5.10449 7.56819 6.84872 9.31242 9.00033 9.31242C11.1519 9.31242 12.8962 7.56819 12.8962 5.41659C12.8962 3.26498 11.1519 1.52075 9.00033 1.52075ZM3.72949 5.41659C3.72949 2.50558 6.08932 0.145752 9.00033 0.145752C11.9113 0.145752 14.2712 2.50558 14.2712 5.41659C14.2712 8.32759 11.9113 10.6874 9.00033 10.6874C6.08932 10.6874 3.72949 8.32759 3.72949 5.41659Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.438477 19.1667C0.438477 15.1142 4.41417 12.0625 9.00014 12.0625C13.5861 12.0625 17.5618 15.1142 17.5618 19.1667C17.5618 19.5464 17.254 19.8542 16.8743 19.8542C16.4946 19.8542 16.1868 19.5464 16.1868 19.1667C16.1868 16.1241 13.1042 13.4375 9.00014 13.4375C4.89611 13.4375 1.81348 16.1241 1.81348 19.1667C1.81348 19.5464 1.50567 19.8542 1.12598 19.8542C0.746281 19.8542 0.438477 19.5464 0.438477 19.1667Z" fill="white"/>
</svg>
     </div>

     <div className="mt-4 flex items-end justify-between">
       <div>
         <span className="text-md text-[#797979]">Resources</span>
         <h4 className="mt-1 text-title-md font-bold text-[#060606] dark:text-white">
           101 <span className="text-sm">/120</span>
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
           2% increase from last month
         </span>
       </div>
     </div>
   </div>
 );
};

export default CardFour;
