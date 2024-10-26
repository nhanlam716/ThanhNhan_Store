import React from "react";
import { ADDRESS, IMAGE_FOOTER, POLICY } from "../constants/footer";

const Footer = () => {
  return (
    <footer className="mt-40">
      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 py-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-left relative">
              <h2 className="font-semibold text-xl mb-8 text-gray-900 uppercase footerAfter">
                chính sách
              </h2>
              <ul className="space-y-2 text-gray-700">
                {POLICY.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-red-600 transition-colors duration-200 pb-2 tracking-tighter leading-[20px]"
                  >
                    <a href="./Footer.tsx">{item}</a>
                  </li>
                ))}
              </ul>
              <a href="./Footer.tsx">
                <img
                  src="https://theme.hstatic.net/200000278317/1000929405/14/logo-bct.png?v=1886"
                  alt="logo"
                />
              </a>
            </div>
            <div className="text-left relative">
              <h2 className="font-semibold text-xl mb-8 text-gray-900 uppercase footerAfter">
                về thf
              </h2>
              <ul className="space-y-2 text-gray-700">
                {ADDRESS.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-red-700 transition-colors duration-200 pb-2 tracking-tighter leading-[20px]"
                  >
                    <a href="./Footer.tsx">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-8 relative">
            <h4 className="font-semibold text-xl mb-8 text-gray-900 uppercase footerAfter">
              facebook
            </h4>
            <div className="relative w-full h-32 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://web.facebook.com/v2.0/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfe6da490c2df68473%26domain%3Dthanhhungfutsal.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fthanhhungfutsal.com%252Ff6252f01aa3f48d09%26relation%3Dparent.parent&container_width=354&height=70&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fthanhhungfutsal%2F&locale=en_US&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width="
                title="Facebook Page"
                className="border-none overflow-hidden w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
          <div className="relative">
            <h4 className="font-semibold text-xl mb-8 text-gray-900 uppercase footerAfter">
              instagram
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {IMAGE_FOOTER.map((imgUrl, index) => (
                <a href="https://www.instagram.com/thanhhungfutsal/">
                  <img
                    key={index}
                    className="w-full h-24 object-cover rounded-lg shadow-sm"
                    src={imgUrl}
                    alt={`Instagram ${index + 1}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 py-4">
          <div className="container mx-auto text-center text-gray-600">
            <p>THANH HÙNG FUTSAL | GIÀY ĐÁ BÓNG CHÍNH HÃNG</p>
            <p>MỞ CỬA TỪ 9h-21h</p>
            <p>© Bản quyền thuộc về THANH HÙNG FUTSAL.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
