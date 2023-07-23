import { RefObject, forwardRef } from "react";
import styled from "styled-components";

interface Props extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  ref: RefObject<HTMLVideoElement>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  controls?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  width?: string;
  height?: string;
  cover?: boolean;
}

type VideoProps = {
  width?: string;
  height?: string;
  cover?: boolean;
};

const Video = styled.video.withConfig({
  shouldForwardProp: (prop) => !["width", "height", "cover"].includes(prop),
})<VideoProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "460px"};
  object-fit: ${(props) => (props.cover ? "cover" : "contain")};
  cursor: pointer;
`;

const VideoPlayer = forwardRef<HTMLVideoElement, Props>(
  (
    {
      src,
      onMouseEnter,
      onMouseLeave,
      onClick,
      controls,
      muted,
      autoPlay,
      width,
      height,
      cover,
    },
    ref
  ) => {
    return (
      <Video
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        controls={controls}
        muted={muted}
        autoPlay={autoPlay}
        width={width}
        height={height}
        cover={cover}
      >
        <source src={src} type="video/mp4" />
      </Video>
    );
  }
);

Video.displayName = "VideoPlayer";

export default VideoPlayer;
