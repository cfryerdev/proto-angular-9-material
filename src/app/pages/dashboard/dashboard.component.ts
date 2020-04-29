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

  getStatusText = (status: ItemStatus): string => {
    switch (status) {
      case ItemStatus.Cancelled:
        return "Cancelled";
      case ItemStatus.DropOffPending:
        return "Drop-Off Pending";
      case ItemStatus.PickUpPending:
        return "Pick-Up Pending";
      case ItemStatus.NewMatch:
        return "New Match";
      case ItemStatus.FindingMatch:
        return "Finding Match";
      default:
        return status.toString();
    }
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
  {
    id: 6, 
    name: 'Diapers', 
    details: 'Individual', 
    amount: 1,
    status: ItemStatus.FindingMatch
    }
];