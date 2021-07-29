import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';  


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:51512/Api/Product';  
   
  constructor(private http: HttpClient) { }  
  getProducts(): Observable<Product[]> {  
    let params = new HttpParams();      
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}),params:params };
    
    return this.http.get<Product[]>(this.url + '/GetProducts',httpOptions);  
  }  
  getProductByID(id:any): Observable<Product> {  
    let params = new HttpParams();      
    params = params.append('ID', id);   
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}),params:params };
    
   
    return this.http.get<Product>(this.url + '/GetProductByID',httpOptions);  
  }  
  getProductCategoryAttributeofProduct(product:any): Observable<any[]> {  
    let params = new HttpParams();      
    params = params.append('product', JSON.stringify(product));   
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}),params:params };
    
   
    return this.http.get<any[]>(this.url + '/GetProductCategoryAttributeofProduct',httpOptions);  
  }  
  
   
  updateProduct(product: any): Observable<any> {  
   
    let params = new HttpParams();      
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}),params:params };
    
    return this.http.post<any>(this.url + '/SaveProduct', product, httpOptions);

  }  
  updateProductAttributes(productAttributes: any[]): Observable<any> {  
    
    let params = new HttpParams();      
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}),params:params };
    
    return this.http.post<any>(this.url + '/SaveProductAttributes', productAttributes, httpOptions);

  }  
  
   
  deleteProductById(productId: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.delete<number>(this.url + '/DeleteProductWithDetails?productId=' + productId,  
      httpOptions);  
  }  
   
}
