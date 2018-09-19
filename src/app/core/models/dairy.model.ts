export class Dairy {
  name: string;
  desc: Array<string>;

  constructor(name: string, desc = []) {
    this.name = name;
    this.desc = desc;
  }
}
