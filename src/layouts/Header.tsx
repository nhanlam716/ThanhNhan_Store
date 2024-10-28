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
          <div className="flex-[2.5]">
            <FloatingLabel variant="filled" label="Bạn đang tìm kiếm ..." />
          </div>
          <div className="flex-[0.5]">
            <div className="flex justify-center gap-4">
              <div className="relative group">
                <img width={28} src={User} alt="user" />
                <ul className="absolute top-full left-[-200%] z-50 w-36 bg-[#fff] border box-shadow border-top hidden group-hover:block">
                  <li className="px-4 py-2 mb-2 hover:bg-slate-100">
                    <Link to="./login" className="hover:block hover:text-[red]">
                      Đăng nhập
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-slate-100">
                    <Link
                      to="./register"
                      className="hover:block hover:text-[red]"
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
            <ul className="flex gap-5 uppercase font-medium text-sm">
              {MENU.map((item) => (
                <li key={item.name} className="relative group">
                  <Link to="/" className="hover:block hover:text-[red]">
                    {item.name}
                  </Link>
                  {item.children && (
                    <ul className="absolute top-full left-[-15px] z-50 w-64 bg-[#fff] border box-shadow border-top hidden group-hover:block">
                      {item.children.map((menu) => (
                        <li
                          key={menu.name}
                          className="px-4 py-2 hover:bg-slate-100 cursor-pointer relative group hover:text-[red]"
                        >
                          <Link to="/" className="hover:block ">
                            {menu.name}
                          </Link>
                          {menu.children && (
                            <ul className="absolute top-0 left-full z-50 w-64 bg-[#fff] border box-shadow border-top hidden group-hover:block">
                              {menu.children.map((subItem) => (
                                <li
                                  key={subItem.name}
                                  className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                                >
                                  <Link to="/" className="hover:block">
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
