import Link from "next/link"
import React from "react"
import styled, { keyframes } from "styled-components"

const Identify = () => {
  return (
    <Link href="/">
      <IdentifyStyle>
        <div className="floater">
          <h2 className="author-lastname">
            <span className="zh">W</span>
          </h2>
          <h3 className="author-firstname">
            <span className="zh">J</span>
          </h3>
          <h3 className="author-firstname second">
            <span className="zh">Y</span>
          </h3>
        </div>
      </IdentifyStyle>
    </Link>
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

const IdentifyStyle = styled.div`
  border-radius: 10px 10px 0px 10px;
  position: relative;
  width: 100px;
  height: 100px;
  font-size: 14px;
  font-weight: 700;
  z-index: 1;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  border-radius: 0px 0px 10px 0px;
  cursor: pointer;
  transform-origin: center;
  perspective-origin: center center;
  perspective: 500px;
  transition-duration: 3s;

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
    animation: ${identifyFlip} 2s forwards ease-out;
  }

  &:before {
    content: "";
    position: absolute;
    float: right;
    left: 65px;
    top: 65px;
    width: 30px;
    height: 30px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    border-radius: 0px 0px 10px 0px;
    animation: ${cornerMove} 2s forwards ease-out;
  }

  .author-lastname,
  .author-firstname {
    width: 80px;
  }

  .author-firstname {
    text-align: center;
    &.second {
      text-align: right;
    }
  }

  .zh {
    display: inline-block;
    font-size: 20px;
    line-height: 26px;
    width: 26px;
    height: 26px;
    color: #fff;
    border: 1px solid #fff;
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
