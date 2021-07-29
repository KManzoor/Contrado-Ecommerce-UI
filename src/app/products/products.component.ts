import { Component, OnInit, ViewChild } from '@angular/core';  
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import {ProductService } from '../services/product.service';  
import { Product } from '../model/Product';  
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';  
import { MatTableDataSource, } from '@angular/material/table';  
import { MatPaginator,PageEvent } from '@angular/material/paginator';  
import { MatSort } from '@angular/material/sort';  
import { SelectionModel } from '@angular/cdk/collections';  
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ManageProductComponent } from '../products/manage-product/manage-product.component';
import { ChangeDetectorRef,AfterContentChecked} from '@angular/core'
import { AssignAttributeComponent } from '../products/assign-attribute/assign-attribute.component';

   
   
interface Country {  
  CountryId: string;  
  CountryName: string;  
}  
interface State {  
  StateId: string;  
  StateName: string;  
  CountryId: string;  
}  
interface City {  
  Cityid: string;  
  CityName: string;  
  StateId: string;  
  CountryId: string;  
}  

 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,AfterContentChecked {

  dataSaved = false;  
  employeeForm: any;  
  allEmployees: Observable<Product[]>;  
  dataSource: MatTableDataSource<Product>;  
  selection = new SelectionModel<Product>(true, []);  
  employeeIdUpdate = null;  
  massage = null;  
  allCountry: Observable<Country[]>;  
  allState: Observable<State[]>;  
  allCity: Observable<City[]>;  
  CountryId = null;  
  StateId = null;  
  CityId = null;  
  SelectedDate = null;  
  isMale = true;  
  isFeMale = false;  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';  
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';  
  displayedColumns: string[] = ['PName', 'ProductCatID', 'PDesc', 'Edit', 'Delete',"Assign"];  
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;  
  @ViewChild(MatSort) sort: MatSort;  
 
  constructor(private changeDetector: ChangeDetectorRef,private formbulider: FormBuilder,
     private productService: ProductService, private _snackBar: MatSnackBar,
      public dialog: MatDialog) {  
    // this.productService.getProducts().subscribe(data => {  
    //   this.dataSource = new MatTableDataSource(data);  
    //   this.dataSource.paginator = this.paginator;  
    //   this.dataSource.sort = this.sort;  
    // });
    this.loadProducts();  
  }  
   
  ngAfterContentChecked() : void {
    this.changeDetector.detectChanges();
}  
  ngOnInit() {  
   
    this.loadProducts();  
    
  }  
 
  DeleteProduct(product:any) {  
    debugger;  
    const numSelected = this.selection.selected;  
    if (confirm("Are you sure to delete product ")) {  
      this.productService.deleteProductById(product.ProductID).subscribe(result => {  
        
        this.loadProducts();  
      })  
    }   
  }  
   length:number;
  
  loadProducts() {  
    this.productService.getProducts().subscribe(xyz => {  
      
      this.dataSource = new MatTableDataSource(xyz);  
      this.dataSource.paginator = this.paginator;  
      this.dataSource.sort = this.sort;  
      this.length=xyz.length;
    });
     
  }  
  pageIndex = 0;
pageSize = 2;
pageSizeOptions = [2,5,10, 15, 20];

  AddProduct()
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let dialogRef = this.dialog.open(ManageProductComponent,{
      width: '350px',
      data: {data: {"ProductID":0}}});
      dialogRef.afterClosed().subscribe(() => { this.loadProducts(); } );

  }
  loadProduct(product: any)
  {
    
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(ManageProductComponent,{
          width: '350px',
          data: {data: product}});

  }
  AssignAttribues(product:any) {  
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(AssignAttributeComponent,{
          width: '350px',
          data: {data: product}});

  }
  
  PageEvents(event: PageEvent){
    
  } 
  resultsLength=12; 
}
