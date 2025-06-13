import { Routes } from '@angular/router';
import { AddProductComponent } from './addproduct/addproduct';
import { Dashboard } from './dashboard/dashboard';
import { Addproduct } from './services/myservice';

export const routes: Routes = [

  {path:'dashboard',component:Dashboard},
  {path:'addproduct',component:AddProductComponent}

];
