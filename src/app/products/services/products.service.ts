import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  //Get All Products:
  getAllProductsService(){
   return this.http.get<any>('https://fakestoreapi.com/products');
  }

  //Get All Categories:
  getAllCategoriesService(){
    return this.http.get<any>('https://fakestoreapi.com/products/categories');
  }

  //Filter Categories:
  getFilterCategorieService(key:any){
    return this.http.get<any>(`https://fakestoreapi.com/products/category/${key}`);
  }
}
