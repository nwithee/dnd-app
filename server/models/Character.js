const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
    {
        // General Infromation
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
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
        // End General Infromation 

        // Ability Scores
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
        // Ability Scores End
        //skills
        acrobatics: {
            type: Number,
            required: false,
            unique: false,
        },
        acrobaticsCheckmark: {
            type: Number,
            required: false,
            unique: false,
        },
        animalHandling: {
            type: Number,
            required: false,
            unique: false,
        },
        animalHandlingCheckmark: {
            type: Number,
            required: false,
            unique: false,
        },
        arcana: {
            type: Number,
            required: false,
            unique: false,
        },
        arcana_checkmark: {
            type: Number,
            required: false,
            unique: false,
        },       
        athletics: {
            type: Number,
            required: false,
            unique: false,
        },
        athleticsCheckmark: {
            type: Number,
            required: false,
            unique: false,
        },
        deception: {
            type: Number,
            required: false,
            unique: false,
        },
        deceptionCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },
        history: {
            type: Number,
            required: false,
            unique: false,
        },
        historyCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },
        insight: {
            type: Number,
            required: false,
            unique: false,
        },
        insightCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },
        intimidation: {
            type: Number,
            required: false,
            unique: false,
        },
        intimidationCheckmark: {
            type: Number,
            required: false,
            unique: false,
        },
        investigation: {
            type: Number,
            required: false,
            unique: false,
        },
        investigationCheckmark: {
            type: Number,
            required: false,
            unique: false,
        },
        medicine: {
            type: Number,
            required: false,
            unique: false,
        },
        medicineCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },
        nature: {
            type: Number,
            required: false,
            unique: false,
        },
        natureCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },
        perception: {
            type: Number,
            required: false,
            unique: false,
        },
        perceptionCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },
        performance: {
            type: Number,
            required: false,
            unique: false,
        },
        performanceCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },
        persuasion: {
            type: Number,
            required: false,
            unique: false,
        },
        persuasionCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },
        religion: {
            type: Number,
            required: false,
            unique: false,
        },
        religionCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },
        sleightOfHand: {
            type: Number,
            required: false,
            unique: false,
        },
        sleightOfHandCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },
        stealth: {
            type: Number,
            required: false,
            unique: false,
        },   
        stealthCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },     
        survival: {
            type: Number,
            required: false,
            unique: false,
        },
        survivalCheckmark: {
            type: Boolean,
            required: false,
            unique: false,
        },
        //skills end

        //Saving Throws
        strengthSave: {
            type: Number,
            required: false,
            unique: false,    
        },
        strengthSaveCheck: {
            type: Boolean,
            required: false,
            unique: false,    
        },
        dexteritySave: {
            type: Number,
            required: false,
            unique: false,    
        },
        dexteritySaveCheck: {
            type: Boolean,
            required: false,
            unique: false,    
        },
        wisdomSave: {
            type: Number,
            required: false,
            unique: false,    
        },
        wisdomSaveCheck: {
            type: Boolean,
            required: false,
            unique: false,    
        },     
        intelligenceSave: {
            type: Number,
            required: false,
            unique: false,    
        },
        intelligenceSaveCheck: {
            type: Boolean,
            required: false,
            unique: false,    
        },
        charismaSave: {
            type: Number,
            required: false,
            unique: false,    
        },
        charismaSaveCheck: {
            type: Boolean,
            required: false,
            unique: false,    
        },
        //Saving Throws End

        //Death Saves 
        successCheckOne: {
            type: Boolean,
            required: false,
            unique: false,    
        },
        successCheckTwo: {
            type: Boolean,
            required: false,
            unique: false,    
        },
        successCheckThree: {
            type: Boolean,
            required: false,
            unique: false,    
        },
        failureCheckOne: {
            type: Boolean,
            required: false,
            unique: false,    
        },
        failureCheckTwo: {
            type: Boolean,
            required: false,
            unique: false,    
        },
        failureCheckThree: {
            type: Boolean,
            required: false,
            unique: false,    
        },
        //Death Saves End
        
        //Equipment
        equipment: {
            type: String,
            required: false,
            unique: false,
        },
        copper: {
            type: Number,
            required: false,
            unique: false,
        },
        silver: {
            type: Number,
            required: false,
            unique: false,
        },
        electrum: {
            type: Number,
            required: false,
            unique: false,
        },
        gold: {
            type: Number,
            required: false,
            unique: false,
        },
        platinum: {
            type: Number,
            required: false,
            unique: false,
        },
        //Equipment End

        //Attacks & SpellCasting
        attackNameOne: {
            type: String,
            required: false,
            unique: false,
        },
        attackBonusOne: {
            type: String,
            required: false,
            unique: false,
        },
        attackDamageOne: {
            type: String,
            required: false,
            unique: false,
        },
        attackNameTwo: {
            type: String,
            required: false,
            unique: false,
        },
        attackBonusTwo: {
            type: String,
            required: false,
            unique: false,
        },
        attackDamageTwo: {
            type: String,
            required: false,
            unique: false,
        },
        attackNameThree: {
            type:String,
            required: false,
            unique: false,
        },
        attackBonusThree: {
            type: String,
            required: false,
            unique: false,
        },
        attackDamageThree: {
            type: String,
            required: false,
            unique: false,
        },
        attacks: {
            type: String,
            required: false,
            unique: false, 
        },
        //Attacks & SpellCasting

        //Other Fields
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
        hitDice: {
            type: Number,
            required: false,
            unique: false,
        },
        hitDiceTotal: {
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
        otherProficenciesAndLanguages: {
            type: String,
            required: false,
            unique: false,
        },
        featuresAndTraits: {
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
                required: true
            },
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Character = model('Character', characterSchema);

module.exports = Character;
