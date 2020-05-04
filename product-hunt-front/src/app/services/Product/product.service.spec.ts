import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { rawData03MayProducts, formattedData03MayProducts } from 'src/app/tests/03May2020-products';
import { rawData03MaySingleProduct, formattedData03MaySingleProduct } from 'src/app/tests/03May2020-detailled-product';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly format data', () => {
    const result = service.formatData(rawData03MayProducts);
    expect(result).toEqual(formattedData03MayProducts);
  });

  it('should correctly format single post', () => {
    const result = service.formatSinglePost(rawData03MaySingleProduct);
    expect(result).toEqual(formattedData03MaySingleProduct);
  });
});
