import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

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
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;
  let router: Router;
  let navigationOptions: DebugElement[];

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
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has two items in the navigation', () => {
    navigationOptions = fixture.debugElement.queryAll(By.css('a[mat-button]'));
    expect(navigationOptions).toBeTruthy();
    expect(navigationOptions.length).toBe(2);
  });
});
