import React from 'react';
import ReactModal from 'react-modal';

/** Interface for component */
interface IModal {
  /** Modal label */
  label: string;

  /** Is modal open */
  isOpen: boolean;

  /** Modal body */
  children: React.ReactChild | React.ReactChild[];

  /** function on modal close */
  onClose: () => void;
}

/** Setting element on top of DOM */
ReactModal.setAppElement('#root');

/** Custom Modal */
const Modal = ({
  children, label, onClose, isOpen,
}: IModal) => (
  <ReactModal
    overlayClassName="fixed bg-smoke top-0 bottom-0 left-0 right-0 justify-center items-center flex "
    className="border-0 w-1/3  rounded-md bg-white  top-0 bottom-0 left-0 right-0 p-5"
    isOpen={isOpen}
    onRequestClose={onClose}
  >
    <div className="w-full justify-center flex">
      <p className="text-xl">{label}</p>
    </div>
    <div className="">
      {children}
    </div>
  </ReactModal>
);

export default Modal;
