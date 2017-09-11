import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

export class BaseData {
    protected list: FirebaseListObservable<any[]>;
    protected listName: string;

    constructor(protected db: AngularFireDatabase, private ModelClass) {
        this.listName = this.getCollectionName();
        this.list = this.db.list('/' + this.listName);
    }

    public add(model: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.list.push(model)
                .catch((error) => {
                    reject(error);
                })
                .then((result) => {
                    resolve(result.key);
                });
        });
    }

    public remove(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.list.remove(key)
                .catch((error) => {
                    reject(error);
                })
                .then(() => {
                    resolve();
                });
        });
    }

    public update(key: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.list.update(key, data)
                .catch((error) => {
                    reject(error);
                })
                .then(() => {
                    resolve();
                });
        });
    }

    public set(key: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.list.set(key, data)
                .catch((error) => {
                    reject(error);
                })
                .then(() => {
                    resolve();
                });
        });
    }

    public getObservableList() {
        return this.list;
    }

    public getObservableObject(key: string) {
        return this.db.object('/' + this.listName + '/' + key);
    }

    public getAll() {
        return this.list.first();
    }

    public getObservableByKey(key) {
        return this.db.object('/' + this.listName + '/' + key);
    }

    private getCollectionName(): string {
        return this.ModelClass.name.toLowerCase() + 's';
    }
}
