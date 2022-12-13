export interface CheckBoxItem {
  id: number | string;
  checked?: boolean;
  value: string;
  subItems?: CheckBoxItem[];
}
export interface MultiToggleBox {
  id: number;
  imgSrc: string;
  checkBoxItem: CheckBoxItem;
}

export interface Item {
  id: string;
  value: string;
}

export interface View {
  view: boolean;
}
