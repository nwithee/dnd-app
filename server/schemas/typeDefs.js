// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        charCount: Int
        character: [Character]
    }

    type Character {
        _id: ID
        name: String
        strength: Int
        dexterity: Int
        constitution: Int
        intelligence: Int
        wisdom: Int
        charisma: Int
        acrobatics: Int
        animalHandling: Int
        arcana: Int
        athletics: Int
        history: Int
        insight: Int
        intimidation: Int
        investigation: Int
        medicine: Int
        nature: Int
        perception: Int
        performance: Int
        religion: Int
        sleightOfHand: Int
        stealth: Int
        survival: Int
        currentHitPoints: Int
        tempHitPoints: Int
        armorClass: Int
        initiative: Int
        speed: Int
        personailtyTraits: String
        ideals: String
        flaws: String
        classNlevel: String
        background: String
        race: String
        alignment: String
        experiencePoints: Int
        proficiencyBonus: Int
        inspiration: Int
        User: [User]
    }

    type Query {
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
    }

`;
module.exports = typeDefs;