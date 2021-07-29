import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ManageProductComponent } from '../products/manage-product/manage-product.component';

import { NgModule } from '@angular/core';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { AppMaterialModule } from '../app-material.module';
import { ProductService } from '../services/product.service';
import { AssignAttributeComponent } from './assign-attribute/assign-attribute.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ManageProductComponent,
    AssignAttributeComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,  

    ReactiveFormsModule,  
    HttpClientModule,  
    AppMaterialModule
  ],
  providers: [ProductService],  
  entryComponents: [ManageProductComponent,AssignAttributeComponent]

})
export class ProductsModule { }
