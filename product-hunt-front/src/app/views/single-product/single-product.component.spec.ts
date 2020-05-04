import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from 'src/app/app.component';
import { NavigationBarComponent } from 'src/app/components/navigation-bar/navigation-bar.component';
import { ProductBoxComponent } from 'src/app/components/product-box/product-box.component';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SideLayoutComponent } from 'src/app/components/side-layout/side-layout.component';
import { AllProductsComponent } from 'src/app/views/all-products/all-products.component';
import { SingleProductComponent } from 'src/app/views/single-product/single-product.component';
import { AuthorDetailsComponent } from 'src/app/components/author-details/author-details.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { formattedData03MaySingleProduct, rawData03MaySingleProduct } from 'src/app/tests/03May2020-detailled-product';
import { Router } from '@angular/router';
import { of } from 'rxjs';

const spyApiService = jasmine.createSpyObj('spyApiService', ['getPostById']);
spyApiService.getPostById.and.returnValue(of(rawData03MaySingleProduct));

describe('SingleProductComponent', () => {
  let component: SingleProductComponent;
  let fixture: ComponentFixture<SingleProductComponent>;
  let router: Router;
  let loader: DebugElement;
  let sideLayout: DebugElement;
  let title: DebugElement;
  let subtitle: DebugElement;
  let chipList: DebugElement;
  let description: DebugElement;
  let img: DebugElement;
  let votes: DebugElement;
  let comments: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatChipsModule,
        MatProgressSpinnerModule
      ],
      declarations: [
        AppComponent,
        NavigationBarComponent,
        ProductBoxComponent,
        PieChartComponent,
        HeaderComponent,
        SideLayoutComponent,
        AllProductsComponent,
        SingleProductComponent,
        AuthorDetailsComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(SingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading while waiting for product', () => {
    component.product = undefined;
    fixture.detectChanges();

    loader = fixture.debugElement.query(By.css('mat-spinner'));
    expect(loader).toBeTruthy();
  });

  it('should show side layout component', () => {
    component.product = formattedData03MaySingleProduct;
    fixture.detectChanges();

    sideLayout = fixture.debugElement.query(By.css('app-side-layout'));
    expect(sideLayout).toBeTruthy();
  });

  it('should display header data', () => {
    component.product = formattedData03MaySingleProduct;
    const subtitleMock = `Posted on ${formattedData03MaySingleProduct.date}`;
    fixture.detectChanges();

    title = fixture.debugElement.query(By.css('.single-product__header-title'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent.trim()).toBe(formattedData03MaySingleProduct.name);

    subtitle = fixture.debugElement.query(By.css('.single-product__header-subtitle'));
    expect(subtitle).toBeTruthy();
    expect(subtitle.nativeElement.textContent.trim()).toBe(subtitleMock);
  });

  it('should display categories', () => {
    component.product = formattedData03MaySingleProduct;
    fixture.detectChanges();

    chipList = fixture.debugElement.query(By.css('mat-chip-list'));
    expect(chipList).toBeTruthy();
  });

  it('should display picture', () => {
    component.product = formattedData03MaySingleProduct;
    fixture.detectChanges();

    img = fixture.debugElement.query(By.css('.single-product__product-image'));
    expect(img).toBeTruthy();
    expect(img.nativeElement.src).toBe(formattedData03MaySingleProduct.picture);
    expect(img.nativeElement.alt).toBe(formattedData03MaySingleProduct.name);
  });

  it('should display description', () => {
    component.product = formattedData03MaySingleProduct;
    fixture.detectChanges();

    description = fixture.debugElement.query(By.css('.single-product__description-content--body'));
    expect(description).toBeTruthy();
    expect(description.nativeElement.textContent.trim()).toBe(formattedData03MaySingleProduct.description);
  });

  it('should display votes and comments', () => {
    component.product = formattedData03MaySingleProduct;
    fixture.detectChanges();

    comments = fixture.debugElement.query(By.css('.single-product__comments'));
    votes = fixture.debugElement.query(By.css('.single-product__votes'));
    expect(comments).toBeTruthy();
    expect(votes).toBeTruthy();
    expect(comments.nativeElement.textContent.trim()).toBe(formattedData03MaySingleProduct.comments + ' comments');
    expect(votes.nativeElement.textContent.trim()).toBe(formattedData03MaySingleProduct.votes + ' votes');
  });
});
