import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/Product/product.service';
import { ApiService } from 'src/app/services/Api/api.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products: Product[];
  displayedDate: Date;
  dayRegexFormat = new RegExp(/^\d{4}\-\d{2}\-\d{2}$/);

  constructor(private apiService: ApiService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getDefaultTodayPosts();
    this.displayedDate = new Date();
  }

  getDefaultTodayPosts() {
    this.apiService.getTodayPosts()
      .subscribe((data: any) => {
        if (!data) { return; }
        if (!data.data) { return; }
        this.products = this.productService.formatData(data.data.posts);
      });
  }

  getCertainDayPosts(day: string) {
    this.apiService.getPostsByDay(day)
      .subscribe((data: any) => {
        if (!data) { return; }
        this.products = this.productService.formatData(data.posts);
      });
  }

  isEmptyProducts() {
    return !this.products || this.products.length === 0;
  }

  changeProductData(event) {
    this.products = undefined; // Show loader while waiting
    this.displayedDate = event.value;
    const formattedDay = this.formatDate(event.value);
    if (!!formattedDay && this.dayRegexFormat.test(formattedDay)) {
      this.getCertainDayPosts(formattedDay);
    } else {
      this.getDefaultTodayPosts();
    }
  }

  private formatDate(date: Date): string {
    if (!(date instanceof Date)) {
      return '';
    }
    const year = date.getFullYear();
    const rawMonth = date.getMonth() + 1;
    const rawDay = date.getDate();

    const month = rawMonth < 10
    ? '0' + rawMonth
    : rawMonth;

    const day = rawDay < 10
      ? '0' + rawDay
      : rawDay;
    return `${year}-${month}-${day}`;
  }

}
