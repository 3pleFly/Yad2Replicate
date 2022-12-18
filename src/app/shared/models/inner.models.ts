import { CheckBoxItem } from "./checkboxItem.model";


export class ButtonModel {
  id?: number;
  cbFunc: Function;
  name: string;

  constructor(cbFunc: Function, name: string, id?:number ) {
    this.id = id;
    this.cbFunc = cbFunc;
    this.name = name;
  }

  invoke(...value: any): void {
    if(arguments.length === 0) this.cbFunc();
    this.cbFunc(...value);
  }
}

export interface MultiToggleBox {
  id: number;
  imgSrc: string;
  checkboxItem: CheckBoxItem;
}

const item: MultiToggleBox = {
  id: 12,
  imgSrc: "",
  checkboxItem: new CheckBoxItem("1","2")
};

export interface Item {
  id: string;
  value: string;
}

export interface ChildrenView {
  view: boolean;
}

export interface View {
  view: boolean;
}
