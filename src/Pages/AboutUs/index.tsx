import NavTabs from "../../attoms/NavTabs";
import { navData, prospects, cleric } from "../../data";
import PageLayout from "../../Layouts";
import "./AboutUs.scss";

import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <PageLayout>
      <div className="About--us ">
        <NavTabs tabs={navData} tabIndex={3} color="white" />
        <h1 className="title">About Mukef</h1>
      </div>
      <div className="prospect">
        {prospects.map(({ img, title, subtext }, index) => {
          return (
            <div className="space-y-[1.5rem]" key={index}>
              <div className="flex justify-center  items-center space-x-[1.5rem] text-[#3D3D3D] text-4xl">
                <img src={img} alt="image" />
                <p>{title}</p>
              </div>
              <p className="max-w-[100%] px-5  md:max-w-[58.8125rem] text-[#606060] text-[1.375rem] leading-[190%]">
                {subtext}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center bg-gray300">
        <div className=" py-[6.75rem] grid grid-cols-2 sm:grid-cols-4 sm:gap-[4.375rem] px-3 gap-[2rem]">
          {cleric.map((c, index) => (
            <div key={index}>
              <img src={c.img} alt="" />
              <div className="flex justify-center items-center flex-col mt-3">
                <p className="text-black text-[1.1679rem]">{c.title}</p>
                <span className="text-[#727272] text-[0.9084rem]">
                  {c.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
