import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.scss']
})
export class DataComponentComponent {
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = () => {
      const workbook = XLSX.read(reader.result, {type: 'binary'});
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, {header: 1});
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    };
  }
}
