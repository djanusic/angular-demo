import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetail(product_id: any): void {
    this.router.navigate(['/product', product_id])
  }

}
