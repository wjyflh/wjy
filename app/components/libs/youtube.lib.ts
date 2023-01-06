import { IVideo } from "../../types/component";

let targetPlayer: YT.Player;
let videos: IVideo[] = [
  {
    id: "jfKfPfyJRdk",
    name: "Logi Girl - lofi hip hop radio - beats to relax/study to"
  }, // lofi girl
  {
    id: "qH3fETPsqXU",
    name: "Chill with Taiki - 【24/7 CHILL LOFI HIP HOP RADIO】beats to sleep/relax/study to"
  }, // Chill with Taiki
  {
    id: "Dx5qFachd3A", 
    name: "Relaxing Jazz Piano Radio - Slow Jazz Music - 24/7 Live Stream - Music For Work & Study",
  }, // Cafe Music BGM channel
  {
    id: "tNkZsRW7h2c",
    name: "Space Ambient Music LIVE 24/7: Space Traveling Background Music, Music for Stress Relief, Dreaming",
  } // Relaxation Ambient Music
];

function createYoutubeEmbed(id: string) {
  if(typeof window === "undefined") return null;

  if(!window.YT) {
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
  
    if(firstScriptTag?.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }
}

function randomGetVideoId (): IVideo[] {
  return videos[Math.floor(Math.random() * 4)];
}

function loadVideo (onReadyCb: Function): YT.Player {
  const player: YT.Player = new window.YT.Player("player", {
    height: '0',
    width: '0',
    videoId: "jfKfPfyJRdk",
    events: {
      onReady(event: YT.PlayerEvent) {
        onReadyCb(event.target);
        playVideo(event.target);
      },
    },
  })

  return player;
}

function playVideo (player: YT.Player) {
    player.mute()
    player.playVideo();
    let timeoutId = setTimeout(() => {
      player.unMute()
    }, 0);
}

function stopVideo (player: YT.Player) {
  player.stopVideo();
}

function randomSelectVideo (player: YT.Player) {
  let videoId = randomGetVideoId();
  player.loadVideoById(videoId);
}
// function onPlayerReady(event: YT.PlayerEvent) {
//   const targetPlayer: YT.Player = event.target;
  
  // playBtn.addEventListener('click', function() {
  //   video.mute().playVideo();
  //   timeoutId = setTimeout(() => {
  //     video.unMute()
  //   }, 0);
  // });
  
  // stopBtn.addEventListener('click',function() {
  //   video.stopVideo();
  //   timeoutId = null;
  // });

  // switchBtn.addEventListener('click',function() {
  //   let videoId = randomGetVideoId();
  //   video.loadVideoById(videoId);
  // });
// }


export {
  createYoutubeEmbed,
  loadVideo,
  randomGetVideoId,
  playVideo,
  stopVideo,
  randomSelectVideo,
}
