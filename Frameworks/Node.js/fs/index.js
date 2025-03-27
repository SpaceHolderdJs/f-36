const { listUsers, createUsersFiles } = require("./users/users");
const { createPostsFiles } = require("./posts/posts");

console.log("Hello node");

listUsers();
createUsersFiles();

createPostsFiles();
