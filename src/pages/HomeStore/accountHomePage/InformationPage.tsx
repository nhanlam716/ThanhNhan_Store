import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { axiosClient } from "../../../api/axiosClient";
import { toast } from "react-toastify";
import PopUpModal from "../../../components/modal/PopUpModal";

export interface INewInformation {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

const initialFormData = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
};

const InformationPage = () => {
  const [newOpenModal, setNewOpenModal] = useState(false);
  const [updateOpenModal, setUpdateOpenModal] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<INewInformation>(initialFormData);
  const [addressList, setAddressList] = useState<INewInformation[]>([]);

  useEffect(() => {
    const storedAddresses = localStorage.getItem("addressList");
    if (storedAddresses) {
      setAddressList(JSON.parse(storedAddresses));
    }
  }, []);

  const onCloseNewModal = () => {
    setNewOpenModal(false);
  };

  const onCloseUpdateModal = () => {
    setUpdateOpenModal(false);
  };

  const handleAddNew = async () => {
    try {
      const newEntry = { ...formData, id: crypto.randomUUID() };

      await axiosClient.post("/users", newEntry);

      const updatedList = [...addressList, newEntry];
      setAddressList(updatedList);
      localStorage.setItem("addressList", JSON.stringify(updatedList));

      setFormData(initialFormData);
      setNewOpenModal(false);
      toast.success("Thêm địa chỉ mới thành công!");
    } catch (error) {
      console.log(error);
      toast.error("Đã xảy ra lỗi khi lưu thông tin!");
    }
  };

  const handleEditSave = async () => {
    if (currentEditIndex === null) return;

    try {
      const updatedData = { ...formData };
      await axiosClient.put(`/users/${updatedData.id}`, updatedData);

      const updatedList = [...addressList];
      updatedList[currentEditIndex] = updatedData;
      setAddressList(updatedList);
      localStorage.setItem("addressList", JSON.stringify(updatedList));
      setFormData(initialFormData);
      setUpdateOpenModal(false);
      toast.success("Cập nhật thông tin thành công!");
    } catch (error) {
      console.error(error);
      toast.error("Cập nhật thông tin thất bại!");
    }
  };

  const handleDelete = async (item: INewInformation) => {
    try {
      const updatedList = addressList.filter((x) => x.id !== item.id);
      setAddressList(updatedList);
      await axiosClient.delete(`/users/${item.id}`);
      localStorage.setItem("addressList", JSON.stringify(updatedList));
      toast.success("Xóa thông tin thành công!");
    } catch (error) {
      console.error(error);
      toast.error("Xóa thông tin thất bại!");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-6xl my-0 mx-auto">
        <div className="pb-8 flex justify-between">
          <div>
            <h2 className="text-3xl font-medium">Địa chỉ</h2>
          </div>
          <div>
            <Button
              onClick={() => setNewOpenModal(true)}
              outline
              gradientDuoTone="greenToBlue"
            >
              Thêm địa chỉ mới
            </Button>
            <PopUpModal
              isOpen={newOpenModal}
              onClose={onCloseNewModal}
              formData={formData}
              onChange={handleInputChange}
              onSave={handleAddNew}
              title="Thêm địa chỉ mới"
              saveLabel="Thêm mới"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 flex-wrap md:flex-row">
          <div className="w-[calc(50%-8px)] bg-white rounded-lg shadow-md">
            <div className="flex justify-between p-4 mt-2">
              <div>
                <div className="flex justify-between flex-wrap text-xl mb-4">
                  <span className="w-[118px] text-[#868282]">Họ tên</span>
                  <span className="w-[220px] font-medium text-[black]">
                    : {user.firstName} {user.lastName}
                  </span>
                </div>
                <div className="flex justify-between flex-wrap text-xl mb-4">
                  <span className="w-[118px] text-[#868282]">Điện thoại</span>
                  <span className="w-[220px] font-medium text-[black]">: </span>
                </div>
                <div className="flex justify-between flex-wrap text-xl mb-4">
                  <span className="w-[118px] text-[#868282]">Email</span>
                  <span className="w-[220px] font-medium text-[black]">
                    : {user.email}
                  </span>
                </div>
                <div className="flex justify-between flex-wrap text-xl mb-4">
                  <span className="w-[118px] text-[#868282]">Địa chỉ</span>
                  <span className="w-[220px] font-medium text-[black]">:</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1">
                  <h4
                    onClick={() => setUpdateOpenModal(true)}
                    className="text-xl font-medium text-[black] cursor-pointer hover:text-[red] duration-300"
                  >
                    Chỉnh sửa
                  </h4>
                  <PopUpModal
                    isOpen={updateOpenModal}
                    onClose={onCloseUpdateModal}
                    formData={formData}
                    onChange={handleInputChange}
                    onSave={handleEditSave}
                    title="Chỉnh sửa địa chỉ"
                    saveLabel="Lưu thông tin"
                  />
                </div>
                <div className="cursor-pointer">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {addressList.map((item, index) => (
            <div
              key={index}
              className="w-[calc(50%-8px)] bg-white rounded-lg shadow-md"
            >
              <div className="flex justify-between p-4 mt-2">
                <div>
                  <div className="flex justify-between flex-wrap text-xl mb-4">
                    <span className="w-[118px] text-[#868282]">Họ tên</span>
                    <span className="w-[220px] font-medium text-[black]">
                      : {item.firstName} {item.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between flex-wrap text-xl mb-4">
                    <span className="w-[118px] text-[#868282]">Điện thoại</span>
                    <span className="w-[220px] font-medium text-[black]">
                      : {item.phone}
                    </span>
                  </div>
                  <div className="flex justify-between flex-wrap text-xl mb-4">
                    <span className="w-[118px] text-[#868282]">Email</span>
                    <span className="w-[220px] font-medium text-[black]">
                      : {item.email}
                    </span>
                  </div>
                  <div className="flex justify-between flex-wrap text-xl mb-4">
                    <span className="w-[118px] text-[#868282]">Địa chỉ</span>
                    <span className="w-[220px] font-medium text-[black]">
                      : {item.address}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1">
                    <h4
                      onClick={() => {
                        setFormData(item);
                        setCurrentEditIndex(index);
                        setUpdateOpenModal(true);
                      }}
                      className="text-xl font-medium text-[black] cursor-pointer hover:text-[red] duration-300"
                    >
                      Chỉnh sửa
                    </h4>
                    <PopUpModal
                      isOpen={updateOpenModal}
                      onClose={onCloseUpdateModal}
                      formData={formData}
                      onChange={handleInputChange}
                      onSave={handleEditSave}
                      title="Chỉnh sửa địa chỉ"
                      saveLabel="Lưu thông tin"
                    />
                  </div>
                  <div
                    onClick={() => handleDelete(item)}
                    className="cursor-pointer"
                  >
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M6 6L18 18"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
