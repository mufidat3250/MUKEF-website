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

const HomePage = () => {
  const [joinUsModal, setjoinUsModal] = useState(false);
  const [donateModal, setDonateModal] = useState(false);
  const [stage, setStage] = useState("signup");
  return (
    <>
      <PageLayout>
        <div className="first--page">
          <div className="nav--container">
            <NavTabs tabs={navData} tabIndex={0} />
          </div>
          <div className=" h-screen flex flex-col justify-center items-center">
            <div className="w-[8.81rem] mt-[-23rem]">
              <img
                className="w-full"
                src="/public/images/Mukef Logo.png"
                alt="Logo"
              />
            </div>
            <div className="w-[52rem] h-[9.45rem]  flex justify-center items-center">
              <p className="text-[2rem] font-bold ">
                Muhammad Kamalud-Deen (Education) Foundation
              </p>
            </div>
            <p>
              The most elegant expression of Apple Watch returns with two iconic
              materials — titanium and ceramic.
            </p>
            <div className="flex mt-[3rem] ">
              <button
                onClick={() => {
                  setDonateModal(true);
                }}
                className="w-[16.37rem] h-[3.125rem] justify-center rounded-[4px] items-center border-[1px] border-white cursor-pointer"
              >
                Make an instant donation
              </button>
              <button
                onClick={() => {
                  setStage("signup");
                  setjoinUsModal(true);
                }}
                className=" rounded-[2px] bg-white w-[16.37rem] h-[3.125rem] justify-center items-center   ml-[2.56rem] text-black"
              >
                Join us
              </button>
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
