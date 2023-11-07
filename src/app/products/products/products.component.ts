import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products :any[]= [];
  categories :any[]= [];

  vl = false

  constructor(
    private productsService:ProductsService,
    private spinner: NgxSpinnerService
    ){}
  ngOnInit(): void {
      this.spinner.show();
      this.getAllProducts();
      this.getAllCategories();
  }

  //Get All Products:
  getAllProducts(){
    return this.productsService.getAllProductsService().subscribe((product:any)=>{
      try {
        this.products = product;
          this.spinner.hide();
      } catch (error) {
        console.log(error);
      }
    })
  }

    //Get All Categories:
  getAllCategories(){
      return this.productsService.getAllCategoriesService().subscribe((categorie:any)=>{
        try {
          this.categories = categorie;
        } catch (error) {
          console.log(error);
        }
      })
  }

  //Get Categories:
  getCategorie(event:any){
    let cat = event.target.value;
    if(cat == 'all'){
      this.getAllProducts();
    }else{
      this.getFilterCategories(cat);
    } 
  }

  //Get Categories:
  getFilterCategories(key:any){
    return this.productsService.getFilterCategorieService(key).subscribe((res)=>{
      this.products = res;
    })

  }



}
