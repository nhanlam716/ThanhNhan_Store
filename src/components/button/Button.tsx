import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center mt-16">
      <a
        href="./Button.tsx"
        className="relative inline-block px-6 py-2 rounded-full font-semibold text-lg text-white transition-all duration-300 bg-black shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:shadow-lg hover:scale-105"
      >
        <span className="relative z-10 flex items-center justify-center space-x-2">
          <span className="block">Xem thêm</span>
          <svg
            className="w-5 h-5 text-white transition-transform duration-300 transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
        <span className="absolute inset-0 w-full h-full rounded-full bg-black opacity-30 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></span>
      </a>
    </div>
  );
};

export default Button;
