import { Component, OnInit } from '@angular/core';
import {DairyStore} from '../../core/models/dairy.store';

@Component({
  selector: 'app-dairy-items',
  templateUrl: './dairy-items.component.html',
  styleUrls: ['./dairy-items.component.scss']
})
export class DairyItemsComponent implements OnInit {

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
