const { User, Character} = require('../models');


const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password')
                // .populate('characters');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('characters')
        },
        // characters: async (parent, { username }) => {
        //     const params = username ? { username } : {};
        //     return Character.find(params).sort({ createdAt: -1 });
        // },
        // character: async (parent, { _id }) => {
        //     return Character.findOne({ _id });
        // }

    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
        },
    //     addChar: async (parent, args) => {
    //         const char = await Character.create(args);
    //         return { char };
    //     }
    }
}

module.exports = resolvers;