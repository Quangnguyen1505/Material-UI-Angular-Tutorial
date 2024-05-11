import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { colorentity } from 'src/app/Entity/colorentity';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  colorarray = ['red', 'black', 'blue'];
  filteroptions!: Observable<string[]>;
  FormControl = new FormControl('');

  colorarraylist!:colorentity[];
  filteroptionslist!: Observable<colorentity[]>;

  constructor( private service: MasterService){
    this.colorarraylist = this.service.GetColorList();
  }

  ngOnInit(): void {
    // this.filteroptions = this.FormControl.valueChanges.pipe(
    //   startWith(''), map( value => this._FILTER( value || '' ))
    // )
    this.filteroptionslist = this.FormControl.valueChanges.pipe(
      startWith(''), map( value => this._LISTFILTER( value || '' ))
    )
  }

  private _FILTER ( value: string ):string[] {
    const searchValue = value.toLowerCase();
    return this.colorarray.filter( option => option.toLocaleLowerCase().includes(searchValue));
  }

  private _LISTFILTER ( value: string ):colorentity[] {
    const searchValue = value.toLowerCase();
    return this.colorarraylist.filter( option => option.name.toLocaleLowerCase().includes(searchValue) ||
      option.code.toLocaleLowerCase().includes(searchValue)
  );
  }


}
