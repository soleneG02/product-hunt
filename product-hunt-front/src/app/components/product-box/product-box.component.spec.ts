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
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { formattedData03MaySingleProduct } from 'src/app/tests/03May2020-detailled-product';


describe('ProductBoxComponent', () => {
  let component: ProductBoxComponent;
  let fixture: ComponentFixture<ProductBoxComponent>;
  let router: Router;
  let title: DebugElement;
  let subtitle: DebugElement;
  let img: DebugElement;
  let description: DebugElement;
  let button: DebugElement;
  let chipList: DebugElement;

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
    fixture = TestBed.createComponent(ProductBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display header data', () => {
    component.name = formattedData03MaySingleProduct.name;
    component.date = formattedData03MaySingleProduct.date;
    component.author = formattedData03MaySingleProduct.author.name;
    const subtitleMock = `Posted on ${formattedData03MaySingleProduct.date} by ${formattedData03MaySingleProduct.author.name}`;
    fixture.detectChanges();

    title = fixture.debugElement.query(By.css('mat-card-title'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent.trim()).toBe(formattedData03MaySingleProduct.name);

    subtitle = fixture.debugElement.query(By.css('mat-card-subtitle'));
    expect(subtitle).toBeTruthy();
    expect(subtitle.nativeElement.textContent.trim()).toBe(subtitleMock);
  });

  it('should display categories', () => {
    component.categories = formattedData03MaySingleProduct.categories;
    fixture.detectChanges();

    chipList = fixture.debugElement.query(By.css('mat-chip-list'));
    expect(chipList).toBeTruthy();
  });

  it('should display picture', () => {
    component.picture = formattedData03MaySingleProduct.picture;
    component.name = formattedData03MaySingleProduct.name;
    fixture.detectChanges();

    img = fixture.debugElement.query(By.css('.product-box__image'));
    expect(img).toBeTruthy();
    expect(img.nativeElement.src).toBe(formattedData03MaySingleProduct.picture);
    expect(img.nativeElement.alt).toBe(formattedData03MaySingleProduct.name);
  });

  it('should display and adapt description', () => {
    component.description = formattedData03MaySingleProduct.description;
    const adaptedDescriptionMock = formattedData03MaySingleProduct.description.slice(0, 100) + '...';
    fixture.detectChanges();

    description = fixture.debugElement.query(By.css('.product-box__description-content'));
    expect(description).toBeTruthy();
    expect(description.nativeElement.textContent.trim()).toBe(adaptedDescriptionMock);
  });

  it('should call goToDetails when clicking on button', fakeAsync(() => {
    spyOn(component, 'goToDetails');

    button = fixture.debugElement.query(By.css('a[mat-raised-button]'));
    button.nativeElement.click();
    tick();
    expect(component.goToDetails).toHaveBeenCalled();
  }));
});
