import styled from "styled-components";

export const NovaPlantaHeader = styled.header`
  display: grid;
  justify-content: center;

  & > h1 {
    color: #217B51;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    margin-bottom: 0px;

    & > span {
        color: #9AC979;
    }
  }

  & > h2 {
    color: #9AC979;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    margin-top: 0px;
  }

`;

export const ContentFormSM = styled.form`
    height: 80%;
`;

export const ContentForm = styled.form`
    height: 60%;
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    &.contentsm{
        justify-content: flex-start;
    }
`;

export const NovaPlantaText = styled.h3`
    font-size: 18px;
    color: #217B51;
    font-weight: 400;
    margin-top: 30px;
`;

export const SubmitDiv = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 40px;

  &.contentsm {
    margin-top: 80px;
  }
`;

export const DivCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-top: 30px;
`;

export const CardSelect = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    
    & > ::hover {
        border: 1px solid #217B51;
        padding: 5px;
        border-radius: 10px;
    }

    & > p {
        margin: 5px 0;
    }
`;