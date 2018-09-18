import { Component, OnInit } from '@angular/core';
import {DairyStore} from '../../core/models/dairy.store';

@Component({
  selector: 'app-dairy-item',
  templateUrl: './dairy-item.component.html',
  styleUrls: ['./dairy-item.component.scss']
})
export class DairyItemComponent implements OnInit {

  dairyStore: DairyStore;
  newItemText = '';

  constructor(dairyStore: DairyStore) {
    this.dairyStore = dairyStore;
  }


  ngOnInit() {
    this.dairyStore.addItem('aaa');
    this.dairyStore.addItem('bbb');

  }


  addNewItem(){
    if (this.newItemText.trim().length) {
      this.dairyStore.addItem(this.newItemText);
      this.newItemText = '';
    }
  }

}
