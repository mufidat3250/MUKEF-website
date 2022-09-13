import { useRef, useState } from "react";
import "./Nav.scss";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import MunkefLogo from "../Vectors/MunkefLogo";
import LoginForm from "../../molecules/LoginForm/index";
import Modal from "../../molecules/Modal";
import MenuIcon from "../Vectors/MenuIcon";
import CancelIcon from "../Vectors/CancelIcon";
import {useClickAway} from 'react-use'
import LogOutMessage from "../../molecules/LogoutMessage";

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
  const [logOutModal, setLogOutModal] = useState(false)
  const [menu, setMenu] = useState(false);
  const ref = useRef(null)
  useClickAway(ref, ()=>{()=>setMenu(false)})

  const handleNav = (tab: string, value: number) => {
    setActivetab(value);
    navigate(tab);
  };
  return (
    <>
      <div className=" NavBar">
        <div className="navbar--logo--container">
          <div className="mobile--logo">
            <img src="/vectors/Group 48.svg" alt="" />
          </div>
          <div className="desktop--logo">
            <MunkefLogo color={color} />
          </div>
          <h1
            className={`logoText ${otherStyle}`}
          >
            MUKEF
          </h1>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            {tabs.map((tab: any, index: number) => (
              <p
                className={`tab ${
                  active == index ? "opacity-[0.5]" : ""
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
                onClick={() => setLogOutModal(true)}
              />
            )}
          </div>
        </div>
        <div
          className=" lg:hidden"
          onClick={() => {
            setMenu(true);
          }}
        >
          <MenuIcon color="white" />
        </div>

        <div
          className={`space-y-4 h-fit top-0 pl-10 pb-8 right-0 bottom-0 absolute lg:hidden bg-[#2D2D2D] rounded-b-lg flex z-50 flex-col pt-7 pr-6 ${
            menu ? "ml-0" : "right-[-50rem]"
          }`}
          ref={ref}
        >
          <div>
            <div className="icon--wrapper">
              <CancelIcon color="white" onClick={() => setMenu(!menu)} />
            </div>
            <div className="tabs mobile--tabs ">
              {tabs.map((tab: any, index: number) => (
                <p
                  className={`tab ${
                    active == index ? "text-gray-400" : "text-white "
                  } ${otherStyle}`}
                  key={`nav${index} `}
                  onClick={() => {
                    handleNav(tab.link, index);
                    setMenu(false);
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
                  "!font-[600] !text-[#0B8EC2] bg-white !rounded-[5px]"
                }
                onClick={() => setLoginModal(true)}
              />
            ) : (
              <Button
                title={"Login Out"}
                customStyle={`!font-[600] !text-white !bg-[#1D2319] !rounded-[5px]`}
                onClick={() => setLogOutModal(true)}
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
      <Modal 
        HeaderText="Log Out ?"
        openModal={logOutModal}
        closeModal={()=>setLogOutModal(false)}
        width='23.875rem'
      >
        <LogOutMessage/>
      </Modal>
    </>
  );
};

export default NavTabs;
