import styled from "styled-components";

class MainProps {
  backgroundColor: string;
  children: React.ReactNode;
}

const MainStyled = styled.main<MainProps>`
  background-color: ${props => props.backgroundColor};
  padding: 1rem;
  width: 100%;
  height: 100vh;
`

export default function Main({
  backgroundColor,
  children
}: MainProps) {
  
  return (
    <MainStyled
      backgroundColor={backgroundColor}
    >
      {children}
    </MainStyled>
  );
}