import { Component, OnInit, Input } from '@angular/core';
import { PizzaModel } from '../../models/pizza.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() pizza: PizzaModel;
  constructor() { }

  ngOnInit() {
  }

}
