import { User } from './user.model';
import { Category } from './category.model';

export interface DetailledProduct {
    id: number;
    name: string;
    author: User;
    description: string;
    date: string; // day
    picture: string; // thumbnail.image_url
    categories: Category[]; // topics
    comments: number; // comments_count
    votes: number; // votes_count
    redirect: string; // redirect_url
    makers: User[];
}
