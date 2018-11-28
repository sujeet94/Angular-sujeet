import { Injectable } from '@angular/core';
import { PizzaModel } from "../models/pizza.model";
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzaList: PizzaModel[] = [];
  topping = [];
  bread = [];
  cheese = [];
  constructor() { }

  makePizza(data: any) {
    this.topping = data.topping;
    this.bread = data.bread;
    this.cheese = data.cheese;
    for (let i = 0; i < this.topping.length; i++) {
      for (let j = 0; j < this.bread.length; j++) {
        for (let k = 0; k < this.cheese.length; k++) {
          this.pizzaList.push(new PizzaModel(
            "" + this.topping[i].id + this.bread[j].id + this.cheese[k].id,
            this.topping[i].name,
            this.bread[j].name,
            this.cheese[k].name,
            this.topping[i].price + this.bread[j].price + this.cheese[k].price,
            this.topping[i].image,
            this.topping[i].type
          ))
        }

      }

    }
    return this.pizzaList;
  }
}
