import {Component} from '@angular/core';

export interface Item {
  position: number;
  name: string;
  details: string;
  amount: number;
  status: number;
}

const NEED_DATA: Item[] = [
  {position: 1, name: 'Toothpaste', details: 'Individual', amount: 2, status: 4},
  {position: 2, name: 'Diapers', details: 'Bulk, Size 2', amount: 2, status: 3},
  {position: 3, name: 'Toothpaste', details: 'Individual', amount: 6, status: 1},
  {position: 4, name: 'Toothpaste', details: 'Family Size', amount: 3, status: 2},
  {position: 5, name: 'Toothpaste', details: 'Individual', amount: 1, status: -1}
];

@Component({
  selector: 'items.component',
  styleUrls: ['items.component.css'],
  templateUrl: 'items.component.html',
})
export class DashboardPage {
  needs = NEED_DATA;
  sharing = NEED_DATA;
}