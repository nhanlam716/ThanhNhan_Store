import React from "react";

interface IButton {
  title?: string;
  width?: string;
  height?: string;
}

const Button = ({ title, height, width }: IButton) => {
  return (
    <div className="flex justify-center mt-16" style={{ width, height }}>
      <a
        href="./Button.tsx"
        className="relative inline-block px-6 py-2 font-semibold text-lg text-white transition-all duration-300 bg-black shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:shadow-lg hover:scale-105"
      >
        <span className="relative z-10 flex items-center justify-center space-x-2">
          <span className="block">{title}</span>
        </span>
        <span className="absolute inset-0 w-full h-full bg-black opacity-30 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></span>
      </a>
    </div>
  );
};

export default Button;
