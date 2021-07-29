import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA, MatDialogConfig,MatDialogRef} from "@angular/material/dialog";
import { FormArray,FormBuilder, FormGroup, Validators ,FormsModule,NgForm,FormControl } from '@angular/forms';  
import {ProductService } from '../../services/product.service';  
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';  


@Component({
  selector: 'app-assign-attribute',
  templateUrl: './assign-attribute.component.html',
  styleUrls: ['./assign-attribute.component.css']
})
export class AssignAttributeComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';  
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';  
  attributeForm: FormGroup;
  items: FormArray;
 product:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any
  ,private productService: ProductService
  ,private fb: FormBuilder
  ,private dialogRef: MatDialogRef<AssignAttributeComponent>
  , private _snackBar: MatSnackBar) { 
    this.attributeForm = this.fb.group({
      attributesArray: this.fb.array([])
    });
  }
attributes:any[]=[];
attributeObject=[];
  ngOnInit(): void {
    this.product=this.data.data;
    this.productService.getProductCategoryAttributeofProduct(this.data.data).subscribe((attributes:any[])=>{  
      this.attributes=attributes;
      // var colstp = {"1":"","2":"","3":""};
      // colstp["1"]="a";
      // colstp["2"]="b";
      // colstp["3"]="c";
      // eval("colstp.1 = '1'");
      // colstp["a1"]="1";
      debugger;
      for (var i = 0; i < this.attributes.length; i++) {
        let attributeName:string=this.attributes[i].AttributeId.toString();
        let attributeValue=this.attributes[i].AttributeValue.toString();
        Object.defineProperty(this.attributeObject, attributeName, {value : attributeValue,
                           writable : true,
                           enumerable : true,
                           configurable : true});
        
      }

      
      attributes.map(attribute => {
        // this.attributeForm = this.fb.group({attribute: ['', Validators.required]});
        this.attributeForm.addControl(attribute.AttributeId.toString(), new FormControl('', Validators.required));

      });
      this.attributeForm.patchValue(this.attributeObject);
    });
  }
 
  onFormSubmit()  
  {  
   debugger;
   
   let savableAttributeList:any=[];
   let objprops=Object.getOwnPropertyNames(this.attributeObject);
   for (var i = 0; i < this.attributeObject.length; i++) {
    savableAttributeList.push({"AttributeId":objprops[i],"AttributeValue":this.attributeForm.value[objprops[i]],"ProductID":this.product.ProductID});
  }
  this.productService.updateProductAttributes(savableAttributeList).subscribe(employee => {  
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

}
