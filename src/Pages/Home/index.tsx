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
        <div className="first--page--image">
          <NavTabs tabs={navData} tabIndex={0} color="white" />
          <div className="first--page">
            <div className="first--page--contents">
              <img
                className="w-full"
                src="/public/images/Mukef Logo.png"
                alt="Logo"
              />
            </div>
            <div className="text-center flex justify-center items-center">
              <p className="foundation--name">
                Muhammad Kamalud-Deen (Education) Foundation
              </p>
            </div>
            <p className="foundation--contents">
              The most elegant expression of Apple Watch returns with two iconic
              materials — titanium and ceramic.
            </p>
            <div className="button--container">
              <div className="w-[16.37rem]">
                <Button
                  title={" Make an instant donation"}
                  customStyle={
                    " border-white border-[1px] text-white rounded-[4px]"
                  }
                  onClick={() => {
                    setDonateModal(true);
                  }}
                />
              </div>

              <div className="w-[16.37rem]">
                <Button
                  title={"Join us"}
                  customStyle={
                    " border-white border-[1px] text-black rounded-[4px] bg-white"
                  }
                  onClick={() => {
                    setStage("signup");
                    setjoinUsModal(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="profile--page ">
          <p className="text-black font-bold text-center sm:text-left sm:text-6xl md:text-base">
            Recent news
          </p>
          <div className="eachProfile">
            {profileData.map((data, dataIndex) => (
              <RecentProfile key={dataIndex} {...data} />
            ))}
            <Button
              title="View all articless"
              customStyle="text-black w-[9.3rem] h-[2.62rem] ml-[77rem] rounded-[0.3rem] border-[1px] border-#E5E5E5-600"
              onClick={() => {}}
            />
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
