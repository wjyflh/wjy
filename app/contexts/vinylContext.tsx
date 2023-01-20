import { IProps, VinylContextType,  } from "@interfaces/component";
import { Context, createContext, useState } from "react";


export const VinylContext = createContext<VinylContextType | null>(null);

const VinylContextProvider = (props: IProps) => {
  const [ isPlaying, setIsPlaying ] = useState<boolean>(false);

  return (
    <VinylContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
      }}
    >
      { props.children }
    </VinylContext.Provider>
  );
};

export default VinylContextProvider;