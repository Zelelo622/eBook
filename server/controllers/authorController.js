const { Author } = require('../models/models');

class AuthorController {
    async create(req, res) {
        const { first_name, last_name } = req.body;
        const author = await Author.create({ first_name, last_name });
        return res.json(author);
    }

    async getAll(req, res) {
        const authores = await Author.findAll();
        return res.json(authores);
    }
}

module.exports = new AuthorController()