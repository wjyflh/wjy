import { YtEmbedContext } from "@contexts/YTembedContext";
import MarqueeText from "@elements/marquee/marqueeText";
import YouTubePlayer from "@modules/common/youtube/youtubePlayer";
import { useContext } from "react";
import styled from "styled-components";

export default function Intro() {
  return (
    <Wrapper>
      <div className="name">
        <span>{`I'm `}</span>
        <h1>Jiang.</h1>
      </div>
      <UnderLineDeco>- A Frontend guy. </UnderLineDeco>
      <UnderLineDeco>
        - A music lover.
        <YouTubePlayer />
      </UnderLineDeco>
      <UnderLineDeco>- A guitar lover.</UnderLineDeco>
      <UnderLineDeco>- Like coding.</UnderLineDeco>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 8px;

  .name {
    font-size: 2rem;
    font-weight: bold;
    white-space: nowrap;

    h1 {
      display: inline-block;
    }
  }
`;

const UnderLineDeco = styled.span`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: default;

  &:before {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 0%;
    height: 1px;
    background: #333;
    transition-duration: 0.3s;
  }

  &:hover {
    &:before {
      width: 100%;
      transition-duration: 0.3s;
    }  
  }
`;