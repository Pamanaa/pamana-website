import Image from "next/image";

const GalleryComponent = () => {
  return (
    <div className="mx-auto grid grid-cols-3 gap-6 w-10/12 h-10/12 mb-16">
      <div className="flex flex-col mt-9 space-y-32">
        <Image src="/images/gallery/1.png" alt="" className="rounded-xl border-2 border-light-brown object-cover max-h-60" width={500} height={300} />
        <Image src="/images/gallery/2.jpg" alt="" className="rounded-xl border-2 border-light-brown object-cover max-h-56" width={500} height={300} />
        <Image src="/images/gallery/3.jpg" alt="" className="rounded-xl border-2 border-light-brown object-cover" width={500} height={300} />
      </div>

      <div className="flex flex-col">
        <Image src="/images/gallery/4.jpg" alt="" className="rounded-xl border-2 border-light-brown object-cover max-h-80 mb-8" width={500} height={300} />
        <Image src="/images/gallery/5.jpg" alt="" className="rounded-xl border-2 border-light-brown object-cover min-h-72" width={500} height={300} />
        <Image src="/images/gallery/6.jpg" alt="" className="rounded-xl border-2 border-light-brown object-cover max-h-48 mt-36" width={500} height={300} />
      </div>

      <div className="flex flex-col mt-8 space-y-32">
        <Image src="/images/gallery/7.jpg" alt="" className="rounded-xl border-2 border-light-brown" width={500} height={300} />
        <Image src="/images/gallery/8.jpg" alt="" className="rounded-xl border-2 border-light-brown object-cover max-h-56" width={500} height={300} />
        <Image src="/images/gallery/9.jpg" alt="" className="rounded-xl border-2 border-light-brown object-cover object-right w-full h-full" width={500} height={300} />
      </div>
    </div>
  )
}

export default GalleryComponent;
