import _ from 'lodash';
import { Component, OnInit, Input } from '@angular/core';
import { ShortProduct } from 'src/app/models/short-product.model';
import { DetailledProduct } from 'src/app/models/detailled-product.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-side-layout',
  templateUrl: './side-layout.component.html',
  styleUrls: ['./side-layout.component.scss']
})
export class SideLayoutComponent implements OnInit {

  @Input() products: ShortProduct[];
  @Input() singleProduct: DetailledProduct;

  userData: User;
  makersWithoutAuthor: User[];

  constructor() { }

  ngOnInit(): void {
    if (this.singleProduct) {
      this.userData = this.singleProduct.author;
      this.makersWithoutAuthor = _.filter(this.singleProduct.makers, (maker) => {
        return maker.id !== this.userData.id;
      });
    }
  }

}
