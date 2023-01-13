import { ReactNode, useEffect, useState } from "react";
import Button from '@elements/button';
import styled, { keyframes } from "styled-components";
import { createYoutubeEmbed, loadVideo, playVideo, stopVideo, randomSelectVideo } from "@libs/youtube.lib";
import { MdAudiotrack, MdPauseCircle } from "react-icons/md";
import { TbArrowsRandom } from "react-icons/tb";
import CdGif from "@images/icons/cd.gif";
import Image from "next/image";

export default function YouTubePlayer() {
  const [ player, setPlayer ] = useState<YT.Player>();
  const [ isPaused, setIsPaused ] = useState(true);

  function handlePlay(): void {
    if(!player) return;
    playVideo(player);
    setIsPaused(false);
  }

  function handleStop(): void {
    if(!player) return;
    stopVideo(player);
    setIsPaused(true);
  }

  function handleRandom(): void {
    if(!player) return;
    randomSelectVideo(player);
  }

  useEffect(() => {
    createYoutubeEmbed("player");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      loadVideo((player: YT.Player) => {
        setPlayer(player)
      });
    }, 500);
  }, []);
  
  return (
    <Wrapper>
      <YTPlayer id="player"/>
      <Button onClick={() => {
        return isPaused ? handlePlay() : handleStop();
      }}>
        {
          isPaused
            ? <MdAudiotrack /> 
            : <StyledeImage width={20} src={CdGif} alt="CD playing gif" />
        }
      </Button>
      <Button onClick={handleRandom}>
        <TbArrowsRandom />
      </Button>
    </Wrapper>
  );
}

const rotateForever = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  border: 1px solid #000;
`

const YTPlayer = styled.div``;

const StyledeImage = styled(Image)`
  animation: ${rotateForever} 5s linear infinite;
`;