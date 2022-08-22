import {NgModule} from '@angular/core';
import{prodRoutingModule} from './prod.routing.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations:[],
  imports:[
    prodRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule

  ]
})
export class prodModule{}