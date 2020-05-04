import _ from 'lodash';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() description: string;
  @Input() date: string;
  @Input() author: string;
  @Input() picture: string;
  @Input() categories: object[];

  sampleCategories: object[];
  hasMoreCategories: boolean;

  MAX_DESCRIPTION_LENGTH = 100;

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (!this.categories) { return; }
    this.sampleCategories = this.categories.slice(0, 3);
    this.hasMoreCategories = this.categories.length > 3;
  }

  adaptDescription() {
    if (!this.description) { return; }
    return this.description.length > this.MAX_DESCRIPTION_LENGTH
      ? this.description.slice(0, this.MAX_DESCRIPTION_LENGTH) + '...'
      : this.description;
  }

  goToDetails() {
    const url = '/products/' + this.id;
    this.router.navigate([url]);
  }
}
