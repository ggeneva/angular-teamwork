import { BaseData } from './base/base.data';

export class TestData extends BaseData {
    constructor(db) {
        super(db, { name: 'Test' });
    }
}
