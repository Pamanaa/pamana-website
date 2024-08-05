import React from "react";

type Props = {
  src: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
};

const Video = ({
  src,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
}: Props) => {
  return (
    <>
      <video
        className="h-[641px] w-full"
        src={src}
        autoPlay={autoplay}
        controls={controls}
        loop={loop}
        muted={muted}
      />
    </>
  );
};

export default Video;
