import React, { ReactNode, useState } from "react";
import "./Dashboard.scss";
import { navData, sideNav } from "../../data";
import NavTabs from "../../attoms/NavTabs";
import { useNavigate } from "react-router-dom";
import MunkefLogo from "../../attoms/Vectors/MunkefLogo";
import Footer from "../../molecules/Footer";

const DashboardLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  const navigate = useNavigate();
  const [currentPath] = useState(window.location.pathname);

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
              <img src="/public/vectors/munkefLogoBlack.svg" alt="" />
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
          <aside className="side--nav--container">
            {sideNav.map(({ Icon, title, link }, index) => {
              let isActive = currentPath === link;
              return (
                <div
                  key={`sideNav${index}`}
                  className={`single--tab ${
                    isActive && "bg-[rgba(119,_119,_119,_0.16)] "
                  }`}
                  onClick={() => navigate(link)}
                >
                  <Icon />
                  <p className="hidden lg:block">{title}</p>
                </div>
              );
            })}
          </aside>
          <main className="main--dashboard">
            <div className="userProfile">
              <div className="user--profile--wrapper">
                <img src="/public/images/AbdulgannyOladosu.png" alt="" />
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
