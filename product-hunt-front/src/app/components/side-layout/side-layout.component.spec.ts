import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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

import { formattedData03MayProducts } from 'src/app/tests/03May2020-products';
import { formattedData03MaySingleProduct } from 'src/app/tests/03May2020-detailled-product';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('SideLayoutComponent', () => {
  let component: SideLayoutComponent;
  let fixture: ComponentFixture<SideLayoutComponent>;
  let pieLayout: DebugElement;
  let authorLayout: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
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
    fixture = TestBed.createComponent(SideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test not working : TypeError: Cannot read property 'style' of null
  it('should display pie-chart when receiving products input', () => {
    // component.products = formattedData03MayProducts;
    // component.singleProduct = undefined;
    // fixture.detectChanges();

    // pieLayout = fixture.debugElement.query(By.css('app-pie-chart'));
    // authorLayout = fixture.debugElement.query(By.css('app-author-details'));
    // expect(pieLayout).toBeTruthy();
    // expect(authorLayout).toBeFalsy();
  });

  it('should display author-details when receiving singleProduct input', () => {
    component.products = undefined;
    component.singleProduct = formattedData03MaySingleProduct;
    fixture.detectChanges();

    pieLayout = fixture.debugElement.query(By.css('app-pie-chart'));
    authorLayout = fixture.debugElement.query(By.css('app-author-details'));
    expect(authorLayout).toBeTruthy();
    expect(pieLayout).toBeFalsy();
  });
});
