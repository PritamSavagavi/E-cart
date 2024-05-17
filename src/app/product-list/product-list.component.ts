import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  product = {
    name: 'iPhone',
    price: 999,
    color: 'Red',
    discount: 78,
    stock: 10,
  };
  name :string = 'John Carter';
  mobileSrc: string = '/assets/Images/iphone-14-pro.png';
  cartCounter : number = 0;

  inStock: string | number =
    this.product.stock > 0 ? this.product.stock.toString() : 'Not in stock';
  getStockColor(): string {
    return this.product.stock == 0 ? 'red' : 'inherit';
  }
  getDiscount() {
    var discountedPrice = this.product.price - this.product.discount;
  }
  decCounter()
  {
    if(!(this.cartCounter<1))
    this.cartCounter--;
  }
  incCounter()
  {
    if(this.cartCounter<this.product.stock)
    this.cartCounter++;
  }
}
