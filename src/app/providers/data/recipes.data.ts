import { BaseData } from './base/base.data';

export class RecipesData extends BaseData {

    constructor(db) {
        super(db, { name: 'Recipe' });
    }

    public getLastNRecipes(n: number) {
        return this.db.list('/' + this.listName, { query: {
            orderByChild: 'dateCreated',
            limitToLast: n,
        }});
    }

    public getByAuthor(email: string){
        return this.db.list('/' + this.listName, { query: {
            orderByChild: 'author.email',
            equalTo: 'xpload@email.bg'
        }});
    }
}
