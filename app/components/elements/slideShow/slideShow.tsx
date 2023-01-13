import { IProps } from "@interfaces/component";
import styled, { ThemeProvider, keyframes } from "styled-components";

interface ISlideShow extends IProps {
  duration?: number;
  direction?: string;
  gap?: number;
}

export default function SlideShow ({
  duration = 3000,
  direction = "left",
  children = null,
  gap = 40,
}: ISlideShow) {
  if(!children) {
    return null;
  }
  return (
    <ThemeProvider theme={{
      duration,
      direction,
      gap,
    }}>
      <SlideContent>
        <First>
          { children }
        </First>
        <Second>
          { children }
        </Second>
      </SlideContent>
    </ThemeProvider>
  );
};

const runLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const swapLeft = keyframes`
  0%,
  50% {
    left: 0%;
  }
  50.01%,
  100% {
    left: 100%;
  }
`;

const SlideContent = styled.div`
  position: relative;
  display: flex;
  gap: ${({ theme }) => `${theme.gap}px`};
  gap: ${({ theme }) => `${theme.gap}px`};
  animation: ${runLeft} ${({ theme }) => `${theme.duration}s`} linear infinite;
  animation-direction: ${({ theme }) => theme.direction === "left" ? "normal" : "reverse"};
`;

const First = styled.div`
  position: relative;
  left: 0%;
  display: flex;
  gap: ${({ theme }) => `${theme.gap}px`};
  animation: ${swapLeft} ${({ theme }) => `${theme.duration}s`} linear infinite;
  animation-direction: ${({ theme }) => theme.direction === "left" ? "normal" : "reverse"};
`;

const Second = styled.div`
  display: flex;
  gap: ${({ theme }) => `${theme.gap}px`};
  margin-right: 26px;
`;
