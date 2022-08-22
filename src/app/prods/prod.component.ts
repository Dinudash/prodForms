import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { appConstant } from '../app.constant';
import { environment } from '../environments/environment';
import { Product } from '../products/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app.prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css'],
})
export class prodComponent implements OnInit {
  product: Product | any = '';
  productForm: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getprod((data as any).id);
    });
    this.initialize();
  }

  initialize() {
    this.initializeForm(this.product);
  }

  initializeForm(product: any) {
    this.productForm = this.fb.group({
      title: [product.title, Validators.required],
      description: [product.description, Validators.required],
      brand: [product.brand ,Validators.required],
      category: [product.category,Validators.required],
      price: [product.price,Validators.required]
    });
  }
  onSubmit(formValue: any, isValid: boolean) {
    console.log(formValue);
    console.log(isValid);
  }

  getprod(id: number): any {
    this.http
      .get(`${environment.url}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
        this.initializeForm(data);
        console.log(data);
      });
  }
}
