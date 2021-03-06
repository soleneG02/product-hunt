import _ from 'lodash';
import { Injectable } from '@angular/core';
import { PieChartService } from '../PieChart/pie-chart.service';

import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { DetailedProduct } from 'src/app/models/detailed-product.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsToDisplay: Product[];
  singleProduct: DetailedProduct;
  colorCategoryReference: Category[];

  constructor(private pieChartService: PieChartService) {}

  formatData(data): Product[] {
    const formattedData = [];
    this.colorCategoryReference = this.pieChartService.getCategoryData(data);
    for (const dataObject of data) {
      formattedData.push(this.formatSingleData(dataObject));
    }
    return formattedData;
  }

  formatSinglePost(data): DetailedProduct {
    return {
      id: data.id,
      name: data.name,
      author: this.formatUser(data.user),
      description: data.tagline,
      date: data.day,
      picture: data.thumbnail.image_url,
      categories: this.formatCategories(data.topics),
      comments: data.comments_count,
      votes: data.votes_count,
      redirect: data.redirect_url,
      makers: this.formatMakers(data.makers)
    };
  }

  private formatSingleData(data): Product {
    return {
      id: data.id,
      name: data.name,
      author: this.formatUser(data.user),
      description: data.tagline,
      date: data.day,
      picture: data.thumbnail.image_url,
      categories: this.formatCategories(data.topics)
    };
  }

  private formatCategories(categories): Category[] {
    _.forEach(categories, (category) => {
      const data = this.getAssociatedCategoryData(category.id);
      category.color = _.get(data, 'color');
      category.value = parseInt(_.get(data, 'value'), 10);
    });
    return categories;
  }

  private getAssociatedCategoryData(id: number) {
    if (!this.colorCategoryReference) {
      return { color: '', value: 0 };
    }
    const associatedCategory = _.find(this.colorCategoryReference, (category) => {
          return category.id === id;
        });
    if (!associatedCategory) {
      console.warn('Error when looking for categories color with id:', id);
    } else {
      return { color: associatedCategory.color, value: associatedCategory.value};
    }
  }

  private formatMakers(makers): User[] {
    const formattedMakers = [];
    for (const maker of makers) {
      formattedMakers.push(this.formatUser(maker));
    }
    return formattedMakers;
  }

  private formatUser(user): User {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      headline: user.headline,
      profil_url: user.profile_url,
      image: user.image_url['264px']
    };
  }
}
