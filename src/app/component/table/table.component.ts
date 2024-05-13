import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  customList !:Customer[];
  constructor(private masterService: MasterService){
    this.masterService.getCustomer().subscribe(res => {
      this.customList = res;
    })
  }
}
