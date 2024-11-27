import React from "react";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface IModal {
  isOpen?: boolean;
  onClose?: () => void;
  onclick?: () => void;
  onclick2?: () => void;
  title?: string;
  btnTitle?: string;
  btnTitle2?: string;
}
const Modals = ({
  isOpen,
  onClose,
  onclick,
  onclick2,
  title,
  btnTitle,
  btnTitle2,
}: IModal) => {
  return (
    <div>
      <Modal show={isOpen} size="md" onClose={onClose} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {title}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={onclick}>
                {btnTitle}
              </Button>
              <Button color="gray" onClick={onclick2}>
                {btnTitle2}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modals;
