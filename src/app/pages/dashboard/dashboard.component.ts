import { Component } from '@angular/core';
import { Item } from "../../models/item.model";
import { ItemStatus } from "../../models/item-status.enum";

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

// Test Data

const NEED_DATA: Item[] = [
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

const SHARING_DATA: Item[] = [
  {
    id: 7, 
    name: 'Paper Towels', 
    details: 'Bulk, Size 4', 
    amount: 4, 
    status: ItemStatus.NewMatch
  },
  {
    id: 8, 
    name: 'Toilet Paper', 
    details: 'Bulk, Size 12', 
    amount: 2, 
    status: ItemStatus.DropOffPending
  },
];