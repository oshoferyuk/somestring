import { Component, OnInit, Input, Output } from '@angular/core';
import {Dairy} from '../../../core/models/dairy.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dairy-item',
  templateUrl: './dairy-item.component.html',
  styleUrls: ['./dairy-item.component.scss']
})
export class DairyItemComponent implements OnInit {

  @Input() item: string;
  @Input() desc: number;
  @Output() commentsData: EventEmitter<number> = new EventEmitter<number>();

  itemText: string;
  descNumber: number;

  constructor() { }

  ngOnInit() {
    this.itemText = this.item;
    this.descNumber = this.desc;

  }

  deleteItem(){

  }

}
