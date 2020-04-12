'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Songs",
      [
        {
          title: "Linger",
          artist: "The Cranberries",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Jolene",
          artist: "Dolly Parton",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Wonderwall",
          artist: "Oasis",
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Songs', null, {});
  }
};
