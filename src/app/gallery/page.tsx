import { Video } from "@/components";
import { GalleryComponent, GalleryWave } from "@/components/Gallery";
import { WaveImgs } from "@/utils/images";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <section>
        <Video
          src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          controls={true}
          autoplay={false}
          loop={false}
          muted={false}
        />
      </section>
      <section className="relative flex flex-col items-center justify-center">
        <div className="p-6 text-center">
          <h1 className="font-ephesis text-[70px]">Our Gallery</h1>
          <div className="h- text-light-brown mx-auto my-4 w-7/12 text-center leading-none dongle-h3-light">
            <p>
              Experience the beauty and tranquility of Pamana Resorts and Hotels
              through our gallery. From stunning sunsets by the water to
              exquisite dining experiences, our collection of images captures
              the essence of luxury and relaxation. Discover the serene
              landscapes, elegant accommodations, and exceptional amenities that
              await you.
            </p>
          </div>
        </div>
        <GalleryWave />
        <div className="absolute bottom-0">
          <Image
            src={WaveImgs[0]}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="h-40 w-screen"
            priority
          />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center p-6">
          <h1 className="text-center text-[50px]">
            <span className="font-ephesis">Explore </span>{" "}
            <span className="font-dongle">and </span>
            <span className="font-ephesis">imagine </span>{" "}
            <span className="font-dongle">your perfect getaway at Pamana.</span>
          </h1>
        </div>
        <GalleryComponent />
      </section>
    </>
  );
};

export default Gallery;
