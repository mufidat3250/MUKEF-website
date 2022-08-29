import "./Home.scss";
import PageLayout from "../../Layouts";
import RecentProfile from "../../molecules/RecentProfile";
import { profileData } from "../../data";
import Button from "../../attoms/Button";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="first--page">
        <div className="w-[14rem]">
          <img
            className="w-full"
            src="/public/images/Mukef Logo.png"
            alt="Logo"
          />
        </div>
        <div className="w-[52rem] h-[9.45rem]  flex justify-center items-center">
          <p className="text-[2rem]  ">
            Muhammad Kamalud-Deen (Education) Foundation
          </p>
        </div>
        <p>
          The most elegant expression of Apple Watch returns with two iconic
          materials — titanium and ceramic.{" "}
        </p>
        <div className="flex mt-[3rem] ">
          <div className="w-[16.37rem] h-[3.125rem] flex justify-center items-center outline-double cursor-pointer">
            Make an instant donation
          </div>
          <div className=" bg-white w-[16.37rem] h-[3.125rem] flex justify-center items-center outline-double ml-3 text-black cursor-pointer">
            Join us
          </div>
        </div>
      </div>
      <div className="profile--page">
        <p className="text-black font-bold">Recent news</p>
        <div className="eachProfile ">
          {profileData.map((data, dataIndex) => (
            <RecentProfile key={dataIndex} {...data} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
