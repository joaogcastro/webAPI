import express from 'express';
import { database } from './database/db.js';
import { User } from './models/user.js';

const routes = express.Router();

routes.post('/register', async (req, res) => {
    const { username, password, email, category } = req.body;
    const userToRegister = new User(username, password, email, category);

    if (category !== 'funcionario' && category !== 'gerente') {
        return res.status(400).json({ message: 'Categoria inválida' });
    }

    const sql = 'INSERT INTO login (username, password, email, category) VALUES (?, ?, ?, ?)';
    database.query(sql, [userToRegister.username, userToRegister.password, userToRegister.email, userToRegister.category], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao registrar usuário' });
        }
        return res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    });
});

routes.post('/login', async (req, res) => {
    const { username, password, category } = req.body;

    const sql = 'SELECT * FROM login WHERE username = ? AND password = ? AND category = ?';
    database.query(sql, [username, password, category], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        if (results.length > 0) {
            return res.status(200).json({ message: 'Login bem-sucedido' });
        } else {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }
    });
});

export {
    routes
};
