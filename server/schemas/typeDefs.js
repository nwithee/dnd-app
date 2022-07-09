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
        classNlevel: String
        background: String
        race: String
        alignment: String
        experiencePoints: Int
        strength: Int
        dexterity: Int
        constitution: Int
        intelligence: Int
        wisdom: Int
        charisma: Int
        acrobatics: Int
        acrobaticsCheckmark: bool
        animalHandling: Int
        animalHandlingCheckmark: Bool
        arcana: Int
        arcanaCheckmark: Bool
        athletics: Int
        athleticsCheckmark: Int
        deception: Int
        deceptionCheckmark: Bool
        history: Int
        historyCheckmark: Bool
        insight: Int
        insigthCheckmark: Bool
        intimidation: Int
        intimidationCheckmark: Bool
        investigation: Int
        investigationCheckmark: Bool
        medicine: Int
        medicineCheckmark: Bool
        nature: Int
        natureCheckmark: Bool
        perception: Int
        perceptionCheckmark: Bool
        performance: Int
        performanceCheckmark: Bool
        persuasion: Int
        persausionCheckmark: Bool
        religion: Int
        religion: Bool
        sleightOfHand: Int
        sleightOfHandCheckmark: Bool
        stealth: Int
        stealthCheckmark: Bool
        survival: Int
        survivalCheckmark: Bool
        strengthSave: Int
        strengthSaveCheck: Bool
        dexteritySave: Int
        dexteritySaveCheck: Bool
        wisdomSave: Int
        wisdomSaveCheck: Bool
        intelligenceSave: Int
        intelligneceSaveCheck: Bool
        charismaSave: Int
        charimsaSaveCheck: Bool
        successCheckOne: Bool
        successCheckTwo: Bool
        successCheckThree: Bool
        failureCheckOne: Bool
        failureCheckTwo: Bool
        failureCheckThree: Bool
        equipment: String
        copper: Int
        silver: Int
        electrum: Int
        gold: Int
        platinum: Int
        attackNameOne: String
        attackBonusOne: String
        attackDamageOne: String
        attackNameTwo: String
        attackBonusTwo: String
        attackDamageTwo: String
        attackNameThree: String
        attackBonusThree: String
        attackDamageThree: String
        attacks: String
        currentHitPoints: Int
        tempHitPoints: Int
        hitDice: Int
        hitDiceTotal: Int
        armorClass: Int
        initiative: Int
        speed: Int
        personailtyTraits: String
        ideals: String
        bonds: String
        flaws: String
        otherProficenciesAndLanguages: String
        featuresAndTraits: String
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