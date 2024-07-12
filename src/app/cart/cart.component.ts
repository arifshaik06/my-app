import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public name: string = '';
  public price: number = 0;
  public rating: number = 0;

  public cartItem: any[] = [{}];

  constructor() { }

  ngOnInit(): void {
  }
  addtocart(name: string, price: number, rating: number) {
    this.cartItem.push({ name, price, rating });
    this.reset();
  }
  reset() {
    this.name = "";
    this.price = 0;
    this.rating = 0;
  }
}
