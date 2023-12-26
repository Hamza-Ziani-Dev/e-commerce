import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailsProductsComponent } from './details_products/details-products.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { UsersComponent } from './users/users.component';
import { DetailsUsersComponent } from './details-users/details-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailsProductsComponent,
    UsersComponent,
    DetailsUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    CartModule,
    MatTableModule,
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
