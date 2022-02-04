import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnDestroy{
  
  productName = "A Tree";
  isDesabled = true;
  products: string[] = [];
  private productsSubscription = new Subscription();
  
  constructor(private productService : ProductService){
    this.isDesabled = false;
    setTimeout(() => {
      //
    }, 500); 
  }
  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
  
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productsSubscription = this.productService.productsUpdated.subscribe(()=>{
      this.products = this.productService.getProducts();
    });
  } 
  
  changeName(){
    this.productName = "A book";
  }
  addProduct(form:any){
    if(form.valid)
      this.productService.addProduct(form.value.productName);
  }
  removeProduct(productName:string){
    this.productService.removeProduct(productName);
  }

}
