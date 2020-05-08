import { User } from './user.model';
import { Category } from './category.model';
import { Product } from './product.model';

export interface DetailedProduct extends Product {
    comments: number; // comments_count
    votes: number; // votes_count
    redirect: string; // redirect_url
    makers: User[];
}
