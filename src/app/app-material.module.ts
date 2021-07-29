import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';  
import { MatSelectModule } from '@angular/material/select';  
import { MatSnackBarModule } from '@angular/material/snack-bar';  
import { MatTableModule } from '@angular/material/table';  
import { CdkTableModule } from '@angular/cdk/table';  
import { MatPaginatorModule } from '@angular/material/paginator';  
import { MatButtonModule } from '@angular/material/button';  
import { MatDatepickerModule } from '@angular/material/datepicker';  
import { MatMenuModule } from '@angular/material/menu';  
import { MatNativeDateModule } from '@angular/material/core';  
import { MatIconModule } from '@angular/material/icon';  
import { MatSidenavModule } from '@angular/material/sidenav';  
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatTooltipModule } from '@angular/material/tooltip';  
import { MatToolbarModule } from '@angular/material/toolbar';  
import { MatRadioModule } from '@angular/material/radio';  
import { MatInputModule } from "@angular/material/input";  

// const matModules = [
//   MatCardModule 
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,  
    MatSelectModule,  
    MatSnackBarModule,  
    MatTableModule,  
    CdkTableModule,  
    MatPaginatorModule  ,
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
 
  ],
  exports:[
    MatCheckboxModule,  
    MatSelectModule,  
    MatSnackBarModule,  
    MatTableModule,  
    CdkTableModule,  
    MatPaginatorModule  ,
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,
  ]
})
export class AppMaterialModule { }