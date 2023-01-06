import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import GUMBALL_IMG from '@images/home/gumball.jpeg';
import YouTubePlayer from '../app/components/modules/common/youtube/youtubePlayer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slogan>
          <Image src={GUMBALL_IMG} width={150} alt="Love Gumball"/>
          <Intro>
            <h1 className="name">WJY</h1>
            <span>- A good boy.</span>
            <span>- A Frontend guy. </span>
            <span>- Love music.</span>
            <span>- Love guitar.</span>
            <span>- Like coding.</span>
          </Intro>
        </Slogan>
        <YouTubePlayer />
      </main>
    </>
  )
}

const Slogan = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    border-radius: 20px;
    transition-duration: 0.3s;
    &:hover {
      transition-duration: 0.3s;
      transform: rotate(-10deg);
    }
  }
`;

const Intro = styled.div`
  display: grid;
  gap: 8px;

  .name {
    font-size: 2rem;
    font-weight: bold;
  }

  span {
    position: relative;
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
  }
`;