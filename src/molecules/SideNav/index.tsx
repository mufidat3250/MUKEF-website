import React, { useState } from 'react'
import { sideNav } from '../../data';
import { useNavigate } from 'react-router-dom';
import './SideNav.scss'
import LogOutMessage from '../LogoutMessage';
import Modal from '../Modal';

const SideNav = () => {
  const navigate = useNavigate()
const [currentPath] = useState(window.location.pathname);
const [logoutModal, setLogOutModal] = useState(false)
  return (
    <>
     <aside className="side--nav--container">
            {sideNav.map(({ Icon, title, link }, index) => {
              let isActive = currentPath === link;
              return (
                <div
                  key={`sideNav${index}`}
                  className={`single--tab ${
                    isActive && "bg-[rgba(119,_119,_119,_0.16)] "
                  }`}
                  onClick={() => {
                    link.includes('logout') ? setLogOutModal(true):navigate(link)
                  }}
                >
                  <Icon />
                  <p className="hidden lg:block">{title}</p>
                </div>
              );
            })}
          </aside>
          <Modal openModal={logoutModal} closeModal={()=>setLogOutModal(false)} HeaderText='Log out ?'>
            <LogOutMessage/>
          </Modal>
          </>
  )
}

export default SideNav

function setLogOutModal(arg0: boolean) {
  throw new Error('Function not implemented.');
}
