import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Product';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  id: any;

  constructor(private productService: ProductService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.productService.getProductById(this.id).subscribe((product) => this.product = product)
    console.log('this.product', this.product)
  }

}
