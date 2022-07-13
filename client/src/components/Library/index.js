import React, { useState } from 'react';
import styled from 'styled-components';
//import Button from '../CSS/Button';
import Charcards from '../Charcards';
import CharacterSheet from '../CharacterSheet/CharacterSheet';

function Library() {

//Code for switching between login and signup
  const [sheet,setSheet] = useState(false);
  const [cards, setCards] = useState(true);

  const sheetHandler = () => {
    setSheet(true);
    setCards(false);
  };
  const cardsHandler = () => {
    setSheet(false);
    setCards(true);
  };
    
    return (
        <MainContainer>
            <Title>D&D Character Library</Title>
            
        {cards && (
            <>
            <Button onClick={sheetHandler}>Create New Character</Button>
            <CardContainer>
                <Charcards></Charcards>
            </CardContainer>
            </>
        )}
        {sheet && (
            <>
            <CharacterSheet></CharacterSheet>
            <Button onClick={cardsHandler}>Create Character!</Button>
            </>
        )}
        </MainContainer>
    )
}

//CSS Styling

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

const Title = styled.h1`
font-size: 3em;
text-align: center;
margin: 20px;
`;

const Button = styled.button`
  font-family: "Cinzel Decorative";
  margin: 10px;
  background-color: #8fa189;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  font-weight: bold;
  border: solid 5px #000;
  border-width: 0 4px 5px 0;
  border-radius: 5px;
  border-color: transparent #6c7b67 #7f8f79 transparent;
  background-clip: padding-box;
  text-shadow: 2px 2px 3px rgb(255 255 255 / 50%);
  color: black;
  width: fit-content;
  cursor: pointer;
  &:hover {
      border-width: 0 2px 3px 0;
      margin-right: 4px;
      position: relative;
      left: 2px;
      top: 3px;
}
`

export default Library;