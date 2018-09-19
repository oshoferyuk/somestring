import { Dairy } from "./dairy.model";

export class DairyStore {
  dairyList: Array<Dairy> = [];
  selectedItem = '';

  constructor() {
    let persistedDairy = JSON.parse(
      localStorage.getItem("dairy-store") || "[]"
    );

    this.dairyList = persistedDairy.map(
      (dairy: { item: string; desc: Array<string> }) => {
        return new Dairy(dairy.item, dairy.desc);
      }
    );
  }

  private updateStore() {
    localStorage.setItem("dairy-store", JSON.stringify(this.dairyList));
  }

  removeItem(dairyItem: Dairy) {
    this.dairyList.splice(this.dairyList.indexOf(dairyItem), 1);
    // this.updateStore();
  }

  addItem(name: string) {
    console.log(name);
    this.dairyList.push(new Dairy(name));
   // this.updateStore();
  }

  getAllItems(){
    console.log(this.dairyList);
    return this.dairyList;
  }

  setSelectedItem(item: string){
    this.selectedItem = item;
  }

  getSelectedItem(){
    return this.selectedItem;
  }

  getCurrentDesc(){
        const currDairy = this.dairyList.find(dairy => dairy.name === this.selectedItem);
        return currDairy === undefined ? [] : currDairy.desc;
  }

  addDescription(descr: string){

    //this.dairyList = [...
      this.dairyList.map(dairy => {
      if (dairy.name === this.selectedItem){
        dairy.desc = [...dairy.desc, descr];
      }
      return dairy;
    })
  //];
  }

}
