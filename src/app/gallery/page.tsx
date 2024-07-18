import GalleryComponent from "../../components/Gallery/gallery-grid";
import Image from "next/image";

const Gallery = () => {
  return (
    <> 
      <div className="flex justify-center items-center p-6">
        <h1 className="text-center text-[50px]">
        <span className="font-ephesis">Explore </span> <span className="font-dongle">and </span> 
        <span className="font-ephesis">imagine </span> <span className="font-dongle">your perfect getaway at Pamana.</span>
        </h1>
      </div>
      <GalleryComponent />
    </>
  );
};

export default Gallery;
