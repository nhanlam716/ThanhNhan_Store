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

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleLogout = () => {
    if (window.confirm("bạn có chắc chắn muốn đăng xuất ??")) {
      dispatch(logout());
      navigate("/");
      localStorage.removeItem("user");
    }
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    // try {
    //   const res: any = await axiosClient.get(
    //     `/productsCards?name_like=${searchQuery}`
    //   );
    //   setSearchQuery(res);
    // } catch (error) {
    //   console.log(error);
    // }
    navigate(`/search?query=${searchQuery}`);
    setSearchQuery("");
  };

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
                        onClick={handleLogout}
                        className="px-4 py-2 w-full block text-center hover:text-[red] cursor-pointer"
                      >
                        Đăng Xuất
                      </div>
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
