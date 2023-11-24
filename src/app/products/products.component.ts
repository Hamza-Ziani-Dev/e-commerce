import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products :any[]= [];
  categories :any[]= [];
  loading = false;
  cartProducts :any[]= [];
  amount:number = 0;

  vl = false

  constructor(
    private productsService:ProductsService,
    private spinner: NgxSpinnerService
    ){}
  ngOnInit(): void {
      this.loading = true
      this.getProducts();
      this.getCategories();
  }

  //Get All Products:
  getProducts(){
    return this.productsService.getProductsService().subscribe((product:any)=>{
      try {
        this.products = product;
          this.loading = false
      } catch (error) {
        console.log(error);
      }
    })
  }

    //Get All Categories:
  getCategories(){
      return this.productsService.getCategoriesService().subscribe((categorie:any)=>{
        try {
          this.categories = categorie;
          console.log(this.categories);
        } catch (error) {
          console.log(error);
        }
      })
  }

  // //Get Categories:
  getCategorie(event:any){
    let cat = event.target.value;
    if(cat == 'all'){
      this.getProducts();
    }else{
      this.getFilterCategories(cat);
    } 
  }

  // //Get Categories:
  getFilterCategories(key:any){
    return this.productsService.getFilterCategorieService(key).subscribe((res)=>{
      this.products = res;
    })
  }

  // //Add :
  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find((item)=> item.id == event.id);
      if(exist){
        alert(`This product ${event.id}  is already added to the cart`);
      }else{
        this.cartProducts.push({item: event,quantity:this.amount})
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }
    }else{
      this.cartProducts.push({item: event,quantity:this.amount})
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
    
  }
  



}
