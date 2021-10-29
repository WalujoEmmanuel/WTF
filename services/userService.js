const APIFeatures = require('../utils/apiFeatures');
const users = require('../db/users.json');

exports.createUser = async (user) => {
    users.push({ id: users.length + 1, ...user });
    return user;
};

exports.updateUser = (id, data) => {
    const user = Array.isArray(users) && users.find(user => user.id === parseInt(id));
    if (!user) return null;
    return { ...user, ...data };
};

exports.getAll = async () => {
    return APIFeatures.paginator(users);
};

exports.getUser = async (id) => {
    const user = Array.isArray(users) && users.find(user => user.id === parseInt(id));
    if (!user) return null;
    return user;
};

exports.deleteUser = async (id) => {
    const user = Array.isArray(users) && users.find(user => user.id === parseInt(id));
    if (!user) return null;
    data.forEach((item, index) => {
        if (item[key] === id) data.splice(index, 1);
    });
    return user;
};