import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { DetailsProductsComponent } from './details_products/details-products.component';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';
import { DetailsUsersComponent } from './details-users/details-users.component';
import { usersResolver } from './services/users.resolver';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'details/:id', component: DetailsProductsComponent },
  { path: 'detailsUsers/:uuid', component: DetailsUsersComponent,resolve: { resolvedResponse: usersResolver }  },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo:"products" , pathMatch:"full"},
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
