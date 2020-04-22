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
    name: 'Toothpaste', 
    details: 'Individual', 
    amount: 2, 
    status: ItemStatus.FindingMatch,
    created_date: 'April 21, 2020'
  },
  {
    id: 2, 
    name: 'Diapers', 
    details: 'Bulk, Size 2', 
    amount: 2, 
    status: ItemStatus.FindingMatch,
    created_date: 'April 21, 2020'
  },
  {
    id: 3, 
    name: 'Batteries', 
    details: 'AAA Pack of 12', 
    amount: 6, 
    status: ItemStatus.FindingMatch,
    created_date: 'April 21, 2020'
  },
  {
    id: 4, 
    name: 'Toothpaste', 
    details: 'Family Size', 
    amount: 3, 
    status: ItemStatus.FindingMatch,
    created_date: 'April 21, 2020'
  },
  {
    id: 5, 
    name: 'Toothpaste', 
    details: 'Individual', 
    amount: 1, 
    status: ItemStatus.FindingMatch,
    created_date: 'April 21, 2020'
  },
  {
    id: 6, 
    name: 'Diapers', 
    details: 'Individual', 
    amount: 1,
    status: ItemStatus.FindingMatch,
    created_date: 'April 21, 2020'
  }
];