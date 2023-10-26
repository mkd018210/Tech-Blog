const { User } = require("../models");
const userData = [
    {
        username: "User1",
        email: "firstuser@bootcamp.com",
        password: "1password",
    },
    {
        username: "User2",
        email: "seconduser@bootcamp.com",
        password: "2password",
    },
    {
        username: "User3",
        email: "thirduser@bootcamp.com",
        password: "3password",
    },
    {
        username: "User4",
        email: "fourthuser@bootcamp.com",
        password: "4password",
    },
    {
        username: "User5",
        email: "fifthuser@bootcamp.com",
        password: "5password",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;