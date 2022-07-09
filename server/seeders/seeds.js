const db = require('../config/connection');
const { Character, User } = require('../models');
const faker = require('faker');

db.once('open', async () => {
    await Character.deleteMany({});
    await User.deleteMany({});

    // create user data
    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    console.log('all done!');
    process.exit(0);
});