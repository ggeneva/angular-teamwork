const RecipesData = require('./recipes.data');
const UsersData = require('./users.data');

const init = (db) => {
    return Promise.resolve({
        users: new UsersData(db),
        items: new RecipesData(db),
    });
};

module.exports = { init };
