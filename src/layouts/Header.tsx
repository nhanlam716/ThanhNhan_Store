import React, { useEffect, useState } from "react";
import Logo from "../assets/image/logo_medium.webp";
import User from "../assets/image/icon-user.webp";
import Bag from "../assets/image/icon-bag.webp";
import { FloatingLabel } from "flowbite-react";
import { MENU } from "../constants/menu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../stores/slices/authSlices";
import { AppDispatch, RootState } from "../stores/store";
import { fetchCartItemsAPI } from "../stores/slices/cardSlices";
import { axiosClient } from "../api/axiosClient";
import { IProduct } from "../types/types";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { formatPrice } from "../utils/helper";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const cartItems = useSelector((state: RootState) => {
    return state.cartState.data;
  });
  const isRefetch = useSelector((state: RootState) => {
    return state.cartState.isRefetch;
  });

  const user = JSON.parse(localStorage.getItem("user") || "[]");
  useEffect(() => {
    if (user?.id) {
      const data = {
        userId: user?.id,
      };
      dispatch(fetchCartItemsAPI(data));
    }
  }, [dispatch, user?.id, isRefetch]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    localStorage.removeItem("user");
    setOpenModal(false);
  };

  const fetchSuggestions = async (input: string) => {
    if (!input.trim()) return setSuggestions([]);
    setIsLoading(true);
    try {
      const res: any = await axiosClient.get(
        `/productsCards?name_like=${input}`
      );
      setSuggestions(res);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery) {
        fetchSuggestions(searchQuery);
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate(`/search?query=${searchQuery}`);
    setSuggestions([]);
    setSearchQuery("");
  };

  // const handleSearch = async () => {
  //   if (!searchQuery.trim()) return;
  //   try {
  //     const res: any = await axiosClient.get(
  //       `/productsCards?name_like=${searchQuery}`
  //     );
  //     setSearchQuery(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   navigate(`/search?query=${searchQuery}`);
  //   setSearchQuery("");
  // };

  return (
    <header>
      <div className="mx-5 my-4">
        <div className="flex items-center">
          <div className="flex-1">
            <a href="./Header.tsx">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="flex-[2.5] relative">
            <FloatingLabel
              variant="filled"
              label="Bạn đang tìm kiếm ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <ul className="absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
                {isLoading ? (
                  <li className="px-4 py-2 text-gray-500">Đang tải...</li>
                ) : suggestions.length > 0 ? (
                  suggestions.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                      onClick={() => {
                        navigate(`/search?query=${item.name}`);
                        setSearchQuery("");
                        setSuggestions([]);
                      }}
                    >
                      <div>{item.name}</div>
                      <div className="flex items-center gap-14">
                        <span>{formatPrice(item.discountedPrice)}</span>
                        <img
                          className="w-24 h-20 mr-4 rounded"
                          src={item.image}
                          alt="ảnh sp"
                        />
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">Không có kết quả</li>
                )}
              </ul>
            )}
            <div className="absolute top-0 right-[2px]">
              <button onClick={handleSearch} className="px-5 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="28" y1="28" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-[0.5]">
            <div className="flex justify-center gap-4">
              <div className="relative group">
                <img width={28} src={User} alt="user" />
                {localStorage.getItem("user") ? (
                  <ul className="absolute top-full left-[-200%] z-50 w-36 bg-[#fff] border box-shadow border-top hidden group-hover:block">
                    <li className=" hover:bg-slate-100">
                      <Link
                        to="./account"
                        className="px-4 py-2 w-full block text-center hover:text-[red]"
                      >
                        Tài Khoản
                      </Link>
                    </li>
                    <li className=" hover:bg-slate-100">
                      <div
                        onClick={handleOpenModal}
                        className="px-4 py-2 w-full block text-center hover:text-[red] cursor-pointer"
                      >
                        Đăng Xuất
                      </div>
                      <Modal
                        show={openModal}
                        size="md"
                        onClose={() => setOpenModal(false)}
                        popup
                      >
                        <Modal.Header />
                        <Modal.Body>
                          <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                              Bạn có chắc chắn muốn đăng xuất ???
                            </h3>
                            <div className="flex justify-center gap-4">
                              <Button color="failure" onClick={handleLogout}>
                                Đồng ý
                              </Button>
                              <Button
                                color="gray"
                                onClick={() => setOpenModal(false)}
                              >
                                Từ chối
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </li>
                  </ul>
                ) : (
                  <ul className="absolute top-full left-[-200%] z-50 w-36 bg-[#fff] border box-shadow border-top hidden group-hover:block">
                    <li className=" hover:bg-slate-100">
                      <Link
                        to="./login"
                        className="px-4 py-2 w-full block text-center hover:text-[red]"
                      >
                        Đăng Nhập
                      </Link>
                    </li>
                    <li className=" hover:bg-slate-100">
                      <Link
                        to="./register"
                        className="px-4 py-2 w-full block text-center hover:text-[red]"
                      >
                        Đăng Kí
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative">
                {user && (
                  <Link to="./shopping">
                    <img width={28} src={Bag} alt="bag" />
                    <span className="absolute top-[-2px] right-[-4px] text-[10px] text-center w-4 h-4 leading-4 bg-[#c54934] text-[#fff] rounded-full">
                      {cartItems?.length}
                    </span>
                  </Link>
                )}
              </div>
              <div>
                <span className="uppercase cursor-pointer">eng</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <nav>
            <ul className="flex gap-4 uppercase font-bold text-sm tracking-tighter">
              {MENU.map((item) => (
                <li key={item.name} className="relative group/parent pb-2">
                  <Link
                    to={item.href!}
                    className="flex items-center w-full hover:text-[red]"
                  >
                    <span>{item.name}</span>
                    {item.children && (
                      <span className="ml-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                      </span>
                    )}
                  </Link>
                  {item.children && (
                    <ul className="absolute top-full left-[-15px] z-50 w-56 bg-[#fff] border box-shadow border-top hidden group-hover/parent:block">
                      {item.children.map((menu) => (
                        <li
                          key={menu.name}
                          className=" hover:bg-slate-200 cursor-pointer relative group/child "
                        >
                          <Link
                            to={menu.href!}
                            className="flex items-center justify-between w-full hover:text-[red] px-4 py-2"
                          >
                            <span>{menu.name}</span>
                            {menu.children && (
                              <span className="ml-1">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                >
                                  <path d="M10 7l5 5-5 5V7z" />
                                </svg>
                              </span>
                            )}
                          </Link>
                          {menu.children && (
                            <ul className="absolute top-0 left-full z-50 w-64 bg-[#fff] border box-shadow border-top hidden group-hover/child:block">
                              {menu.children.map((subItem) => (
                                <li
                                  key={subItem.name}
                                  className=" hover:bg-slate-100 cursor-pointer relative group"
                                >
                                  <Link
                                    to={subItem.href!}
                                    className="block w-full hover:text-[red] px-4 py-2"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
