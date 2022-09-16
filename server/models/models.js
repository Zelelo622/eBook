const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { authenticate, model } = require('../db');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
});

const Book = sequelize.define('book', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    publication_date: { type: DataTypes.DATE },
    link_file: { type: DataTypes.STRING }
});

const Bookmark = sequelize.define('bookmark', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    page_num: { type: DataTypes.INTEGER }
});

const Author = sequelize.define('author', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false }
});

const BookAuthor = sequelize.define('bookAuthor', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasMany(Bookmark);
Bookmark.belongsTo(User);

Book.hasMany(Bookmark);
Bookmark.belongsTo(Book);

Book.hasMany(BookAuthor);
BookAuthor.belongsTo(Book);

Author.hasMany(BookAuthor);
BookAuthor.belongsTo(Author);

module.exports = {
    User,
    Book,
    Bookmark,
    BookAuthor,
    Author
}
