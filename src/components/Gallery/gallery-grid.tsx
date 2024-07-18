import Image from "next/image";
import first from "@/assets/images/gallery/1.png";
import second from "@/assets/images/gallery/2.jpg";
import third from "@/assets/images/gallery/3.jpg";
import fourth from "@/assets/images/gallery/4.jpg";
import fifth from "@/assets/images/gallery/5.jpg";
import sixth from "@/assets/images/gallery/6.jpg";
import seventh from "@/assets/images/gallery/7.jpg";
import eighth from "@/assets/images/gallery/8.jpg";
import ninth from "@/assets/images/gallery/9.jpg";

const GalleryComponent = () => {
  return (
    <div className="mx-auto grid grid-cols-3 gap-6 w-10/12 h-10/12 mb-16">
        <div className="flex flex-col mt-9 space-y-32">
            <Image src={first} alt="" className="rounded-xl border-2 border-light-brown object-cover max-h-60" />
            <Image src={second} alt="" className="rounded-xl border-2 border-light-brown object-cover max-h-56" />
            <Image src={third} alt="" className="rounded-xl border-2 border-light-brown object-cover" />
        </div>

        <div className="flex flex-col">
            <Image src={fourth} alt="" className="rounded-xl border-2 border-light-brown object-cover max-h-80 mb-8" />
            <Image src={fifth} alt="" className="rounded-xl border-2 border-light-brown object-cover min-h-72" />
            <Image src={sixth} alt="" className="rounded-xl border-2 border-light-brown object-cover max-h-48 mt-36" />
        </div>

        <div className="flex flex-col mt-8 space-y-32">
            <Image src={seventh} alt="" className="rounded-xl border-2 border-light-brown" />
            <Image src={eighth} alt="" className="rounded-xl border-2 border-light-brown object-cover max-h-56" />
            <Image src={ninth} alt="" className="rounded-xl border-2 border-light-brown object-cover object-right w-full h-full" />
        </div>
    </div>
  )
}

export default GalleryComponent