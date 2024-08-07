import Image, { StaticImageData } from "next/image";

interface ReviewProps {
  review: string;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="h-[300px] w-[450px] rounded-3xl bg-white shadow-2xl">
      <h1 className="ml-[20px]">"</h1>
      <p className="-mt-11 ml-[40px] mr-[40px] text-center leading-none 2xl:text-[38px]">
        {review}
      </p>
      <h1 className="-mt-5 ml-[365px]">"</h1>
      <div className="-mt-14 flex justify-center">
        <i className="h-12 w-12">&#9733;</i>
        <i className="h-12 w-12">&#9733;</i>
        <i className="h-12 w-12">&#9733;</i>
        <i className="h-12 w-12">&#9733;</i>
        <i className="h-12 w-12">&#9733;</i>
      </div>
    </div>
  );
};

export default Review;
