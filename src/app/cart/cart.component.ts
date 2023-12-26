import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartProducts :any[] =[]
  total :any;
  constructor(){}

  ngOnInit(): void {
    this.getTatalCart();
    this.getAllItemsCart();
  }


  getAllItemsCart(){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      // console.log(this.cartProducts);
    }
  }

  getTatalCart(){
    this.total = 0;
    for(let i in this.cartProducts){
      this.total += Number(this.cartProducts[i].price) * Number(this.cartProducts[i].quantity)
    }
  }

}
