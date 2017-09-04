import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class BaseData {
    private list: FirebaseListObservable<any[]>;
    private listName: string;

    constructor(private db: AngularFireDatabase, private ModelClass) {
        this.listName = this.getCollectionName();
        this.list = this.db.list('/' + this.listName);
    }

    public add(item: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.list.push(item)
                .catch((error) => {
                    reject(error);
                })
                .then(() => {
                    resolve();
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


    private getCollectionName(): string {
        return this.ModelClass.name.toLowerCase() + 's';
    }
}
