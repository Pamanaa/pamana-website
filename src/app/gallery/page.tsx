import { GalleryComponent, GalleryWave } from "@/components/Gallery";

const Gallery = () => {
  return (
    <> 
    <section>
      {/* insert video */}
    </section>
    <section className="flex-col flex justify-center items-center">
      <div className="text-center p-6">
        <h1 className="text-[70px] font-ephesis">
          Our Gallery
        </h1>
        <div className="w-7/12 h- mx-auto text-center dongle-h3-light text-light-brown leading-none my-4">
          <p>
            Experience the beauty and tranquility of Pamana Resorts and Hotels through our gallery.
            From stunning sunsets by the water to exquisite dining experiences,
            our collection of images captures the essence of luxury and relaxation.
            Discover the serene landscapes, elegant accommodations, and exceptional amenities
            that await you.
          </p>
        </div>
      </div>
      <GalleryWave />
    </section>

    <section>
      <div className="flex justify-center items-center p-6">
        <h1 className="text-center text-[50px]">
        <span className="font-ephesis">Explore </span> <span className="font-dongle">and </span> 
        <span className="font-ephesis">imagine </span> <span className="font-dongle">your perfect getaway at Pamana.</span>
        </h1>
      </div>
      <GalleryComponent />
    </section>
    </>
  );
};

export default Gallery;
