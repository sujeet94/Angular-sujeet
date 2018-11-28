import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { PizzaService } from "../services/pizza.service";
import { FilterService } from "../services/filter.service";
import { PizzaModel } from '../models/pizza.model';
import { Options, ChangeContext } from 'ng5-slider';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public data: any;
  topping = [];
  bread = [];
  cheese = [];
  selectedType: string = "all";
  filterObj = {
    "type": "all",
    "price": [100, 600],
    "topping": [],
    "bread": [],
    "cheese": []
  }
  value: number = 100;
  highValue: number = 600;
  options: Options = {
    floor: 100,
    ceil: 600
  };

  sideNav: boolean = false;

  constructor(private httpService: HttpService, private pizzaService: PizzaService, private filter: FilterService) { }
  public pizzaList: PizzaModel[];
  private allPizza: PizzaModel[];
  ngOnInit() {
    console.log(window.innerWidth);
    if (window.innerWidth > 767)
      this.sideNav = true;
    this.httpService.getData("pizza")
      .subscribe(Response => {
        console.log(Response);
        this.data = Response;
        this.topping = this.data.topping;
        this.bread = this.data.bread;
        this.cheese = this.data.cheese;
        this.allPizza = this.pizzaService.makePizza(this.data);
        this.pizzaList = this.allPizza;
        console.log(this.pizzaList, this.topping, this.bread, this.cheese);
      })
  }

  // VEG FILTER
  vegans(type) {
    console.log(type);
    this.selectedType = type;
    this.filterObj.type = type;
    this.topping.forEach(element => {
      element.selected = false;
    });
    this.pizzaList = this.filter.filterData(this.allPizza, this.filterObj);
  }

  // MAIN FILTER
  updateFilter(some) {
    switch (some) {
      case "topping":
        this.filterObj.topping = [];
        this.topping.forEach(element => {
          if (element.selected == true)
            this.filterObj.topping.push(element.name);
        });
        console.log("this.filterObj.topping", this.filterObj.topping);
        break;
      case "bread":
        this.filterObj.bread = [];
        this.bread.forEach(element => {
          if (element.selected == true)
            this.filterObj.bread.push(element.name);
        });
        break;
      case "cheese":
        this.filterObj.cheese = [];
        this.cheese.forEach(element => {
          if (element.selected == true)
            this.filterObj.cheese.push(element.name);
        });
        break;

      default:
        break;
    }
    console.log(this.filterObj);
    this.pizzaList = this.filter.filterData(this.allPizza, this.filterObj);
    console.log(this.pizzaList)
  }
  //  RESET
  reset() {
    this.filterObj = {
      "type": "all",
      "price": [100, 600],
      "topping": [],
      "bread": [],
      "cheese": []
    }
    this.value = 100;
    this.highValue = 600;
    this.topping.forEach(element => {
      element.selected = false;
    });
    this.bread.forEach(element => {
      element.selected = false;
    });
    this.cheese.forEach(element => {
      element.selected = false;
    });
    this.pizzaList = this.allPizza;
  }

  // PRICE FILTER
  updatePrice() {
    console.log(this.value, this.highValue);
    this.filterObj.price = [this.value, this.highValue];
    this.pizzaList = this.filter.filterData(this.allPizza, this.filterObj);
  }

}
