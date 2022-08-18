import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => (this.products = products))
    console.log('this.products', this.products)
  }

}
