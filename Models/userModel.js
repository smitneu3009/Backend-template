// src/models/userModel.js
export const userModel = {
    create: 'INSERT INTO users (name, email) VALUES (?, ?)',
    findAll: 'SELECT * FROM users',
    findById: 'SELECT * FROM users WHERE id = ?',
    updateById: 'UPDATE users SET name = ?, email = ? WHERE id = ?',
    deleteById: 'DELETE FROM users WHERE id = ?',
};