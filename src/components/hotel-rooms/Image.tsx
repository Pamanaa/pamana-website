// components/Image.tsx

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return <img src={src} alt={alt} className="room-image" />;
};

export default Image;
