import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsProductsService {

  constructor(private http:HttpClient ) { }


  //detail Categorie:
  getDetailCategorieService(id:any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
