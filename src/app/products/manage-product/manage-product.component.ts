import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA, MatDialogConfig,MatDialogRef} from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  
import {ProductService } from '../../services/product.service';  
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';  

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';  
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';  
  productForm: FormGroup;  
  ProductID:number;  
  CategoryID:number;  
  PName:string='';  
  PDesc:string='';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any
  ,private productService: ProductService
  ,private fb: FormBuilder
  ,private dialogRef: MatDialogRef<ManageProductComponent>
  , private _snackBar: MatSnackBar) {
    debugger;
    this.productForm = fb.group({  
      'CategoryID' : [null, Validators.required],  
      'PName' : [null, Validators.required],  
      'PDesc' : [null, Validators.required]
    });  
   }
   onFormSubmit()  
   {  
    let productsave=this.productForm.value;
    productsave.ProductID=this.product.ProductID;
    this.productService.updateProduct(productsave).subscribe(employee => {  
      let snackBarRef =this._snackBar.open('Record Updated Successfully!', 'Close', {  
        duration: 2000,  
        horizontalPosition: this.horizontalPosition,  
        verticalPosition: this.verticalPosition,  
      });  
      snackBarRef.afterDismissed().subscribe(() => {
        this.dialogRef.close();

      });
    }); 
   } 
  ngOnInit(): void {
    debugger;
    // this.dialogRef.close();
    this.productService.getProductByID(this.data.data.ProductID).subscribe(product => {  
      debugger;
      this.product=product;
      this.product.CategoryID=this.product.CategoryID.toString();
      this.productForm.patchValue(product); 
      // this.productForm.value.CategoryID=this.product.CategoryID;
      
    });
  }
  product:any
  ClosePopUp()  
  {  
    this.dialogRef.close();
  } 
}
