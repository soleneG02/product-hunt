import { TestBed } from '@angular/core/testing';

import { PieChartService } from './pie-chart.service';
import { rawData03MayProducts } from 'src/app/tests/03May2020-products';

describe('PieChartService', () => {
  let service: PieChartService;

  const allCategoriesMock = [
    {
      id: 46,
      name: 'Productivity',
      slug: 'productivity',
      color: '#1f77b4',
      value: 1
    },
    {
      id: 82,
      name: 'Parenting',
      slug: 'parenting',
      color: '#ff7f0e',
      value: 1
    },
    {
      id: 104,
      name: 'Social Media Tools',
      slug: 'social-media-tools',
      color: '#2ca02c',
      value: 1
    },
    {
      id: 157,
      name: 'Kids',
      slug: 'kids',
      color: '#d62728',
      value: 1
    },
    {
      id: 352,
      name: 'Tech',
      slug: 'tech',
      color: '#9467bd',
      value: 2
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get correct categories data', () => {
    const result = service.getCategoryData(rawData03MayProducts);
    expect(result).toEqual(allCategoriesMock);
  });
});
