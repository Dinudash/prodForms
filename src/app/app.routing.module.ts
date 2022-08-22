import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { ProductComponent } from './products/product.component';
import{ prodComponent} from './prods/prod.component';


const routes :Routes =[ 
  {path:'product' ,component:ProductComponent},
  { path: 'product/:id', component: prodComponent },
   {path:'prod',loadChildren: () =>import('./prods/prod.module').then(m =>m.prodModule) } 

  
];


@NgModule ({
  imports : [RouterModule.forRoot(routes)],
  exports :[RouterModule]
}) 
export class AppRoutingModule{}
export const routingComponent = [ProductComponent];
