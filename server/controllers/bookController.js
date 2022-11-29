const { Book } = require('../models/models');
const ApiError = require('../error/ApiError');

class BookController {
    async create(req, res, next) {
        try {
            const { title, publication_date, text } = req.body;
            const book = await Book.create({ title, publication_date, text });
            return res.json(book);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        // let { limit, page } = req.query;
        // page = page || 1;
        // limit = limit || 9;
        // let offset = page * limit - limit;
        // let books = await Book.findAndCountAll({ limit, offset });
        const books = await Book.findAll();
        return res.json(books);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const book = await Book.findOne(
            {
                where: { id }
            }
        );
        return res.json(book);
    }

    async delete(req, res) {
        const { id } = req.params;
        const book = Book.destroy(
            {
                where: { id }
            }
        );
        return res.json(book);
    }

    async update(req, res) {
        const { id } = req.params;
        const { title, publication_date, text } = req.body;
        const book = Book.update(
            {
                title: title,
                publication_date: publication_date,
                text: text
            },
            {
                where: { id }
            }
        );
        return res.json(book);
    }
}

module.exports = new BookController()