import Image from "next/image";
const GalleryWave = () => {
  return (
    <>
        <div className="flex flex-row w-full mt-6 mb-14">
            <Image src="/images/gallery/left.png" alt="" className="w-1/3" width={500} height={300}/>
            <Image src="/images/gallery/center.png" alt="" className="w-1/3" width={500} height={300}/>
            <Image src="/images/gallery/right.png" alt="" className="w-1/3" width={500} height={300}/>
        </div>
    </>
)
}

export default GalleryWave