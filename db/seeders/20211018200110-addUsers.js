"use strict";
const bcrypt = require("bcryptjs");
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "demo",
          email: "demo@test.com",
          hashed_password: bcrypt.hashSync("demouser", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "billy",
          email: "email1@test.com",
          hashed_password: bcrypt.hashSync("password1", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "bob",
          email: "email2@test.com",
          hashed_password: bcrypt.hashSync("password2", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "jandice",
          email: "email3@test.com",
          hashed_password: bcrypt.hashSync("password3", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
