import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel-data',
  templateUrl: './excel-data.component.html',
  styleUrls: ['./excel-data.component.scss']
})
export class ExcelDataComponent implements OnInit{
  excelData: any[] | undefined;

  ngOnInit() {
    const storedData = localStorage.getItem('excelData');
    if (storedData) {
      this.excelData = JSON.parse(storedData);
    }
  }
}
