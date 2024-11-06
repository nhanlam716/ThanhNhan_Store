import React from "react";

interface IButton {
  increase: string;
  decrease: string;
}

const ButtonQuantity = ({ decrease, increase }: IButton) => {
  return (
    <div>
      <div className="flex-1 flex items-center ">
        <button className="px-[16px] py-[6px] border border-gray-300 rounded text-2xl hover:bg-slate-400 hover:transition-all">
          {decrease}
        </button>
        <input
          className="w-14 h-8 leading-8 text-center border-none text-2xl font-semibold"
          defaultValue={1}
        />
        <button className="px-4 py-2 border border-gray-300 rounded text-lg hover:bg-slate-400 hover:transition-all">
          {increase}
        </button>
      </div>
    </div>
  );
};

export default ButtonQuantity;
