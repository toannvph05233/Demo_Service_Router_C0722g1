import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(public productService: ProductService) { }
  ngOnInit(): void {
  }

  delete(index: number){
    this.productService.deleteProduct(index);
  }
}
