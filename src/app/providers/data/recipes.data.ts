import { BaseData } from './base/base.data';

export class RecipesData extends BaseData {

    constructor(db) {
        super(db, { name: 'Recipe' });
    }

    public getLastNRecipes(n: number) {
        return this.db.list('/' + this.listName, {
            query: {
                orderByChild: 'dateCreated',
                limitToLast: n,
            }
        });
    }

    public getByAuthor(uid: string) {
        return this.db.list('/' + this.listName, {
            query: {
                orderByChild: 'authorUid',
                equalTo: uid
            }
        });
    }
}
