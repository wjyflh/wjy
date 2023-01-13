import { IProps } from "@interfaces/component";
import styled from "styled-components";

export default function MainLayout({ children, ...props }: IProps) {
  return (
    <MainLayoutWrapper>
      { children }
    </MainLayoutWrapper>
  );
}

const MainLayoutWrapper = styled.div``;
