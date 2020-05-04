import { User } from './user.model';
import { Category } from './category.model';

export interface ShortProduct {
    id: number;
    name: string;
    author: User; // user
    description: string;
    date: string;
    picture: string; // thumbnail.image_url
    categories: Category[]; // topics
}
