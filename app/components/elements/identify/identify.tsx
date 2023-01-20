import Link from "next/link"
import React from "react"
import styled, { ThemeProvider, keyframes } from "styled-components"

const Identify = ({
  size = 100,
}) => {
  return (
    <ThemeProvider theme={{
      size,
    }}>
      <Link href="/">
        <IdentifyStyle>
          <div className="floater">
            <div className="author-lastname">
              <span className="zh">W</span>
            </div>
            <div className="author-firstname">
              <span className="zh">J</span>
            </div>
            <div className="author-firstname second">
              <span className="zh">Y</span>
            </div>
          </div>
        </IdentifyStyle>
      </Link>
    </ThemeProvider>
  )
}

export default Identify;

const identifyFlip = keyframes`
  0% {
    transform: rotateY(0deg);
  }

  100% {    
    transform: rotateY(1440deg);
  }
`

const cornerMove = keyframes`
  0% {
    right: 0px;
    bottom: 0px;
  }

  50% {
    width: 0px;
    height: 0px;
    right: -5px;
    bottom: -5px;
  }

  100% {
    right: 0px;
    bottom: 0px;
  }
`

const IdentifyStyle = styled.div<{ theme: { size: number } }>`
  border-radius: ${({ theme }) => theme.size ? `${theme.size / 10}px ${theme.size / 10}px 0px ${theme.size / 10}px` : ""};
  position: relative;
  width: ${({ theme }) => theme.size ? `${theme.size}px` : ""};
  height: ${({ theme }) => theme.size ? `${theme.size}px` : ""};
  font-size: ${({ theme }) => theme.size ? `${theme.size * 0.14}px` : ""};
  font-weight: 700;
  z-index: 1;
  background: #000; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${({ theme }) => theme.size / 10 ? `${theme.size / 10}px` : ""};;
  border-radius: ${({ theme }) => theme.size ? `0px 0px ${theme.size / 10}px 0px` : ""};
  cursor: pointer;
  transform-origin: center;
  perspective-origin: center center;
  perspective: 500px;

  &.roll-enter {
    opacity: 1;
  }
  &.roll-enter-active {
    opacity: 1;
  }
  &.roll-enter-done {
    opacity: 1;
  }

  &.roll-exit {
    opacity: 1;
  }
  &.roll-exit-active {
    opacity: 0;
  }
  &.roll-exit-done {
    opacity: 0;
  }

  &.roll-appear {
    transform: rotate(180deg);
  }
  &.roll-appear-active {
    transform: rotate(360deg);
  }
  &.roll-appear-done {
    transform: rotate(540deg);
  }

  .floater {
    transform-style: preserve-3d;
    animation: ${identifyFlip} 20s forwards linear infinite;
  }

  &:before {
    content: "";
    position: absolute;
    float: right;
    left: ${({ theme }) => theme.size  ? `${theme.size * 0.65}px` : ""};
    top: ${({ theme }) => theme.size ? `${theme.size * 0.65}px` : ""};
    width: ${({ theme }) => theme.size ? `${theme.size * 0.3}px` : ""};
    height: ${({ theme }) => theme.size ? `${theme.size * 0.3}px` : ""};
    border-right: ${({ theme }) => theme.size ? `${theme.size * 0.02}px solid #fff` : ""};
    border-bottom: ${({ theme }) => theme.size ? `${theme.size * 0.02}px solid #fff` : ""};
    border-radius: ${({ theme }) => theme.size  ? `0px 0px ${theme.size / 10}px 0px` : ""};
    animation: ${cornerMove} 2s forwards ease-out;
  }

  .author-lastname,
  .author-firstname {
    width: ${({ theme }) => theme.size * 0.8  ? `${theme.size * 0.8}px` : ""};
  }

  .author-firstname {
    text-align: center;
    &.second {
      text-align: right;
    }
  }

  .zh {
    display: inline-block;
    font-size: ${({ theme }) => theme.size  ? `${theme.size * 0.2}px` : ""};
    line-height: ${({ theme }) => theme.size / 4 ? `${theme.size / 4}px` : ""};
    width: ${({ theme }) => theme.size / 4 ? `${theme.size / 4}px` : ""};
    height: ${({ theme }) => theme.size / 4 ? `${theme.size / 4}px` : ""};
    color: #fff;
    border: ${({ theme }) => theme.size  ? `${theme.size / 100}px solid #fff;` : ""}
    text-align: center;

    &:nth-child(2) {
      border-radius: 50%;
    }
  }

  &.index {
    left: 50%;
    transform: translateX(-50%);
  }
`
