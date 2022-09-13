import React, { ReactNode} from "react";
import "./Dashboard.scss";
import { navData} from "../../data";
import NavTabs from "../../attoms/NavTabs";
import { useNavigate } from "react-router-dom";
import MunkefLogo from "../../attoms/Vectors/MunkefLogo";
import Footer from "../../molecules/Footer";
import SideNav from "../../molecules/SideNav";

const DashboardLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
      <div className="DashboardLayout">
        <div className="nav--wrapper">
          <NavTabs
            tabs={navData}
            logout={true}
            otherStyle={"!text-[#1D2319]"}
            color="#1D2319"
            tabIndex={10}
          />
        </div>
        <div className="dasboard--logo--container">
          <div className="mobile--wrapper">
            <div className="mobile">
              <img src="/vectors/munkefLogoBlack.svg" alt="" />
            </div>
            <div className="hidden lg:block">
              <MunkefLogo color={"black"} />
            </div>
            <h1
              className={`logo--title`}
            >
              MUKEF
            </h1>
          </div>
        </div>
        <section className="">
         <SideNav/>
          <main className="main--dashboard">
            <div className="userProfile">
              <div className="user--profile--wrapper">
                <img src="/images/AbdulgannyOladosu.png" alt="" />
                <div className="text-center">
                  <h1 className="user--profile--title">
                    Prof. Abdul-Ganiyy Oladosu (AGAS) OON
                  </h1>
                  <p className="user--profile--desc">
                    Chief Imam of University of Ilorin
                  </p>
                </div>
              </div>
            </div>
            {title && (
              <p className="information">
                {title}
              </p>
            )}
            {children}
          </main>
        </section>
        <Footer/>
      </div>
  );
};

export default DashboardLayout;
