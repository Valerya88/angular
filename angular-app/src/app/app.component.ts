import { Component } from '@angular/core';
class Item {
  purchase:string;
  done:boolean;
  price:number;
  constructor(purchase:string, price:number) {
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string = "";
  price:number = 0;
  items:Item[] =
    [
      {purchase: "Хлеб", done:false, price: 15.9},
      {purchase: "Масло", done:false, price: 60},
      {purchase: "Картофель", done:false, price: 70},
      {purchase: "Сыр", done:true, price: 22.9},
      {purchase: "Молоко", done:false, price: 33.9},
    ];
  addItem(text:string, price:number){
    if(text==null || text.trim()=="" || price==null)
      return;
      this.items.push(new Item(text,price));
  }
}
