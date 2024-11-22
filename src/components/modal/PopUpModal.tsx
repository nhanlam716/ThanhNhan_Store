import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface IModal {
  description: string;
  btnYes: string;
  btnNo: string;
  onClick: () => void;
}
const PopUpModal = ({ btnNo, btnYes, description, onClick }: IModal) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-2 h-16 w-16 text-gray-500 dark:text-gray-200" />
            <h3 className="mb-5 text-xl font-normal text-gray-600 dark:text-gray-400">
              {description}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={onClick}>
                {btnYes}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                {btnNo}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopUpModal;
