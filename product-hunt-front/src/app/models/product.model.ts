import { User } from './user.model';
import { Category } from './category.model';

export interface Product {
    id: number;
    name: string;
    author: User; // user
    description: string;
    date: string;
    picture: string; // thumbnail.image_url
    categories: Category[]; // topics
}
