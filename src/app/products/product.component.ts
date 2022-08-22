import { Component,OnInit } from "@angular/core";
import { Bulkdataservice } from '../services/bulkdata.service'; 
import { Product } from './product';
import {  Router } from '@angular/router';



@Component({
  selector :'app-product',
  templateUrl:'./product.component.html',
  styleUrls: ['./product.component.css'],
   

}) 
 export class ProductComponent implements OnInit{
  products : Array<Product>;

  constructor(private bulkdataservice: Bulkdataservice,private router: Router) {}


  ngOnInit(): void {
    this.bulkdataservice.getProducts().subscribe((data: any[]) => {
      this.products = (data as any).products; 
      console.log(this.products);
      console.log(data);
    });
  }
  getprod(event: any, product: any): void {
    console.log(event);
    this.router.navigate(['/product', product.id]);
  }


 }