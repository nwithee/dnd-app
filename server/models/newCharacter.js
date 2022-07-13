const { Schema, model } = require("mongoose");

const characterSchema = new Schema(
  {
    charName: {
      type: String,
      required: false,
      unique: false,
    },
    strength: {
      type: Number,
      required: false,
      unique: false,
    },
    dexterity: {
      type: Number,
      required: false,
      unique: false,
    },
    constitution: {
      type: Number,
      required: false,
      unique: false,
    },
    intelligence: {
      type: Number,
      required: false,
      unique: false,
    },
    wisdom: {
      type: Number,
      required: false,
      unique: false,
    },
    charisma: {
      type: Number,
      required: false,
      unique: false,
    },
    //skills
    acrobatics: {
      type: Number,
      required: false,
      unique: false,
    },
    animalHandling: {
      type: Number,
      required: false,
      unique: false,
    },
    arcana: {
      type: Number,
      required: false,
      unique: false,
    },
    athletics: {
      type: Number,
      required: false,
      unique: false,
    },
    deception: {
      type: Number,
      required: false,
      unique: false,
    },
    history: {
      type: Number,
      required: false,
      unique: false,
    },
    insight: {
      type: Number,
      required: false,
      unique: false,
    },
    intimidation: {
      type: Number,
      required: false,
      unique: false,
    },
    investigation: {
      type: Number,
      required: false,
      unique: false,
    },
    medicine: {
      type: Number,
      required: false,
      unique: false,
    },
    nature: {
      type: Number,
      required: false,
      unique: false,
    },
    perception: {
      type: Number,
      required: false,
      unique: false,
    },
    performance: {
      type: Number,
      required: false,
      unique: false,
    },
    persuasion: {
      type: Number,
      required: false,
      unique: false,
    },
    religion: {
      type: Number,
      required: false,
      unique: false,
    },
    sleightOfHand: {
      type: Number,
      required: false,
      unique: false,
    },
    stealth: {
      type: Number,
      required: false,
      unique: false,
    },
    survival: {
      type: Number,
      required: false,
      unique: false,
    },
    //skills end
    currentHitPoints: {
      type: Number,
      required: false,
      unique: false,
    },
    tempHitPoints: {
      type: Number,
      required: false,
      unique: false,
    },
    armorClass: {
      type: Number,
      required: false,
      unique: false,
    },
    initiative: {
      type: Number,
      required: false,
      unique: false,
    },
    speed: {
      type: Number,
      required: false,
      unique: false,
    },
    personailtyTraits: {
      type: String,
      required: false,
      unique: false,
    },
    ideals: {
      type: String,
      required: false,
      unique: false,
    },
    bonds: {
      type: String,
      required: false,
      unique: false,
    },
    flaws: {
      type: String,
      required: false,
      unique: false,
    },
    classNlevel: {
      type: String,
      required: false,
      unique: false,
    },
    background: {
      type: String,
      required: false,
      unique: false,
    },
    race: {
      type: String,
      required: false,
      unique: false,
    },
    alignment: {
      type: String,
      required: false,
      unique: false,
    },
    experiencePoints: {
      type: String,
      required: false,
      unique: false,
    },
    proficiencyBonus: {
      type: Number,
      required: false,
      unique: false,
    },
    inspiration: {
      type: Number,
      required: false,
      unique: false,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const newCharacter = model("newCharacter", characterSchema);

module.exports = newCharacter;
