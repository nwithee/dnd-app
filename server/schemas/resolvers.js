const { User, newCharacter } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //get all users
    users: async () => {
      return User.find().select("-__v -password").populate("characters");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("characters");
    },
    //characters by username
    characters: async (parent, { username }) => {
      const params = username ? { username } : {};
      return newCharacter.find(params).sort({ createdAt: -1 });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("characters");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    //adduser to db
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log(user + "created");
      return { token, user };
    },

    addChar: async (parent, args, context) => {
      if (context.user) {
        const char = await newCharacter.create(args);
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { characters: char._id } },
          { new: true }
        );
        console.log(char + "created");
        return { char };
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //login function
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      console.log(user + "logged in");
      return { token, user };
    },

    delChar: async (parent, args, context) => {
      if (context.user) {
        const char = await newCharacter.findOne(args);
        await newCharacter.deleteOne(char);
        console.log(char + "deleted");
        return char;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
