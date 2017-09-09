import { Comment } from './comment.model';
import { User } from './user.model';

export class Recipe {
    $key: string;
    name: string;
    description: string;
    preparationTime: number;
    cookingTime: number;
    servings: number;
    dateCreated: string;
    dateUpdated: string;
    imageUrl: string;
    author: User;
    likes: number;
    comments: Comment[];
}
