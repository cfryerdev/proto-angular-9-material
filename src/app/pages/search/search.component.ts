import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from "../../models/item.model";
import { ItemStatus } from "../../models/item-status.enum";

@Component({
  templateUrl: './search.component.html',  
  styleUrls: ['./search.component.css']

})
export class SearchPage  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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
    status: ItemStatus.NewMatch
  },
  {
    id: 2, 
    name: 'Diapers', 
    details: 'Bulk, Size 2', 
    amount: 2, 
    status: ItemStatus.FindingMatch
  },
  {
    id: 3, 
    name: 'Batteries', 
    details: 'AAA Pack of 12', 
    amount: 6, 
    status: ItemStatus.PickUpPending
  },
  {
    id: 4, 
    name: 'Toothpaste', 
    details: 'Family Size', 
    amount: 3, 
    status: ItemStatus.DropOffPending
  },
  {
    id: 5, 
    name: 'Toothpaste', 
    details: 'Individual', 
    amount: 1, 
    status: ItemStatus.Cancelled
  },
  {
    id: 6, 
    name: 'Diapers', 
    details: 'Individual', 
    amount: 1,
    status: ItemStatus.FindingMatch
    }
];