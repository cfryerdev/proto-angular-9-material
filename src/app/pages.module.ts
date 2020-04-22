import { DashboardPage } from './pages/dashboard/dashboard.component';
import { ItemsPage } from './pages/items/items.component';
import { SearchPage } from './pages/search/search.component';
import { NotFoundPage } from './pages/not-found/not-found.component';
import { AddEditItemPage } from './pages/addedit-item/addedit-item.component';

var Pages =  {
    DashboardPage,
    ItemsPage,
    SearchPage,
    AddEditItemPage,
    NotFoundPage
};

function GetPageModules() {
  let list: any[] = [];
  Object.keys(Pages).forEach(n => { 
    list.push(Pages[n])
  });
  return list;
}

export {
  Pages,
  GetPageModules
};