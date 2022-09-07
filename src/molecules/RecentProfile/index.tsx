import React from "react";
import HeadIcon from "../../attoms/Vectors/Head";
import EyeIcon from "../../attoms/Vectors/EyeIcon";
import MessageIcon from "../../attoms/Vectors/MsgIcon";

function RecentProfile({
  img,
  name,
  desc,
  viewers,
  comments,
}: {
  img: string;
  name: string;
  desc: string;
  viewers: string;
  comments: string;
}) {
  return (
    <div className="flex mt-[2.5rem] flex-col space-y-4 sm:space-y-0 sm:items-center sm:flex-row  sm:space-x-[1.69rem] ">
     <div className=" w-[70%]  self-center sm:w-[13.8325rem] rounded-[1.69rem]">
        <img src={img} className='w-[100%] h-[100%]' />
      
     </div>
      <div className="flex flex-col items-center sm:items-start">
        <p className="text-sm max-w-[20.6131rem] text-center  sm:text-left sm:text-2xl font-bold text-black">{name}</p>
        <p className=" mt-[0.7rem] text-[12px] sm:text-base sm:mt-[1.19rem] font-normal text-black max-w-[18.9856rem] text-center sm:text-left">{desc}</p>
        <div className="flex mt-[1.03rem] sm:justify-start justify-center">
          <div className=" flex justify-center items-center h-[2.27rem] w-[6.94rem] shadow-sm cursor-pointer  border-[1px] border-[#e5e5e5] rounded-[5px]">
            <p className="text-black font-bold   text-[0.86rem]">Read More</p>
            <span className="ml-[0.71rem]">
              <HeadIcon />
            </span>
          </div>
          <div className=" flex justify-center items-center ml-[1.73rem]">
            <EyeIcon />
            <p
              className="text-black text-[0.65rem] ml-[0.27rem]
"
            >
              {viewers}
            </p>
          </div>
          <div className=" flex justify-center items-center ml-[1.73rem]">
            <MessageIcon />
            <p
              className="text-black text-[0.65rem] ml-[0.27rem]
"
            >
              {comments}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProfile;
