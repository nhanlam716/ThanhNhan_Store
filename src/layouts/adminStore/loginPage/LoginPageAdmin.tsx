import React from "react";
import { Outlet } from "react-router-dom";

const LoginPageAdmin = () => {
  return (
    <div className="flex h-[100vh]">
      <div className="flex-[60%]">
        <Outlet />
      </div>
      <div className="flex-[40%] ">
        <img
          src="https://instagram.fdad3-4.fna.fbcdn.net/v/t39.30808-6/451995992_18447025486006373_4835138524401615863_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdad3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=AC6VBC6fNn0Q7kNvgFjRDeQ&_nc_gid=0818313ce16c4479b5bed04538ce3b7a&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYDYy1fupVEoXy2JdplSY-Fw0BOTf2tO7USVumWeXCepRg&oe=67252DA5&_nc_sid=d885a2"
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default LoginPageAdmin;
