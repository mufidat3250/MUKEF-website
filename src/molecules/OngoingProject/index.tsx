import Button from "../../attoms/Button";

type Props = {
  title: string;
  desc: string;
  img: string;
  index: number;
};

const OngoingProject = ({ title, desc, img, index }: Props) => {
  return (
    <div className="grid justify-center lg:grid-cols-2 items-center gap-[2rem] px-4">
      <div className={` ${index == 0 ? "lg:-order-2" : "lg:order-1"}`}>
        <img src={img} alt={`ongoing project`} />
      </div>
      <div className="space-y-[1.25rem] flex flex-col">
        <h1 className="font-[500] text-black text-center lg:text-left text-[2rem]">
          {title}
        </h1>
        <p className="max-w-[40rem] self-center lg:self-start lg:max-w-[36rem] text-lg font-normal text-[#777777] text-center lg:text-left">
          {desc}
        </p>
        <div className="w-[16.375rem] lg:self-start self-center">
          <Button
            title={"Support this project"}
            customStyle={
              "!bg-transparent  border-[1px] border-gray900 text-gray900 rounded-[5px]"
            }
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OngoingProject;
