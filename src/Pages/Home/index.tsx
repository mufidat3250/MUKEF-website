import "./Home.scss";
import PageLayout from "../../Layouts";
import RecentProfile from "../../molecules/RecentProfile";
import { profileData } from "../../data";
import { navData } from "../../data";
import NavTabs from "../../attoms/NavTabs";
import Modal from "../../molecules/Modal";
import { useState } from "react";
import PopForm from "../../molecules/PopForm/PopForm";
import DonateForm from "../../molecules/DonationForm/index";
import LoginForm from "../../molecules/LoginForm/index";
import Button from "../../attoms/Button";

const HomePage = () => {
  const [joinUsModal, setjoinUsModal] = useState(false);
  const [donateModal, setDonateModal] = useState(false);
  const [stage, setStage] = useState("signup");
  return (
    <>
      <PageLayout>
        <div className="first--page">
        <NavTabs tabs={navData} tabIndex={0}  color='white'/>
          <div className=" h-screen flex flex-col justify-center  items-center">
            <div className="mt-[-8rem] sm:w-[8.81rem] sm:mt-[-23rem]">
              <img
                className="w-full"
                src="/public/images/Mukef Logo.png"
                alt="Logo"
              />
            </div>
            <div className=" my-4  sm:w-[52rem] sm:h-[9.45rem]  text-center flex justify-center items-center">
              <p className=" text-[1.5rem] sm:text-[2rem] font-bold ">
                Muhammad Kamalud-Deen (Education) Foundation
              </p>
            </div>
            <p className=" px-4 text-center">
              The most elegant expression of Apple Watch returns with two iconic
              materials — titanium and ceramic.
            </p>
            <div className="flex  mt-[1.5rem] sm:mt-[3rem] space-y-[0.8rem] sm:space-x-[2.5rem] flex-col sm:flex sm:flex-row">
              <div className="w-[16.37rem]">
                <Button title={" Make an instant donation"} customStyle={" border-white border-[1px] text-white rounded-[4px]"}  onClick={() => {
                  setDonateModal(true);
                }}/>
              </div>

              <div className="w-[16.37rem]">
                <Button title={"Join us"} customStyle={" border-white border-[1px] text-black rounded-[4px] bg-white"} onClick={() => {
                  setStage("signup");
                  setjoinUsModal(true);
                }}/>
              </div>
         
            </div>
          </div>
        </div>
        <div className="profile--page">
          <p className="text-black font-bold">Recent news</p>
          <div className="eachProfile ">
            {profileData.map((data, dataIndex) => (
              <RecentProfile key={dataIndex} {...data} />
            ))}
            <button className="text-black w-[9.3rem] h-[2.62rem] ml-[77rem] rounded-[0.3rem] border-[1px] border-#E5E5E5-600">
              View all articless
            </button>
          </div>
        </div>
      </PageLayout>
      <Modal
        HeaderText={stage == "signup" ? "Create an account" : "Login"}
        openModal={joinUsModal}
        closeModal={() => setjoinUsModal(false)}
      >
        {stage == "signup" ? (
          <PopForm signUp={() => setStage("login")} />
        ) : (
          <LoginForm />
        )}
      </Modal>
      <Modal
        width="295px"
        HeaderText="Instant donation"
        openModal={donateModal}
        closeModal={() => setDonateModal(false)}
      >
        <DonateForm />
      </Modal>
    </>
  );
};

export default HomePage;
