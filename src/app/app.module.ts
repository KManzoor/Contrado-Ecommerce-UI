import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { ProductService } from './services/product.service';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
// import { AppMaterialModule } from './app-material.module';

@NgModule({  
  declarations: [  
    AppComponent 
  ],  
  imports: [  
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    AppRoutingModule,  
    // AppMaterialModule
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
  
export class AppModule { } 