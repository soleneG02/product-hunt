import * as d3 from 'd3';
import _ from 'lodash';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/Product/product.service';
import { Category } from 'src/app/models/category.model';
import { ShortProduct } from 'src/app/models/short-product.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})


export class PieChartComponent implements OnInit {
  @Input() parentID: string;

  radius: number;
  formattedData: Category[];

  private arc: any;
  private pie: any;
  private slices: any;
  private svg: any;
  private mainContainer: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.formattedData = this.productService.colorCategoryReference;
    this.drawPieChart();
  }

  hasData() {
    return this.formattedData.length !== 0;
  }

  resizePieChart() {
    this.removePieChart();
    this.drawPieChart();
  }

  private drawPieChart() {
    this.svg = d3.select('#pie').select('svg');
    this.setSVGDimensions();
    this.mainContainer = this.svg
      .append('g')
      .attr('transform', `translate(${this.radius},${this.radius})`);
    this.pie = d3.pie()
      .sort(null)
      .value((d: any) => d.value);
    this.draw();
  }

  private removePieChart() {
    d3.select('g').remove().exit();
  }

  private setSVGDimensions() {
    const dim = this.getParentDimensions();
    this.radius = (Math.min(dim[0], dim[1])) / 2.5;
    this.svg
      .attr('width', 2 * this.radius)
      .attr('height', 2 * this.radius);
  }

  private getParentDimensions() {
    if (!this.parentID) {
      return [0, 0];
    }
    const parentElt = d3.select(this.parentID);
    console.log(parentElt, _.get(parentElt, 'style'))
    return _.get(parentElt, 'style')
      ? [parseInt(parentElt.style('height'), 10), parseInt(parentElt.style('width'), 10)]
      : [0, 0];
  }

  private draw() {
    this.setArcs();
    this.drawSlices();
  }

  private setArcs() {
    this.arc = d3.arc()
      .outerRadius(this.radius)
      .innerRadius(0);
  }

  private drawSlices() {
    if (!this.formattedData) { return; }
    this.slices = this.mainContainer.selectAll('path')
      .remove().exit()
      .data(this.pie(this.formattedData))
      .enter().append('g').append('path')
      .attr('d', this.arc);
    this.slices
      .attr('fill', (d) => d.data.color);
  }
}
