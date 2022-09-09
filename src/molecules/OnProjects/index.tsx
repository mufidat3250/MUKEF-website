import Button from "../../attoms/Button";
import Modal from "../Modal";
import "./OnProject.scss";

function OnProject({
  image,
  title,
  desc,
  onClick,
}: {
  image: any;
  title: string;
  desc: string;
  onClick: any;
}) {
  return (
    <>
      <div className="mb-[2.93rem] pr-20">
        <div className="h-[20.4rem]  ">
          <img className=" h-full w-full" src={image} alt="ongoingProject" />
        </div>
        <p className="text-black text-[24px] font-bold mt-[1.2rem] ">{title}</p>

        <div className=" lg:flex  w-full justify-between  mt-[19.3px]  ">
          <div className="w-full px-6 md:px-0 lg:w-1/2 ">
            <p className="md:text-[18px] text-black">{desc}</p>
          </div>
          <div className="flex flex-grow justify-end mt-4 lg:mt-0">
            <Button
              onClick={onClick}
              title="Support this project"
              customStyle="bg-[#1E1E1E] text-white w-[13.16rem] h-[2.51rem] !rounded-[5px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OnProject;
