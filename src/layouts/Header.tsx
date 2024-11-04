import React from "react";
import Logo from "../assets/image/logo_medium.webp";
import User from "../assets/image/icon-user.webp";
import Bag from "../assets/image/icon-bag.webp";
import { FloatingLabel } from "flowbite-react";
import { MENU } from "../constants/menu";
import { Link } from "react-router-dom";

const Header = () => {
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
            <FloatingLabel variant="filled" label="Bạn đang tìm kiếm ..." />
            <div className="absolute top-0 right-[2px]">
              <button className="px-5 py-3">
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
                <ul className="absolute top-full left-[-200%] z-50 w-36 bg-[#fff] border box-shadow border-top hidden group-hover:block">
                  <li className="mb-2 hover:bg-slate-100">
                    <Link
                      to="./login"
                      className="px-4 py-2 w-full block text-center hover:text-[red]"
                    >
                      Đăng nhập
                    </Link>
                  </li>
                  <li className=" hover:bg-slate-100">
                    <Link
                      to="./register"
                      className="px-4 py-2 w-full block text-center hover:text-[red]"
                    >
                      Đăng kí
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Link to="./shopping">
                  <img width={28} src={Bag} alt="bag" />
                  <span className="absolute top-[-2px] right-[-4px] text-[10px] text-center w-4 h-4 leading-4 bg-[#c54934] text-[#fff] rounded-full">
                    0
                  </span>
                </Link>
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
                    className="block w-full hover:text-[red]"
                  >
                    {item.name}
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
                            className="block w-full hover:text-[red] px-4 py-2"
                          >
                            {menu.name}
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
