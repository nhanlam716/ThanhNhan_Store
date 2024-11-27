import React from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { INewInformation } from "../../pages/HomeStore/accountHomePage/InformationPage";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  formData: INewInformation;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  title: string;
  saveLabel: string;
}
const PopUpModal = ({
  isOpen,
  onClose,
  formData,
  onChange,
  onSave,
  title,
  saveLabel,
}: IModal) => {
  return (
    <div>
      <Modal show={isOpen} size="2xl" onClose={onClose} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
            <div className="flex gap-3">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="HỌ" />
                </div>
                <TextInput
                  id="firstName"
                  placeholder="Nhập họ của bạn"
                  value={formData.firstName}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="TÊN" />
                </div>
                <TextInput
                  id="lastName"
                  placeholder="Nhập tên của bạn"
                  value={formData.lastName}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="EMAIL" />
              </div>
              <TextInput
                id="email"
                placeholder="Nhập email của bạn"
                value={formData.email}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="SỐ ĐIỆN THOẠI" />
              </div>
              <TextInput
                id="phone"
                placeholder="Nhập SĐT của bạn"
                value={formData.phone}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="ĐỊA CHỈ" />
              </div>
              <TextInput
                id="address"
                placeholder="Nhập địa chỉ của bạn"
                value={formData.address}
                onChange={onChange}
                required
              />
            </div>
            <Button onClick={onSave}>{saveLabel}</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopUpModal;
