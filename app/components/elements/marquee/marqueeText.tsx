import { IProps } from "@interfaces/component";
import {
  useState,
} from "react";
import styled from "styled-components";

type ExtendProps = { movingSize: number };

const catalogListWidth = 140;
export default function MarqueeText ({ children }: IProps) {
  const [ movingSize, setMovingSize ] = useState(0);

  return (
    <MarqueeTextContainer
      movingSize={movingSize}
      onMouseEnter={(e) => {
        const eventElement = e.target as HTMLElement;
        if(eventElement) {
          if(eventElement.getBoundingClientRect().width >= catalogListWidth) {
            setMovingSize(eventElement.getBoundingClientRect().width - catalogListWidth);
          } else {
            setMovingSize(0);
          }
        }
      }}
    >
      { children }
    </MarqueeTextContainer>
  );
};

const MarqueeTextContainer = styled.div<ExtendProps>`
  position: absolute;
  width: 100%;
  left: 0px;
  white-space: nowrap;

  &:hover {
    left: ${({ movingSize }) => `-${movingSize}px`};
    transition-property: left;
    transition-duration: ${({ movingSize }) => `${Math.pow(movingSize, 1/6)}s`};
    transition-timing-function: linear;
  } 
`;
