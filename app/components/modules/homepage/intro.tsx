import YouTubePlayer from "@modules/common/youtube/youtubePlayer";
import styled, { css, keyframes } from "styled-components";
import Identify from '@elements/identify/identify';
import { useContext } from "react";
import VinylContextProvider, { VinylContext } from "@contexts/vinylContext";
import { VinylContextType } from "@interfaces/component";
import flashingIMG from "@images/home/vinyl/noise.gif";
import Image from "next/image";

export default function Intro() {
  return (
    <Wrapper>
      <div className="name">
        <span>{`I'm `}</span>
        <h1><i>Jiang.</i></h1>
      </div>
      <VinylContextProvider>
        <IntroContent>
          <IntroList>
            <UnderLineDeco>A Frontend guy.</UnderLineDeco>
            <UnderLineDeco>A music lover.</UnderLineDeco>
            <UnderLineDeco>A guitar lover.</UnderLineDeco>
            <UnderLineDeco>Like coding.</UnderLineDeco>
          </IntroList>
          <Vinyl />
        </IntroContent>
      </VinylContextProvider>
    </Wrapper>
  );
}

const Vinyl = () => {
  const {
    isPlaying,
  } = useContext(VinylContext) as VinylContextType;

  return (
    <VinylMachine>
      <ReadingPinWrapper isPlaying={isPlaying}>
        <div className="switcher">
          <div className="stand">
            <div className="head"></div>
            <div className="pipe-1">
              <div className="pipe-2">
                <div className="pin-head"></div>
              </div>
            </div>
          </div>
        </div>
      </ReadingPinWrapper>
      <VinylWrapper>
        <VinylCentral isPlaying={isPlaying}>
          <Identify size={50} />
        </VinylCentral>
        <Flashing>
          <Lighting src={flashingIMG.src} alt="" isPlaying={isPlaying}/>
          <Lighting src={flashingIMG.src} alt="" isPlaying={isPlaying}/>
        </Flashing>
      </VinylWrapper>
      <Controller>
        <YouTubePlayer />
      </Controller>
    </VinylMachine>
  );
};

const VinylRotateKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const VinylShackingKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(2deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .name {
    font-size: 2rem;
    font-weight: 900;
    white-space: nowrap;
    text-align: right;

    h1 {
      display: inline-block;
    }
  }
`;

const IntroContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 2;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const IntroList = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

const UnderLineDeco = styled.span`
  position: relative;
  width: fit-content;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  cursor: default;
  color: #fff;
  background: #000;
  transform: skewX(-20deg) rotate(-20deg);
  padding: 0px 10px;

  @media screen and (max-width: 576px) {
    transform: skewX(0deg) rotate(0deg);
    gap: 8px;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: -4px;
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

const VinylMachine = styled.div`
  position: relative;
  width: 350px;
  height: 300px;
  display: flex;
  align-items: center;
  background: #F00;
  border-radius: 60px 10px 10px 10px;
  transform-origin: center;
  /* transform: scale(0.9); */
`;

const VinylWrapper = styled.div`
  position: absolute;
  left: 20px;
  border-radius: 50%;
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  transform-origin: center;
`;

const VinylCentral = styled.div<{isPlaying: boolean}>`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ECD000;
  z-index: 1;

  ${(props) => props.isPlaying ? css`
    animation: ${VinylRotateKeyframes} 10s linear infinite;
  `: css`
    animation: ${VinylRotateKeyframes} 0s linear infinite;
  `}
`;

const Flashing = styled.div`
  position: absolute;
  width: 260px;
  display: flex;
  justify-content: space-between;
  transform: rotate(-20deg);
  z-index: 0;
`;

const Lighting = styled.img<{ isPlaying: boolean }>`
  width: 45%;
  height: 150px;
  border-radius: 100%;
  transition-duration: 3s;
  transition-timing-function: ease-in;

  ${(props) => props.isPlaying ? css`
    opacity: 1;
  `: css`
    opacity: 0;
  `}
`;

const ReadingPinWrapper = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  top: 20px;
  right: 20px;

  .switcher {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    transform-origin: 50% 0%;
    transition-duration: 3s;

    ${(props) => props.isPlaying ? css`
      transform: rotate(20deg);
    `: css`
      transform: rotate(-5deg);
    `}
  }

  .stand {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #333;

    ${(props) => props.isPlaying ? css`
      animation: ${VinylShackingKeyframes} 3s ease-in-out infinite;
    `: css`
      animation: none;
    `}
  }

  .pipe-1 {
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 10px;
    width: 10px;
    height: 100px;
    background: #ccc;

    .pipe-2 {
      position: absolute;
      top: calc(100% - 10px);
      left: 2px;
      width: 10px;
      height: 100px;
      background: #ccc;
      transform-origin: 50% 0%;
      transform: rotate(20deg);
      border-radius: 10px;

      .pin-head {
        position: absolute;
        bottom: 0px;
        left: -5px;
        width: 20px;
        height: 40px;
        background: #333;
      }
    }
  }
`;

const Controller = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 20px;
  border: 2px solid #000;
  overflow: hidden;
  background: #fff;
`;