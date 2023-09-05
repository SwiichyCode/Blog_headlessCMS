import { RefObject, forwardRef } from "react";
import { usePathname } from "next/navigation";
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
  pathname?: string;
};

const Video = styled.video.withConfig({
  shouldForwardProp: (prop) =>
    !["width", "height", "cover", "pathname"].includes(prop),
})<VideoProps>`
  max-width: ${(props) => (props.pathname === "/" ? "100%" : "413px")};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "460px"};
  object-fit: ${(props) => (props.cover ? "cover" : "contain")};
  cursor: pointer;
`;

const VideoPlayer = forwardRef<HTMLVideoElement, Props>(function VideoPlayer(
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
) {
  const pathname = usePathname();
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
      pathname={pathname}
    >
      <source src={src} type="video/mp4" />
    </Video>
  );
});

export default VideoPlayer;
