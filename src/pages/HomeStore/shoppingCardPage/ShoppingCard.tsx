import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ButtonQuantity from "../../../components/button/ButtonQuantity";
import {
  CardItems,
  decreaseCartItem,
  // handleCheckOutCard,
  increaseCartItem,
  removedCartItem,
} from "../../../stores/slices/cardSlices";
import { AppDispatch, RootState } from "../../../stores/store";

const ShoppingCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector((state: RootState) => {
    return state.cartState.data;
  });

  const onRemoveCart = async (data: CardItems) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm ??")) {
      dispatch(removedCartItem(data));
    }
  };

  const onIncreaseCart = (item: CardItems) => {
    const data = { ...item, quantity: Number(item?.quantity) + 1 };
    dispatch(increaseCartItem(data));
  };

  const onDecreaseCart = (item: CardItems) => {
    if (item.quantity > 1) {
      const data = { ...item, quantity: Number(item?.quantity) - 1 };
      dispatch(decreaseCartItem(data));
    }
  };

  const totalMoney = (Items: CardItems[]) => {
    const resultWithReduce = Items.reduce((result, cart) => {
      const money = cart.quantity * cart.discountedPrice;
      result = result + money;
      return result;
    }, 0);
    return resultWithReduce;
  };

  // const handleCheckOut = () => {
  //   const data = { ...cartItems, totalMoney: totalMoney(cartItems) };
  //   dispatch(handleCheckOutCard(data));
  //   navigate("/checkout");
  // };

  const handleCheckOut = async () => {
    // const data = { checkout: cartItems, totalMoney: totalMoney(cartItems) };
    // const hasQuantityChanged = cartItems.some(
    //   (item, index) => item.quantity !== cartItems[index]?.quantity
    // );
    // try {
    //   if (hasQuantityChanged) {
    //     for (const item of cartItems) {
    //       await axiosClient.put(`/CheckoutProductCard/${item.id}`, data);
    //     }
    //     alert("Số lượng đã được cập nhật!");
    //   } else {
    //     await axiosClient.post("/CheckoutProductCard", data);
    //   }
    // } catch (error) {
    //   console.error("Xử lý thanh toán thất bại:", error);
    // }

    navigate("/checkout");
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto p-9">
          <div className="flex flex-col items-start md:flex-row p-4 ">
            <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b flex">
                    <th className="text-left p-2 flex-[8%]"></th>
                    <th className="text-left p-2 flex-[42%]">Sản phẩm</th>
                    <th className="text-right p-2 flex-[12%]">Đơn giá</th>
                    <th className="text-center p-2 flex-[24%]">Số lượng</th>
                    <th className="text-right p-2 flex-[14%]">Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems &&
                    cartItems.map((item: CardItems) => (
                      <tr
                        key={item?.id}
                        className="border-b flex items-center py-6"
                      >
                        <td className="flex-[8%] text-center flex justify-center cursor-pointer">
                          <div onClick={() => onRemoveCart(item)}>
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
                        </td>
                        <td className="flex-[42%] flex items-center p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 mr-4 rounded"
                          />
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-gray-500 text-sm">
                              Mã SP: {item.codeSP}
                            </p>
                            <p className="text-gray-500 text-sm">
                              Size: {item.size}
                            </p>
                          </div>
                        </td>
                        <td className="flex-[12%] text-right p-2 font-semibold">
                          {item.discountedPrice.toLocaleString()}₫
                        </td>
                        <td className="flex-[26%] text-center p-2">
                          <ButtonQuantity
                            increaseBtn="+"
                            decreaseBtn="-"
                            quantity={item.quantity}
                            onDecrease={() => onDecreaseCart(item)}
                            onIncrease={() => onIncreaseCart(item)}
                          />
                        </td>
                        <td className="flex-[12%] text-right p-2 font-semibold">
                          {(
                            item.discountedPrice * item.quantity
                          ).toLocaleString()}
                          ₫
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="p-6 pl-14">
                <Link
                  to="/"
                  className="flex items-center uppercase text-lg font-semibold opacity-80"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4L8 12L16 20"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  tiếp tục mua sắm
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-white p-6 mt-4 md:mt-0 md:ml-4 rounded-lg shadow-md">
              <div className="flex justify-between mb-6">
                <span className="text-gray-700 font-semibold">Thành tiền</span>
                <span className="text-red-500 font-semibold text-xl">
                  {totalMoney(cartItems).toLocaleString()} VND
                </span>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleCheckOut}
                  className=" bg-black text-white px-6 py-3 rounded w-full text-lg"
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
