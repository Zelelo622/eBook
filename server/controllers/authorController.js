const { Author } = require('../models/models');

const faker = require('faker');

class AuthorController {
    async create(req, res) {
        const { first_name, last_name } = req.body;
        const author = await Author.create({ first_name, last_name });
        return res.json(author);
    }

    // async createAll(req, res) {
    //     for (let i = 0; i < 1000; i++) {
    //         let fakke = new Author({
    //             first_name: faker.name.firstName(),
    //             last_name: faker.name.lastName()
    //         });
    //         fakke.save((err, data) => {
    //             if (err) {
    //                 console.log('error', err);
    //             }
    //         });
    //     }
    //     res.redirect('/');
    // }

    async getAll(req, res) {
        const authores = await Author.findAll();
        return res.json(authores);
    }
}

module.exports = new AuthorController()