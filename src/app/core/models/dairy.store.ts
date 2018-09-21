import { Dairy } from "./dairy.model";

export class DairyStore {
  dairyList: Array<Dairy> = [];
  selectedItem = "";

  // local storage should be moved to separate service, here subject as event bus,
  // localStorage service should subscribe to this
  // pull is always better then push

  constructor() {
    const persistedDairy = JSON.parse(
      localStorage.getItem("dairy-store") || "[]"
    );

    this.dairyList = persistedDairy.map(
      (dairy: { name: string; desc: Array<string> }) => {
        return new Dairy(dairy.name, dairy.desc);
      }
    );

    console.log(this.dairyList);
  }

  private updateStore() {
    localStorage.setItem("dairy-store", JSON.stringify(this.dairyList));
  }

  removeItem(dairyItem: Dairy) {
    this.dairyList.splice(this.dairyList.indexOf(dairyItem), 1);
    if (dairyItem.name === this.selectedItem) {
      this.selectedItem = "";
    }
     this.updateStore();
  }

  addItem(name: string) {
    console.log(name);
    this.dairyList.push(new Dairy(name));
     this.updateStore();
  }

  getAllItems() {
    return this.dairyList;
  }

  setSelectedItem(item: string) {
    this.selectedItem = item;
  }

  getSelectedItem() {
    return this.selectedItem;
  }

  getCurrentDesc() {
    const currDairy = this.dairyList.find(
      dairy => dairy.name === this.selectedItem
    );
    return currDairy === undefined ? [] : currDairy.desc;
  }

  addDescription(descr: string) {
    this.dairyList.map(dairy => {
      if (dairy.name === this.selectedItem) {
        dairy.desc = [...dairy.desc, descr];
      }
      return dairy;
    });
    this.updateStore();
  }
}
