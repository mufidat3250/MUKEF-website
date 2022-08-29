import React from "react";
import "./EachAim.scss";
import GroupIcon from "../../attoms/Vectors/groupIcon";

function EachAim({ title, desc }: { title: string; desc: string }) {
  return (
    <>
      <div className="mt-[5.62rem]">
        <div className="flex ml-[31.43rem] items-center">
          <GroupIcon />
          <p className="text-black ml-[1.5rem] font-bold tracking-widest">
            {title}
          </p>
        </div>
        <p className="text-[1.37rem] text-black max-w-5xl leading-10 mt-[1.5rem]">
          {desc}
        </p>
      </div>
    </>
  );
}

export default EachAim;
