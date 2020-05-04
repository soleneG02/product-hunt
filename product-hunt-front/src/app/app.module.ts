import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { SideLayoutComponent } from './components/side-layout/side-layout.component';
import { AllProductsComponent } from './views/all-products/all-products.component';
import { SingleProductComponent } from './views/single-product/single-product.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';


const appRoutes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: 'products/:id', component: SingleProductComponent },
  { path: '**', redirectTo: '/products'}
];

@NgModule({
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
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
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
