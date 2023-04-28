import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Project';

  file: File | undefined;

  handleFileInput(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        localStorage.setItem('excelData', JSON.stringify(jsonData));
      };
      reader.readAsBinaryString(this.file);
    }
  }
}
