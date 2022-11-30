import React from "react";
import styled from "styled-components";
import Button from "../Button/index";
import Image from "next/image";

class BottomMenuProps {
  backgroundColor: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
  padding?: string;
  color?: string;
}

const BottomMenuStyled = styled.button<BottomMenuProps>`
  border: none;
  border-radius: 10px;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding || '10px 20px'};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default function BottomMenu({
  backgroundColor,
  width,
  height,
  children,
  padding,
  color,
}: BottomMenuProps) {
  return (
    <BottomMenuStyled
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      padding={padding}
      color={color}
    >
      <Button
        backgroundColor="#FFFFFF"
        width="min-content"
        color="#ff2a00"
        padding="10px 35px"
      >
        <Image src="/navbar_home.svg" alt="Ícone plantei" width={60} height={60} layout="fixed" />
      </Button>
      <Button
        backgroundColor="#FFFFFF"
        width="min-content"
        color="#7B7878"
        padding="10px 35px"
      >
        <Image src="/navbar_planta.svg" alt="Ícone plantei" width={60} height={60} layout="fixed" />
      </Button>
      <Button
        backgroundColor="#FFFFFF"
        width="min-content"
        color="#7B7878"
        padding="10px 35px"
      >
        <Image color="#34AE62" src="/navbar_perfil.svg" alt="Ícone plantei" width={60} height={60} layout="fixed" />
      </Button>
      <Button
        backgroundColor="#FFFFFF"
        width="min-content"
        color="#7B7878"
        padding="10px 35px"
      >
        <Image src="/navbar_feed.svg" alt="Ícone plantei" width={60} height={60} layout="fixed" />
      </Button>
      {children}
    </BottomMenuStyled>
  );
}