import { IProps, IVideo } from "@interfaces/component";
import { createContext, useState } from "react";

export const YtEmbedContext: any = createContext({
  currentVideo: "",
  setCurrentVideo: () => {},
});

export default function YtEmbedContextProvider(props: IProps) {
  const [ currentVideo,  setCurrentVideo ] = useState<IVideo>({
    id: "",
    name: "",
  });
  return (
    <YtEmbedContext.Provider
      value={{
        currentVideo,
        setCurrentVideo,
      }}
    >
      { props.children }
    </YtEmbedContext.Provider>
  );
}
