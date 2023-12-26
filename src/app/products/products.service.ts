import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api_products = environment.API
  constructor(private http:HttpClient) { }

  //Get All Products:
  getProductsService(){
   return this.http.get('https://fakestoreapi.com/products');
  }

  //Get Categories:
  getCategoriesService(){
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  //Filter Categories:
  getFilterCategorieService(key:any){
    return this.http.get<any>(`https://fakestoreapi.com/products/category/${key}`);
  }

    // //Get Products By Id:
    getProductById(id:any){
      return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
    }


}

