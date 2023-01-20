import { NextComponentType } from "next";
import { ImageProps } from "next/image";
import styled from "styled-components";
import { TypeElement } from "typescript";
import { IProps } from "@interfaces/component";
import { ReactNode } from "react";

export default function Button ({ children, ...props }: IProps) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: transparent;
  padding: 4px 8px;
  display: flex;
  transition-duration: 0.3s;
  cursor: pointer;

  :active, :hover {
    transition-duration: 0.3s;

    svg {
      transform: rotate(10deg);
    }
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;