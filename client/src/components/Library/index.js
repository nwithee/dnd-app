import React from 'react';
import styled from 'styled-components';
import Button from '../CSS/Button';
import Charcards from '../Charcards';

//CSS Styling
    const Title = styled.h1`
            font-size: 3em;
            text-align: center;
            margin: 20px;
        `;

function Library() {
    
    return (
        <MainContainer>
            <Title>D&D Character Library</Title>
            
            <Button content = "Create New Character"></Button>
            
            <CardContainer>
                <Charcards></Charcards>
            </CardContainer>

        </MainContainer>
    )
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(211,211,211);
  background-color: rgb(211,211,211);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 20px;
  font-family: "Cinzel Decorative", cursive;
  color: black;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: fit-content;
    height: fit-content;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export default Library;