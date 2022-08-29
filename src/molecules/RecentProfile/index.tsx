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
    <div className="flex mt-[2.5rem]">
      <div className="h-[13.83rem] w-[13.83rem] bg-slate-500 rounded-[1.69rem]">
        <img src={img} />
      </div>
      <div className="h-[13.83rem] w-[18.98rem] ml-[1.69rem]">
        <p className="text-lg font-bold text-black">{name}</p>
        <p className="mt-[1.19rem] font-normal text-black">{desc}</p>
        <div className="flex mt-[1.03rem]">
          <div className=" flex justify-center items-center h-[2.27rem] w-[6.94rem] shadow-sm cursor-pointer">
            <p className="text-black font-bold text-[0.86rem]">Read More</p>
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
