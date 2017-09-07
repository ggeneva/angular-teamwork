const BaseData = require('./base/base.data');
const Recipe = require('../models/recipe.model');

class RecipesData extends BaseData {
    constructor(db) {
        super(db, Recipe);
    }
}

module.exports = RecipesData;
