import {Subject} from 'rxjs';

export class ProductService{
    private products: string[] = ['A book'];
    productsUpdated = new Subject();
    
    addProduct(product : string){
        this.products.push(product);
        this.productsUpdated.next(this.products);
    }

    getProducts(){
        return [...this.products];
    }

    removeProduct(productName:string){
        this.products = this.products.filter(p => p !== productName);
        this.productsUpdated.next(this.products);
    }


}