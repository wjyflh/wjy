import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import YouTubePlayer from '../app/components/modules/common/youtube/youtubePlayer';
import MainLayout from '@layouts/main';
import Identify from '@elements/identify/identify';
import Copyright from '@elements/copyright/copyright';
import YtEmbedContextProvider from '@contexts/YTembedContext';
import Intro from '@modules/homepage/intro';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>WJY | Jiang</title>
        <meta property="og:title" content="WJY | Jiang" />
        <meta property="og:site_name" content="WJY | Jiang" />
        <meta property="og:url" content="https://www.wjy.rocks/" />
        <meta property="og:description" content="I'm Jiang. A senior frontend guy, with music in mind." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/wjy_logo.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slogan>
          <HoverEffect>
            <Identify/>
          </HoverEffect>
          <YtEmbedContextProvider>
            <Intro />
          </YtEmbedContextProvider>
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
