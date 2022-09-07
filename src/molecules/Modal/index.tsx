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
        className={`modal-box  ${openModal ? "open-modal" : ""}`}
        style={{ width: width }}
        ref={ref}
      >
        <div className="head">
          <h3 className="text-black font-bold">{HeaderText}</h3>
          <button onClick={() => closeModal()}>
            <CancelIcon />
          </button>
        </div>
        <div className="mt-[2.04rem]">{children}</div>
      </div>
    </>
  );
}

export default Modal;
