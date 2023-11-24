import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartProducts :any[] =[]

  constructor(){}

  ngOnInit(): void {
    this.getAllItemsCart();
  }


  getAllItemsCart(){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      console.log(this.cartProducts);
    }
  
  }

}
