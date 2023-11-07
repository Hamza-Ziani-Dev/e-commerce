import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products/products.component';
import { DetailsProductsComponent } from './details_products/details-products/details-products.component';
import { CartComponent } from './cart/cart/cart.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'details', component: DetailsProductsComponent },
  { path: 'cart', component: CartComponent },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ]
})
export class AppRoutingModule { }
