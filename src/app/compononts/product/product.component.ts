import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productName!:string;
  @Output() removeProduct = new EventEmitter();


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onRemove(){
    //this.removeProduct.emit()
    this.productService.removeProduct(this.productName); 
  }

}
