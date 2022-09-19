import React, { ReactNode, useRef } from "react";
import ModalOverlay from "../../attoms/ModalOverlay";
import { useClickAway } from "react-use";
import "./Modal.scss";
import CancelIcon from "../../attoms/Vectors/CancelIcon";

export interface ModalProps {
  openModal?: boolean;
  children?: ReactNode;
  title?: string;
  subtext?: string;
  closeModal?: Function;
  width?: string;
  icon?: ReactNode;
  headingCenter?: boolean;
  textAlign?: string;
  HeaderText?: string;
}

function Modal({
  openModal,
  children,
  HeaderText,
  closeModal = () => {},
  width = "423px",
}: ModalProps) {
  const ref = useRef(null);
  useClickAway(ref, () => closeModal());

  return (
    <>
      {openModal && <ModalOverlay></ModalOverlay>}

      <div
        className={`flex w-full z-20 absolute   h-[100vh] justify-center  items-center transition-all duration-300 ${
          openModal ? "bottom-0  z-[100] " : "bottom-[-1200%] duration-300"
        }`}
      >
        <div
          className={`modal-box w-fit  ${openModal ? "open-modal" : ""}`}
          style={{ width: width }}
          ref={ref}
        >
          <div className="head">
            <h3 className="text-black font-bold">{HeaderText}</h3>
            <button
              className="z-50"
              onClick={() => {
                console.log("cancelling");

                closeModal();
              }}
            >
              <CancelIcon />
            </button>
          </div>
          <div className="mt-[2.04rem]">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
