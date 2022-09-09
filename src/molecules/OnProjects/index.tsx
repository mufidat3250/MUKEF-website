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
      <div className="mb-[2.93rem] w-full pr-10">
        <div className="h-[20.4rem] ">
          <img className=" h-full w-11/12" src={image} alt="ongoingProject" />
        </div>
        <p className="text-black text-[24px] font-bold mt-[1.2rem] ">{title}</p>
        <div className="w-full mt-[19.3px] flex flex-col md:flex-row">
          <div className="w-full ">
            <p className="text-[18px] text-black">{desc}</p>
          </div>
          <div className="w-full flex justify-end">
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
