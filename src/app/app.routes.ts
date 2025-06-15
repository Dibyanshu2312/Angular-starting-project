import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';  
import { Addpro } from './components/addpro/addpro';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  {path:'dashboard',component:Dashboard},
{path:'addproduct',component:Addpro}


];
