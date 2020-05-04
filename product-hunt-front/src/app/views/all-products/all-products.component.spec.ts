import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApiService } from 'src/app/services/Api/api.service';

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
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { rawData03MayProducts, formattedData03MayProducts } from 'src/app/tests/03May2020-products';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

const spyApiService = jasmine.createSpyObj('spyApiService', ['getTodayPosts', 'getPostsByDay']);
spyApiService.getTodayPosts.and.returnValue(of(rawData03MayProducts));
spyApiService.getPostsByDay.and.returnValue(of(rawData03MayProducts));

describe('AllProductsComponent', () => {
  let component: AllProductsComponent;
  let fixture: ComponentFixture<AllProductsComponent>;
  let error: DebugElement;
  let sideLayout: DebugElement;
  let header: DebugElement;
  let allProducts: DebugElement[];

  const dayRegexFormatMock = new RegExp(/^\d{4}\-\d{2}\-\d{2}$/);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
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
      providers: [
        {
          provide: ApiService,
          useValue: spyApiService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ApiService to get data ', fakeAsync(() => {
    component.dayRegexFormat = dayRegexFormatMock;
    fixture.detectChanges();

    component.getDefaultTodayPosts();
    tick();

    expect(spyApiService.getTodayPosts).toHaveBeenCalled();
  }));

  it('should call ApiService to get data from specific day data ', fakeAsync(() => {
    spyOn(component, 'getCertainDayPosts');
    component.dayRegexFormat = dayRegexFormatMock;
    fixture.detectChanges();

    const eventMock = { value: new Date() };
    component.changeProductData(eventMock);

    tick();
    expect(component.getCertainDayPosts).toHaveBeenCalled();
    expect(spyApiService.getTodayPosts).toHaveBeenCalled();
  }));

  it('should retrieve default data if day is not correct', fakeAsync(() => {
    spyOn(component, 'getDefaultTodayPosts');
    component.dayRegexFormat = dayRegexFormatMock;
    fixture.detectChanges();

    const eventMock = { value: 'fake date' };
    component.changeProductData(eventMock);

    tick();
    expect(component.getDefaultTodayPosts).toHaveBeenCalled();
    expect(spyApiService.getTodayPosts).toHaveBeenCalled();
  }));

  it('should call changeProductData when receiving event', fakeAsync(() => {
    spyOn(component, 'changeProductData');
    const eventMock = { value: new Date()};

    component.products = formattedData03MayProducts;
    fixture.detectChanges();

    header = fixture.debugElement.query(By.css('app-header'));
    header.triggerEventHandler('changedDate', eventMock);

    tick();
    expect(component.changeProductData).toHaveBeenCalled();
  }));

  it('should display side-layout', () => {
    component.products = formattedData03MayProducts;
    fixture.detectChanges();

    sideLayout = fixture.debugElement.query(By.css('app-side-layout'));
    expect(sideLayout).toBeTruthy();
  });

  it('should show error message when no products for the day', () => {
    component.products = [];
    fixture.detectChanges();

    error = fixture.debugElement.query(By.css('.all-products__body-list--none'));
    expect(error).toBeTruthy();
    expect(error.nativeElement.textContent.trim()).toBe('No product posted yet today...');
  });

  it('should display header', () => {
    component.products = formattedData03MayProducts;
    fixture.detectChanges();

    header = fixture.debugElement.query(By.css('app-header'));
    expect(header).toBeTruthy();
  });

  it('should show correct number of product box', () => {
    component.products = formattedData03MayProducts;
    fixture.detectChanges();

    allProducts = fixture.debugElement.queryAll(By.css('app-product-box'));
    expect(allProducts).toBeTruthy();
    expect(allProducts.length).toBe(2);
  });
});
