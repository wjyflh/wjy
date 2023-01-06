import { NextComponentType } from "next";
import { ImageProps } from "next/image";
import styled from "styled-components";
import { TypeElement } from "typescript";
import { IProps } from "@types/component";
import { ReactNode } from "react";

export default function Button ({ children, ...props }: IProps) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  backgroud: #ddd;
  padding: 4px 8px;
  border-radius: 4px;
  transition-duration: 0.3s;
  cursor: pointer;
  :active {
    background: #ccc;
    transition-duration: 0.3s;
  }
`;