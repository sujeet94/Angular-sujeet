import { Injectable } from '@angular/core';
import { PizzaModel } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterData(pizza: PizzaModel[], { type, price, topping, bread, cheese }) {
    // console.log(pizza, type, price, topping, bread, cheese);

    if (type != 'all') {
      pizza = pizza.filter((ele) => {
        return ele.type == type;
      });
    }

    pizza = pizza.filter((ele) => {
      return ele.price > price[0] && ele.price < price[1];
    });


    pizza = this.filterArrey(pizza, topping, 'topping');
    pizza = this.filterArrey(pizza, bread, 'bread');
    pizza = this.filterArrey(pizza, cheese, 'cheese');

    // let arrey = [];
    // for (let i = 0; i < topping.length; i++) {
    //   let top = pizza.filter(ele => {
    //     return ele.topping == topping[i];
    //   });
    //   arrey = arrey.concat(top);
    // }
    // if (arrey.length > 0)
    //   pizza = arrey;

    // arrey = [];
    // for (let i = 0; i < bread.length; i++) {
    //   let top = pizza.filter(ele => {
    //     return ele.bread == bread[i];
    //   });
    //   arrey = arrey.concat(top);
    // }
    // if (arrey.length > 0)
    //   pizza = arrey;

    // arrey = [];
    // for (let i = 0; i < cheese.length; i++) {
    //   let top = pizza.filter(ele => {
    //     return ele.cheese == cheese[i];
    //   });
    //   arrey = arrey.concat(top);
    // }
    // if (arrey.length > 0)
    //   pizza = arrey;

    return pizza;
  }

  filterArrey(pizza, arr, item) {
    let arrey = [];
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        let top = pizza.filter(ele => {
          if (item == "topping") {
            return ele.topping == arr[i];
          }
          if (item == "bread") {
            return ele.bread == arr[i];
          }
          if (item == "cheese") {
            return ele.cheese == arr[i];
          }
        });
        arrey = arrey.concat(top);
      }
      pizza = arrey;
    }

    return pizza;
  };

}
