import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Joe", "Smith", "jsmith@gmail.com", 50000),
    new SalesPerson("Axl", "Rose", "arose@gmail.com", 40000),
    new SalesPerson("Eddie", "Vedder", "evedder@gmail.com", 70000),
    new SalesPerson("Chris", "Cornell", "ccornell@gmail.com", 60000)
  ];

  constructor() {}
  ngOnInit() {
  }

}
