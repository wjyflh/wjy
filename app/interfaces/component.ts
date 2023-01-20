import { ReactNode } from "react"
export interface IVideo {
  id: string;
  name: string;
}

export interface IVideos extends Array<IVideo>{}

export interface IProps {
  children: ReactNode;
  onClick?: () => void
}

export type VinylContextType = {
  isPlaying: boolean,
  setIsPlaying: (isPlaying: boolean) => void,
}