import { useState } from "react";
import "./Nav.scss";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import MunkefLogo from "../Vectors/MunkefLogo";
import LoginForm from "../../molecules/LoginForm/index";
import Modal from "../../molecules/Modal";
import MenuIcon from "../Vectors/MenuIcon";
import CancelIcon from "../Vectors/CancelIcon";

type navbarProp = {
  tabs: Array<object>;
  tabIndex?: number;
  activetab?: number;
  setActiveTab?: Function;
  logout?: boolean;
  otherStyle?: string;
  color?: string;
};
const NavTabs = ({ tabs, logout, tabIndex, otherStyle, color }: navbarProp) => {
  const navigate = useNavigate();
  const [active, setActivetab] = useState(tabIndex || 0);
  const [loginModal, setLoginModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleNav = (tab: string, value: number) => {
    setActivetab(value);
    navigate(tab);
  };
  return (
    <>
      <div className=" NavBar relative">
        <div className="flex items-center space-x-[0.7rem] sm:space-x-0 sm:gap-[2.0625rem] ">
          <div className=" w-[30px] h-[30px] sm:hidden">
            <img src="/public/vectors/Group 48.svg" alt=""  />
          </div> 
          <div className="hidden sm:block">
            <MunkefLogo color={color} />
          </div>
          <h1
            className={`font-[500] text-[#FFFFFF] text-[1.1255rem] sm:text-[2.1255rem] cursor-pointer ${otherStyle}`}
          >
            MUKEF
          </h1>
        </div>



        <div className="hidden sm:flex sm:space-x-[7.4375rem]">
          <div className="tabs">
            {tabs.map((tab: any, index: number) => (
              <p
                className={`tab ${
                  active == index ? "opacity-[0.5]" : "text-white "
                } ${otherStyle}`}
                key={`nav${index} `}
                onClick={() => handleNav(tab.link, index)}
              >
                {tab.title}
              </p>
            ))}
          </div>
          <div className="w-[8.0625rem]">
            {!logout ? (
              <Button
                title={"Login"}
                customStyle={
                  "!font-[600] !text-[#0B8EC2] bg-white !rounded-[5px]"
                }
                onClick={() => setLoginModal(true)}
              />
            ) : (
              <Button
                title={"Login Out"}
                customStyle={`!font-[600] !text-white !bg-[#1D2319] !rounded-[5px]`}
                onClick={() => navigate("/")}
              />
            )}
          </div>
        </div>
        <div className=" sm:hidden" onClick={() => {
          console.log('i am clicked')
          setMenu(true)
        }}>
          <MenuIcon color="white" />
        </div>
       
        <div className={`space-x-[7.4375rem] h-screen top-0 left-0 right-0 bottom-0 absolute sm:hidden bg-[#2D2D2D] flex flex-col pt-7 pr-6 ${menu ?'ml-0':'ml-[36rem]'}`}>
           <div>
             <div className=" flex justify-end cursor-pointer">
             <CancelIcon color="white" onClick={()=>setMenu(false)}/>
             </div>
           <div className="tabs flex flex-col self-center space-y-4 pt-6">
              {tabs.map((tab: any, index: number) => (
                <p
                  className={`tab ${
                    active == index ? "opacity-[0.5]" : "text-white "
                  } ${otherStyle}`}
                  key={`nav${index} `}
                  onClick={() => {
                    handleNav(tab.link, index)
                    setMenu(false)
                  }}
                >
                  {tab.title}
                </p>
              ))}
            </div>
           </div>
            <div className="w-[8.0625rem]">
              {!logout ? (
                <Button
                  title={"Login"}
                  customStyle={
                    "!font-[600] !text-[#0B8EC2] bg-white !rounded-[5px] hidden"
                  }
                  onClick={() => setLoginModal(true)}
                />
              ) : (
                <Button
                  title={"Login Out"}
                  customStyle={`!font-[600] !text-white !bg-[#1D2319] !rounded-[5px]`}
                  onClick={() => navigate("/")}
                />
              )}
            </div>
          </div>
      </div>

      <Modal
        HeaderText="Login"
        openModal={loginModal}
        closeModal={() => setLoginModal(false)}
        width="403.04px"
      >
        <LoginForm />
      </Modal>
    </>
  );
};

export default NavTabs;
