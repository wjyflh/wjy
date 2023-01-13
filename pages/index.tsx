import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import YouTubePlayer from '../app/components/modules/common/youtube/youtubePlayer';
import MainLayout from '@layouts/main';
import Identify from '@elements/identify/identify';
import Copyright from '@elements/copyright/copyright';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>WJY | Jiang</title>
        <meta property="og:title" content="WJY | Jiang" />
        <meta property="og:image" content="/wjy_logo.jpg" />
        <meta property="og:description" content="I'm Jiang. A senior frontend guy, with music in mind." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slogan>
          <HoverEffect>
            <Identify/>
          </HoverEffect>
          <Intro>
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
          </Intro>
        </Slogan>
        <Copyright />
      </main>
    </MainLayout>
  )
}

const Slogan = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const HoverEffect = styled.div`
  transition-duration: 0.3s;
  &:hover {
    transition-duration: 0.3s;
    transform: rotate(-10deg);
  }
`;

const Intro = styled.div`
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