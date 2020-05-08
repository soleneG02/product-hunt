import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  @Input() product: Product;

  sampleCategories: object[];
  hasMoreCategories: boolean;

  MAX_DESCRIPTION_LENGTH = 100;

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (!this.product.categories) { return; }
    this.sampleCategories = this.product.categories.slice(0, 3);
    this.hasMoreCategories = this.product.categories.length > 3;
  }

  adaptDescription(): string {
    if (!this.product.description) { return; }
    return this.product.description.length > this.MAX_DESCRIPTION_LENGTH
      ? this.product.description.slice(0, this.MAX_DESCRIPTION_LENGTH) + '...'
      : this.product.description;
  }

  goToDetails() {
    const url = '/products/' + this.product.id;
    this.router.navigate([url]);
  }
}
