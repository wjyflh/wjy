import { ReactNode, useEffect, useState } from "react";
import Button from '@elements/button';
import styled from "styled-components";
import { createYoutubeEmbed, loadVideo, playVideo, stopVideo, randomSelectVideo } from "@libs/youtube.lib";


export default function YouTubePlayer() {
  const [ player, setPlayer ] = useState<YT.Player>();

  function handlePlay(): void {
    if(!player) return;
    playVideo(player);
  }

  function handleStop(): void {
    if(!player) return;
    stopVideo(player);
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
      <Button onClick={handlePlay}>Play</Button>
      <Button onClick={handleStop}>Stop</Button>
      <Button onClick={handleRandom}>Random</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 8px;
`

const YTPlayer = styled.div``;