const { Book } = require('../models/models');
const ApiError = require('../error/ApiError');

class BookController {
    async create(req, res, next) {
        try {
            const { title, publication_date, link_file } = req.body;
            const book = await Book.create({ title, publication_date, link_file });
            return res.json(book);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let { limit, page } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let books = await Book.findAndCountAll({ limit, offset });
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
}

module.exports = new BookController()