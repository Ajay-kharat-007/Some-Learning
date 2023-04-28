import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelDataComponent } from './excel-data/excel-data.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataComponentComponent } from './data-component/data-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelDataComponent,
    DataComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,

    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
