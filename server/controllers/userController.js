const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Bookmark } = require('../models/models');

class UserController {
    async registration(req, res, next) {
        const { name, password, role } = req.body;
        if (!name || !password) {
            return next(ApiError.badRequest('Некорректное имя или пароль'));
        }
        const candidate = await User.findOne({ where: { name } });
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким именем уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ name, role, password: hashPassword });
        const bookmark = await Bookmark.create({ userId: user.id });
        const token = jwt.sing
            (
                { id: user.id, name, role },
                process.env.SECRET_KEY,
                { expiresIn: '24h' }
            );
        return res.json({ token });
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequest('No ID'));
        }
        res.json(id);
    }
}

module.exports = new UserController()