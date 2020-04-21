import { DashboardPage } from './pages/dashboard/dashboard.component';
import { ItemsPage } from './pages/items/items.component';
import { NotFoundPage } from './pages/not-found/not-found.component';

var Pages =  {
    DashboardPage,
    ItemsPage,
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