export class Dairy {
  item: string;
  desc: Array<string>;


  constructor(item: string, desc = []) {
    console.log('-----');
    console.log(item);
    this.item = item;
    this.desc = desc;
  }
}
