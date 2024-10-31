import { useNavigate } from "react-router-dom";

interface IImage {
  id?: string;
  image?: string;
  description?: string;
}
const Banner = ({ id, image, description }: IImage) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl my-0 mx-auto">
      <div className="flex flex-col items-center justify-center gap-[6px]">
        <div
          onClick={() => navigate(`/bannerPage/${id}`)}
          className="block relative hover-zoom cursor-pointer"
        >
          <img src={image} alt="banner" className="mb-1" />
          <span className="text-[#288ad6] text-lg">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
