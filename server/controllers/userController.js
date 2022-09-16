const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Bookmark } = require('../models/models');

const generateJwt = (id, name, role) => {
    return jwt.sign(
        { id, name, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
};

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
        const token = generateJwt(user.id, user.name, user.role);
        return res.json({ token });
    }

    async login(req, res, next) {
        const { name, password } = req.body;
        const user = await User.findOne({ where: { name } });
        if (!user) {
            return next(ApiError.internal('Пользователь с таким именем не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Указанный пароль неверный'));
        }
        const token = generateJwt(user.id, user.name, user.role);
        return res.json({ token });
    }

    async check(req, res, next) {

    }
}

module.exports = new UserController()