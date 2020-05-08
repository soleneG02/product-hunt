import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/Product/product.service';
import { ApiService } from 'src/app/services/Api/api.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  id: number;
  product: any;

  constructor(
    private apiService: ApiService,
    private productService: ProductService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    if (!this.id) {
      this.id = parseInt(this.route.snapshot.params.id, 10);
    }
    this.getSinglePost();
  }

  getSinglePost() {
    this.apiService.getPostById(this.id)
      .subscribe((data: any) => {
        if (!data) { return; }
        const postData = data.post;
        this.product = this.productService.formatSinglePost(postData);
      });
  }
}

