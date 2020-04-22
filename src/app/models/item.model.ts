import { ItemStatus } from "./item-status.enum";

export interface Item {
  id: number;
  name: string;
  details: string;
  amount: number;
  status: ItemStatus;
  created_date: string;
}