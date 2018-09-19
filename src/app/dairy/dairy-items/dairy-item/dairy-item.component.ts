import {Component, OnInit, Input, Output, OnChanges} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Dairy} from '../../../core/models/dairy.model';

@Component({
  selector: 'app-dairy-item',
  templateUrl: './dairy-item.component.html',
  styleUrls: ['./dairy-item.component.scss']
})
export class DairyItemComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() count: number
  @Output() changeSelectedItem: EventEmitter<string> = new EventEmitter<string>();

  itemText: string;
  descNumber: number;

  constructor() { }

  ngOnInit() {
    // console.log(this.dairy);
    this.itemText = this.name;
    this.descNumber = this.count;

  }

  ngOnChanges(){
    this.descNumber = this.count;
  }



  deleteItem(){
    this.setSelectedItem('');
  }

  setSelectedItem(selectedItem: string){
    this.changeSelectedItem.emit(selectedItem);
  }

}
