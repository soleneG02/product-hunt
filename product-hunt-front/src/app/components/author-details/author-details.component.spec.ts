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
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { formattedData03MaySingleProduct } from 'src/app/tests/03May2020-detailled-product';

describe('AuthorDetailsComponent', () => {
  let component: AuthorDetailsComponent;
  let fixture: ComponentFixture<AuthorDetailsComponent>;
  let authorBox: DebugElement;
  let makerBox: DebugElement;


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
    fixture = TestBed.createComponent(AuthorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show author box if there is an author', () => {
    component.author = formattedData03MaySingleProduct.author;
    fixture.detectChanges();

    authorBox = fixture.debugElement.query(By.css('.author__box'));
    expect(authorBox).toBeTruthy();
  });

  it('should not show makers box if there is no maker', () => {
    component.author = formattedData03MaySingleProduct.author;
    component.makers = [];
    fixture.detectChanges();

    makerBox = fixture.debugElement.query(By.css('.makers__box'));
    expect(makerBox).toBeFalsy();
  });

  it('should show makers box if there are makers', () => {
    component.author = formattedData03MaySingleProduct.author;
    component.makers = formattedData03MaySingleProduct.makers;
    fixture.detectChanges();

    makerBox = fixture.debugElement.query(By.css('.makers__box'));
    expect(makerBox).toBeFalsy();
  });
});
