const { Author } = require('../models/models');


class AuthorBookController {
    async addAuthor(req, res, authorId, bookId) {
        return Author.findByPk(authorId).then((author) => {
            if (!author) {
                console.log('error');
                return null;
            }
            return Book.findByPk(bookId).then((book) => {
                if (!book) {
                    console.log('error');
                    return null;
                }
                author.addBook(book);
                console.log(`>> added Book id=${book.id} to Author id=${author.id}`);
                return author;
            })
        })
    }
}

module.exports = new AuthorBookController();