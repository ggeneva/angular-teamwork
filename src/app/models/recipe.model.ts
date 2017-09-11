import { Comment } from './comment.model';
import { User } from './user.model';

export class Recipe {
    $key: string;
    name: string;
    description: string;
    preparationTime: number;
    cookingTime: number;
    servings: number;
    dateCreated: number;
    dateUpdated: number;
    imageUrl: string;
    author: User;
    authorUid: string;
    likes: string[];
    comments: Comment[];
}
