import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password){
        token
        user {
            _id
            username
        }
    }
  }
`;

export const ADD_CHAR = gql`
  mutation addChar(
    $charName: String, 
    $strength: Int, 
    $dexterity: Int, 
    $constitution: Int, 
    $intelligence: Int, 
    $wisdom: Int, 
    $charisma: Int, 
    $acrobatics: Int, 
    $animalHandling: Int, 
    $arcana: Int, 
    $athletics: Int, 
    $history: Int, 
    $insight: Int, 
    $intimidation: Int, 
    $investigation: Int, 
    $medicine: Int, 
    $nature: Int, 
    $perception: Int, 
    $performance: Int, 
    $religion: Int, 
    $sleightOfHand: Int, 
    $stealth: Int, 
    $survival: Int,  
    $classNlevel: String, 
    $background: String, 
    $race: String, 
    $alignment: String, 
    $experiencePoints: String, 
  ) 
    {
      addChar(
        charName: $charName,
        strength: $strength,
        dexterity: $dexterity,
        constituion: $constution,
        intelligence: $intelligence,
        wisdom: $wisdom,
        charisma: $charisma,
        acrobatics: $acrobatics,
        animalHandling: $animalHandling,
        arcana: $arcana,
        athletics: $athletics,
        history: $history,
        insight: $insight,
        intimidation: $intimidation,
        investigation: $investigation,
        medicine: $medicine,
        nature: $nature,
        perception: $perception,
        performance: $performance,
        religion: $religion,
        sleightOfHand: $sleightOfHand,
        stealth: $stealth,
        survival: $survival,
        classNlevel: $classNlevel,
        background: $background,
        race: $race,
        alignment: $alignment,
        experiencePoints: $experiencePoints
    ){
      charName
      strength
      dexterity
      constituion
      intelligence
      wisdom
      charisma
      acrobatics
      animalHandling
      arcana
      athletics
      history
      insight
      intimidation
      investigation
      medicine
      nature
      perception
      performance
      religion
      sleightOfHand
      stealth
      survival
      classNlevel
      background
      race
      alignment
      experiencePoints
    }
  }
`;