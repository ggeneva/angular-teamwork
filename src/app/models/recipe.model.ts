import { Comment } from './comment.model';

export class Recipe {
    $key: string;
    name: string;
    description: string;
    preparationTime: number;
    cookingTime: number;
    servings: number;
    dateCreated: string;
    dateUpdated: string;
    image: string;
    author: string;
    likes: number;
    comments: Comment[];
}
