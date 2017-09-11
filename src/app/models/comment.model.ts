import { User } from './user.model';

export class Comment {
    author: User;
    text: string;
    dateCreated: number;
    dateUpdated: number;
}
