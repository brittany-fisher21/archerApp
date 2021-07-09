'use strict';

const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
    constructor(id, name, email, user_name, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.user_name = user_name;
        this.password = password;
    }

    checkPassword(hasedPassword) {
        return bcrypt.compareSync(this.password, hasedPassword)
    }

    static async addUser(name, email, user_name, password) {
        try {
            const query = `INSERT INTO users (name, email, user_name, password) VALUES ('${name}', '${email}', '${user_name}', '${password}') RETURNING id`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error
        }
    }

    async login() {
        try {
            const query = `SELECT * FROM users WHERE user_name = '${this.user_name}';`;
            const response = await db.one(query);
            console.log("LOGIN RESPONSE: ", response);
            const isValid = this.checkPassword(response.password);
            if (!!isValid) {
                const { id, name } = response;
                return { isValid, user_id: id, name }
            } else {
                return { isValid }
            }
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }
}

module.exports = User;