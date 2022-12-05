const { Author, BookAuthor } = require('../models/models');


class AuthorBookController {
    async create(req, res, next) {
        try {
            const { id_author, id_book } = req.body;
            const id = await BookAuthor.create({ id_author, id_book });
            return res.json(id);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new AuthorBookController();