import React from "react";
import close from "../assets/icon/close.png";

// Define the props using an interface
interface ModalProps {
  isOpen: boolean;
  title: string;
  icon: string;
  closeModal: () => void;
  backToFirstModal?: () => void;
  children: React.ReactNode;
  bg?: string;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
  title,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 z-[1000] flex justify-center items-center"
      onClick={handleBackdropClick}
    >
      <div
        className="relative flex flex-col p-4 lg:p-6 bg-[#1A1B1F] shadow-2xl rounded-2xl w-full lg:w-[50%]   max-w-[calc(100%-40px)]  "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 relative">
          {/* <img
              src={backToFirstModal ? icon : question}
              alt={backToFirstModal ? "back" : "question"}
              className="w-3"
            /> */}
          <div className="font-bold">Connect a Wallet</div>

          <div className="text-sm text-white">{title}</div>
          <div
            className="w-5 h-5 absolute right-0 flex items-center justify-center  bg-gray-500 hover:bg-gray-400 rounded-full cursor-pointer"
            onClick={closeModal}
          >
            <img src={close} alt="close" className="w-2" />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
