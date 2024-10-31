import { Carousel } from "flowbite-react";
import slider1 from "../../../../assets/image/slideshow_1.webp";
import slider2 from "../../../../assets/image/slideshow_2.webp";
import slider3 from "../../../../assets/image/slideshow_3.webp";
import slider4 from "../../../../assets/image/slideshow_4.webp";
import slider5 from "../../../../assets/image/slideshow_5.webp";
const Carrousel = () => {
  return (
    <div className="h-[39rem]">
      <Carousel>
        <img src={slider1} alt="..." />
        <img src={slider2} alt="..." />
        <img src={slider3} alt="..." />
        <img src={slider4} alt="..." />
        <img src={slider5} alt="..." />
      </Carousel>
    </div>
  );
};

export default Carrousel;
