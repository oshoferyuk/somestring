import { Component, OnInit } from "@angular/core";

import { DairyStore } from "../../core/models/dairy.store";

@Component({
  selector: "app-dairy-comments",
  templateUrl: "./dairy-comments.component.html",
  styleUrls: ["./dairy-comments.component.scss"]
})
export class DairyCommentsComponent implements OnInit {
  dairyStore: DairyStore;

  constructor(dairyStore: DairyStore) {
    this.dairyStore = dairyStore;
  }

  ngOnInit() {}

  addDescription(event: any) {
    this.dairyStore.addDescription(event.target.value);
    event.target.value = "";
  }
}
