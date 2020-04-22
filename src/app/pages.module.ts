import { DashboardPage } from './pages/dashboard/dashboard.component';
import { AccountPage } from './pages/account/account.component';
import { ItemsPage } from './pages/items/items.component';
import { SearchPage } from './pages/search/search.component';
import { NotFoundPage } from './pages/not-found/not-found.component';
import { AddEditItemPage } from './pages/addedit-item/addedit-item.component';
import { AddEditCustomPage } from './pages/addedit-custom/addedit-custom.component';

var Pages =  {
    DashboardPage,
    AccountPage,
    ItemsPage,
    SearchPage,
    AddEditItemPage,
    AddEditCustomPage,
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