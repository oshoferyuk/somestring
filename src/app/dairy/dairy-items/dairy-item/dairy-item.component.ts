import { Component, OnInit, Input, Output, OnChanges } from "@angular/core";
import { EventEmitter } from "@angular/core";


@Component({
  selector: "app-dairy-item",
  templateUrl: "./dairy-item.component.html",
  styleUrls: ["./dairy-item.component.scss"]
})
export class DairyItemComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Input() count: number;
  @Output() changeSelectedItem: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteCurrentItem: EventEmitter<any> = new EventEmitter<any>();

  itemText: string;
  descNumber: number;

  constructor() {}

  ngOnInit() {
    this.itemText = this.name;
    this.descNumber = this.count;
  }

  ngOnChanges() {
    this.descNumber = this.count;
  }

  deleteItem(event) {
    event.stopPropagation();
    this.deleteCurrentItem.emit();
  }

  setSelectedItem(selectedItem: string) {
    this.changeSelectedItem.emit(selectedItem);
  }
}
