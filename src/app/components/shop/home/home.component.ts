import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() product!: Product;


  constructor() { }

  ngOnInit(): void {
  }

}
