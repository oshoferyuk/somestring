import { Component, OnInit } from "@angular/core";

import { DairyStore } from "../../core/models/dairy.store";
import { Dairy } from "../../core/models/dairy.model";

@Component({
  selector: "app-dairy-items",
  templateUrl: "./dairy-items.component.html",
  styleUrls: ["./dairy-items.component.scss"]
})
export class DairyItemsComponent implements OnInit {
  dairyStore: DairyStore;
  newItemText = "";
  highlightItem = "";

  constructor(dairyStore: DairyStore) {
    this.dairyStore = dairyStore;
  }

  ngOnInit() {
  }

  addNewItem() {
    if (this.newItemText.trim().length) {
      this.dairyStore.addItem(this.newItemText);
      this.newItemText = "";
    }
  }

  changeSelectedItem(item: string) {
    this.highlightItem = item;
    this.dairyStore.setSelectedItem(item);
  }

  deleteCurrentItem(item: Dairy) {
    this.highlightItem = "";
    this.dairyStore.removeItem(item);
  }
}
