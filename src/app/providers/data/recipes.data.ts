import { BaseData } from './base/base.data';

export class RecipesData extends BaseData {
    constructor(db) {
        super(db, { name: 'Recipe' });
    }
}
