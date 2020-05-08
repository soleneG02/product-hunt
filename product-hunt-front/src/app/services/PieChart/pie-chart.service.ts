import _ from 'lodash';
import * as d3 from 'd3';

import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class PieChartService {

  private colorFunction = d3.scaleOrdinal(d3.schemeCategory10);

  constructor() { }

  getCategoryData(data: Category[]): Category[] {
    const allCategories = this.getAllCategoriesArray(data);
    const groupedCategories = _.groupBy(allCategories, (category) => {
      return category.id;
    });
    return this.associateColorsToCategories(groupedCategories);
  }

  private associateColorsToCategories(groupedCategories: object): Category[] {
    const colorCategoryData = [];
    _.forEach(groupedCategories, (arrayOfCategories) => {
      const newData = {
        id: arrayOfCategories[0].id,
        name: arrayOfCategories[0].name,
        slug: arrayOfCategories[0].slug,
        value: arrayOfCategories.length,
        color: this.colorFunction(colorCategoryData.length.toString())
      };
      colorCategoryData.push(newData);
    });
    return colorCategoryData;
  }

  private getAllCategoriesArray(data: any[]): Category[] {
    const allCategories = [];
    for (const product of data) {
      if (!product.topics) {
        return;
      }
      for (const topic of product.topics) {
        allCategories.push(topic);
      }
    }
    return allCategories;
  }
}
