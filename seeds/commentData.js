const { Comment } = require("../models");

const comentData = [
    {
        comment_text: "Great article!",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "Perfect",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: "No thank you",
        user_id: 3,
        post_id: 1,
    },
    {
        comment_text: "YES!",
        user_id: 4,
        post_id: 1,
    },
    {
        comment_text: "I don't think so!",
        user_id: 5,
        post_id: 1,
    },
    {
        comment_text: "Awesome!",
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: "I agree!",
        user_id: 2,
        post_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;