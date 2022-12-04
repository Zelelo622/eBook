const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { authenticate, model } = require('../db');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
});

// User.sync({ alter: true }).then(
//     () => console.log('message')
// );

const Book = sequelize.define('book', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    publication_date: { type: DataTypes.DATE },
    text: { type: DataTypes.TEXT },
    author: { type: DataTypes.STRING }
});

Book.sync({ alter: true }).then(
        () => console.log('message')
);

const Bookmark = sequelize.define('bookmark', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    page_num: { type: DataTypes.INTEGER }
});

// Bookmark.sync({ alter: true }).then(
//     () => console.log('message')
// );

const Author = sequelize.define('author', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false }
});

// Author.sync({ alter: true }).then(
//     () => console.log('message')
// );

const BookAuthor = sequelize.define('bookAuthor', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// BookAuthor.sync({ alter: true }).then(
//     () => console.log('message')
// );

User.hasMany(Bookmark);
Bookmark.belongsTo(User);

Book.hasMany(Bookmark);
Bookmark.belongsTo(Book);

Book.belongsToMany(Author, {through: BookAuthor, foreignKey: 'id_book'});
Author.belongsToMany(Book, {through: BookAuthor, foreignKey: 'id_author'});

module.exports = {
    User,
    Book,
    Bookmark,
    BookAuthor,
    Author
}
