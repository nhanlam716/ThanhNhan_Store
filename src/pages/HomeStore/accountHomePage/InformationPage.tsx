import { Button } from "flowbite-react";

const InformationPage = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-6xl my-0 mx-auto">
        <div className="pb-8 flex justify-between">
          <div>
            <h2 className="text-3xl font-medium">Địa chỉ</h2>
          </div>
          <div>
            <Button outline gradientDuoTone="greenToBlue">
              Thêm địa chỉ mới
            </Button>
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
                  <h4 className="text-xl font-medium text-[black] cursor-pointer hover:text-[red] duration-300">
                    Chỉnh sửa
                  </h4>
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
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
