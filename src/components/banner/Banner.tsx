import React from "react";

interface IImage {
  image: string;
  width?: string;
  height?: string;
}
const Banner = ({ image, height, width }: IImage) => {
  return (
    <div className="max-w-6xl my-0 mx-auto">
      <a href="./Banner.tsx" className="block relative hover-zoom">
        <img src={image} alt="banner" width={width} height={height} />
      </a>
    </div>
  );
};

// const Banner = ({ image, height, width }: IImage) => {
//   return (
//     <div className="max-w-6xl mx-auto my-0">
//       <a href="./Banner.tsx" className="block relative overflow-hidden group">
//         <img
//           src={image}
//           alt="banner"
//           width={width}
//           height={height}
//           className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
//         />
//       </a>
//     </div>
//   );
// };

export default Banner;

// export default Banner;
