'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('book', [
      {
        title: 'The Lost Kingdom',
        author: 'Emily Carter',
        genre: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Code to Success',
        author: 'James Anderson',
        genre: 'Self-Help',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Adventures in the Stars",
        author: "William Cooper",
        genre: "Science Fiction",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Cooking Made Simple",
        author: "Olivia Harris",
        genre: "Cookbook",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The Art of Silence",
        author: "Michael Davis",
        genre: "Philosophy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The Forgotten Soldier",
        author: "Emma Roberts",
        genre: "Historical Fiction",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Hacker Chronicles",
        author: "Liam Carter",
        genre: "Thriller",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Gardening for All Seasons",
        author: "Grace Walker",
        genre: "Lifestyle",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Legends of the Highlands",
        author: "Noah Scott",
        genre: "Historical Adventure",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('book', null, {});

  }
};