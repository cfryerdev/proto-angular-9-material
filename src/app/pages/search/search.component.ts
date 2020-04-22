import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from "../../models/item.model";
import { ItemStatus } from "../../models/item-status.enum";

@Component({
  templateUrl: './search.component.html',  
  styleUrls: ['./search.component.css']

})
export class SearchPage  {
  displayedColumns: string[] = ['name', 'created_date'];
  dataSource = new MatTableDataSource(CUSTOM_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

const CUSTOM_DATA: Item[] = [
  {
    id: 1, 
    name: 'Propain Tank', 
    details: 'Custom', 
    amount: 2, 
    status: ItemStatus.FindingMatch,
    created_date: 'Apr 21, 2020'
  },
  {
    id: 2, 
    name: 'Insulin', 
    details: 'Custom', 
    amount: 2, 
    status: ItemStatus.FindingMatch,
    created_date: 'Apr 20, 2020'
  },
  {
    id: 3, 
    name: 'Fuel', 
    details: 'Custom', 
    amount: 6, 
    status: ItemStatus.FindingMatch,
    created_date: 'Apr 15, 2020'
  },
  {
    id: 4, 
    name: 'Vitamin C Tablets', 
    details: 'Custom', 
    amount: 3, 
    status: ItemStatus.FindingMatch,
    created_date: 'Feb 25, 2020'
  },
  {
    id: 5, 
    name: 'Cold Medicine', 
    details: 'Custom', 
    amount: 1, 
    status: ItemStatus.FindingMatch,
    created_date: 'Feb 20, 2020'
  },
  {
    id: 6, 
    name: 'Lactose Free Milk', 
    details: 'Custom',  
    amount: 1,
    status: ItemStatus.FindingMatch,
    created_date: 'Jan 29, 2020'
  }
];