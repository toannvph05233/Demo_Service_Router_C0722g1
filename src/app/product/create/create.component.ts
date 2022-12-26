import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Product = new Product("","",0, false);
  constructor(public productService: ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  create(){
    this.productService.addProduct(this.product);
    console.log(this.product);
    this.router.navigate(["/show"]);
  }
}
