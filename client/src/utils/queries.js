import { gql } from '@apollo/client';

export const QUERY_CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      _id
      charName
      strength
      dexterity
      constitution
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
      currentHitPoints
      tempHitPoints
      armorClass
      initiative
      speed
      personailtyTraits
      ideals
      flaws
      classNlevel
      background
      race
      alignment
      experiencePoints
      proficiencyBonus
      inspiration
      username
    }
  }
`;