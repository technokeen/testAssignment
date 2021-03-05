import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports:[
   MatButtonModule, 
   MatPaginatorModule,
   MatTableModule,
   MatIconModule,
   MatFormFieldModule,
   MatInputModule
  ]
})
export class MaterialModule { }
