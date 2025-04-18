import Image from "next/image";
import { GalleryImgs } from "@/utils/images";

const GalleryComponent = () => {
  return (
    <div className="h-10/12 mx-auto mb-16 grid w-10/12 grid-cols-3 gap-6">
      <div className="mt-9 flex flex-col space-y-32">
        <Image
          src={GalleryImgs[0]}
          alt=""
          className="border-light-brown max-h-60 rounded-xl border-2 object-cover"
          width={500}
          height={300}
        />
        <Image
          src={GalleryImgs[1]}
          alt=""
          className="border-light-brown max-h-56 rounded-xl border-2 object-cover"
          width={500}
          height={300}
        />
        <Image
          src={GalleryImgs[2]}
          alt=""
          className="border-light-brown rounded-xl border-2 object-cover"
          width={500}
          height={300}
        />
      </div>

      <div className="flex flex-col">
        <Image
          src={GalleryImgs[3]}
          alt=""
          className="border-light-brown mb-8 max-h-80 rounded-xl border-2 object-cover"
          width={500}
          height={300}
        />
        <Image
          src={GalleryImgs[4]}
          alt=""
          className="border-light-brown min-h-72 rounded-xl border-2 object-cover"
          width={500}
          height={300}
        />
        <Image
          src={GalleryImgs[5]}
          alt=""
          className="border-light-brown mt-36 max-h-48 rounded-xl border-2 object-cover"
          width={500}
          height={300}
        />
      </div>

      <div className="mt-8 flex flex-col space-y-32">
        <Image
          src={GalleryImgs[6]}
          alt=""
          className="border-light-brown rounded-xl border-2"
          width={500}
          height={300}
        />
        <Image
          src={GalleryImgs[7]}
          alt=""
          className="border-light-brown max-h-56 rounded-xl border-2 object-cover"
          width={500}
          height={300}
        />
        <Image
          src={GalleryImgs[8]}
          alt=""
          className="border-light-brown h-full w-full rounded-xl border-2 object-cover object-right"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default GalleryComponent;
