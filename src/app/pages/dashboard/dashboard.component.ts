import {Component} from '@angular/core';
import Item from "../../models/item.model";

// export interface Item {
//   position: number;
//   name: string;
//   details: string;
//   amount: number;
//   status: number;
// }

const NEED_DATA: Item[] = [
  {position: 1, name: 'Toothpaste', details: 'Individual', amount: 2, status: 4},
  {position: 2, name: 'Diapers', details: 'Bulk, Size 2', amount: 2, status: 3},
  {position: 3, name: 'Batteries', details: 'AAA Pack of 12', amount: 6, status: 1},
  {position: 4, name: 'Toothpaste', details: 'Family Size', amount: 3, status: 2},
  {position: 5, name: 'Toothpaste', details: 'Individual', amount: 1, status: -1},
  {position: 5, name: 'Diapers', details: 'Individual', amount: 1, status: 0}
];

const SHARING_DATA: Item[] = [
  {position: 1, name: 'Paper Towels', details: 'Bulk, Size 4', amount: 4, status: 4},
  {position: 2, name: 'Toilet Paper', details: 'Bulk, Size 12', amount: 2, status: 2},
];

@Component({
  selector: 'dashboard.component',
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html',
})
export class DashboardPage {
  needs = NEED_DATA;
  sharing = SHARING_DATA;

  getStatusText = (statusId: number): string => {
    switch (statusId) {
      case -1:
        return "Cancelled";
      case 0:
        return "Fulfilled";
      case 1:
        return "Pick-Up Pending";
      case 2:
        return "Drop-Off Pending";
      case 3:
        return "Finding Match";
      case 4:
        return "New Match";
    }
    return "";
  };

}