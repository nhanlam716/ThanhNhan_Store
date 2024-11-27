import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";
import { formatPrice } from "../../../../utils/helper";
import InputCheckOut from "../../../../components/inputForm/InputCheckOut";
import { Button } from "flowbite-react";
import { CardItems } from "../../../../stores/slices/cardSlices";

interface IShippingFee {
  shippingFee?: number | string;
}

const TotalCheckout = ({ shippingFee }: IShippingFee) => {
  const cartItems = useSelector((state: RootState) => {
    return state.cartState.data;
  });

  const totalMoney = (Items: CardItems[]) => {
    const resultWithReduce = Items.reduce((result, cart) => {
      const money = cart.quantity * cart.discountedPrice;
      result = result + money;
      return result;
    }, 0);
    return resultWithReduce;
  };

  const caculateTotal = () => {
    const subTotal = totalMoney(cartItems);
    const shipping = Number(shippingFee) || 0;
    return subTotal + shipping;
  };

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id} className="flex mb-4 relative">
          <img src={item.image} alt="" className="w-16 h-16 rounded-md" />
          <span className="absolute top-[-6px] left-[53px] text-[10px] text-center w-4 h-4 leading-4 bg-[#c54934] text-[#fff] rounded-full">
            {item.quantity}
          </span>
          <div className="ml-4">
            <p className="font-normal leading-[119%]">
              {item.name} - {item.codeSP} - {item.color}
            </p>
            <p className="text-gray-500">{item.size}</p>
          </div>
          <div className="ml-6 flex items-center">
            <p className="font-semibold opacity-85">
              {formatPrice(item.discountedPrice)}
            </p>
          </div>
        </div>
      ))}
      <div className="border-t py-6">
        <div className="flex gap-4">
          <div className="flex-[75%]">
            <InputCheckOut placeholder="Mã giảm giá" types="text" />
          </div>
          <div className="flex-[25%]">
            <Button color="blue">Sử dụng</Button>
          </div>
        </div>
      </div>
      <div className="mt-4 px-0 py-7 border-t border-b border-solid border-[#ccc]">
        <div className="flex justify-between">
          <span className="text-gray-500">Tạm tính</span>
          <span>{totalMoney(cartItems).toLocaleString()} ₫</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Phí vận chuyển</span>
          <span>{shippingFee}</span>
        </div>
      </div>
      <div className="flex justify-between text-xl font-semibold mt-6">
        <span>Tổng cộng</span>
        <span>{caculateTotal().toLocaleString()} VND</span>
      </div>
    </div>
  );
};

export default TotalCheckout;
