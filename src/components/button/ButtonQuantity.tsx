import React from "react";

interface IButton {
  increaseBtn: string;
  decreaseBtn: string;
  quantity: number;
  // setQuantity: React.Dispatch<React.SetStateAction<number>>;
  onIncrease: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDecrease: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonQuantity = ({
  decreaseBtn,
  increaseBtn,
  quantity,
  onDecrease,
  onIncrease,
}: IButton) => {
  // const increase = () => setQuantity((prev) => prev + 1);
  // const decrease = () => setQuantity((prev) => Math.max(prev - 1, 1));
  return (
    <div>
      <div className="flex-1 flex items-center ">
        <button
          onClick={onDecrease}
          className="px-[16px] py-[6px] border border-gray-300 rounded text-2xl hover:bg-slate-400 hover:transition-all"
        >
          {decreaseBtn}
        </button>
        <span className="w-14 h-8 leading-8 text-center border-none text-2xl font-semibold">
          {quantity}
        </span>
        <button
          onClick={onIncrease}
          className="px-4 py-2 border border-gray-300 rounded text-lg hover:bg-slate-400 hover:transition-all"
        >
          {increaseBtn}
        </button>
      </div>
    </div>
  );
};

export default ButtonQuantity;
