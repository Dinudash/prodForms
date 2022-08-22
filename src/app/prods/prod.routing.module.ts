import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { prodComponent } from './prod.component';
   

const routes:Routes=[
  {path:'prod',component:prodComponent}
];

@NgModule({
  imports :[RouterModule.forChild(routes)],
  exports :[RouterModule]
})






export class prodRoutingModule{}