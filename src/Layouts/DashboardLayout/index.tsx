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
      <div className="DashboardLayout overflow-auto">
        <div className="border-b-[#000000] hidden lg:block border-[1px]">
          <NavTabs
            tabs={navData}
            logout={true}
            otherStyle={"!text-[#1D2319]"}
            color="#1D2319"
            tabIndex={10}
          />
        </div>
        <div className="text-black border-b-gray500 border-[1px] lg:hidden py-4 px-4">
          <div className="flex items-center space-x-[0.7rem] lg:gap-[2.0625rem]">
            <div className=" w-[30px] h-[30px] lg:hidden">
              <img src="/public/vectors/munkefLogoBlack.svg" alt="" />
            </div>
            <div className="hidden lg:block">
              <MunkefLogo color={"black"} />
            </div>
            <h1
              className={`font-[500] text-black text-[1.1255rem] lg:text-[2.1255rem] cursor-pointer`}
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
          <main className="w-full h-screen overflow-auto">
            <div className="mt-[1.375rem] border-[#E7E7E7] border-[1px] rounded-[0.625rem] lg:mx-[2.5rem] xl:ml-[4.1875rem] xl:mr-[5.5rem] mb-[3.0625rem] mx-4 lg:mx-0 ">
              <div className="flex space-x-4 items-center py-[1.125rem] pl-[1.75rem]">
                <img src="/public/images/AbdulgannyOladosu.png" alt="" />
                <div className="text-center">
                  <h1 className="text-sm text-black font-[500]">
                    Prof. Abdul-Ganiyy Oladosu (AGAS) OON
                  </h1>
                  <p className="text-black text-xs font-[600] opacity-[0.5] tracking-[-0.444375px]">
                    Chief Imam of University of Ilorin
                  </p>
                </div>
              </div>
            </div>
            {title && (
              <p className=" mx-8 padding-b-[0.5862rem] lg:ml-[4.1875rem] text-xl font-normal text-[#111111] border-b-[1px] border-[#f5f5f5] mr-[7.6875rem]">
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
