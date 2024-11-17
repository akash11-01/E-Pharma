import ReactDOM from "react-dom";

import { useEscapeClose } from "../../hooks";
import { handleClickOnBackdrop } from "../../helpers";
import { Icon } from "../../components";

interface ModalProps {
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
  toggleModal: () => void;
}

const modalRoot = document.querySelector("#modalRoot")!;

export const Modal = ({
  isOpen,
  className,
  children,
  toggleModal,
}: ModalProps) => {
  useEscapeClose(isOpen, toggleModal);

  return ReactDOM.createPortal(
    <div
      className="flex items-center justify-center fixed bg-[#696464] backdrop-blur-sm bg-opacity-40 w-full h-full left-0 top-0 z-50"
      onClick={(e) => handleClickOnBackdrop(toggleModal, e)}
    >
      <div
        className={`relative rounded-[20px] bg-white shadow-lg sm-max:max-w-[300px] max-w-[343px] md:max-w-[700px] lg:max-w-[1180px] max-h-[95%] ${className}`}
      >
        <button
          type="button"
          onClick={toggleModal}
          className="absolute top-4 right-4 md:top-5 md:right-5"
        >
          <Icon
            id="close"
            className="stroke-[#1d1e21] fill-none focus:fill-[#3f945f] lg:hover:fill-[#3f945f] transition duration-300"
            size={24}
          />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
