export class CheckBoxItem {
  public id: number | string;
  public value: string;
  public subItems?: CheckBoxItem[];
  public checked: boolean;
  public countOfCheckedItems = 0;

  constructor(
    id: string | number,
    value: string,
    subItems: CheckBoxItem[] = [],
    checked: boolean = false
  ) {
    this.id = id;
    this.value = value;
    this.subItems = subItems;
    this.checked = checked;
  }

  public clear() {
    this.countOfCheckedItems = 0;
    this.subItems?.forEach((item) => (item.checked = false));
    this.checked = false;
  }

  public toggleAllChildren(): void {
    if (this.checked) {
      let lengthOfCheckedItems = this.subItems?.filter(
        (item) => item.checked
      ).length;
      if (lengthOfCheckedItems === this.subItems?.length) {
        this.clear();
        return;
      }
    }
    this.selectAll();
  }

  private selectAll() {
    if (!this.subItems) return;
    this.subItems?.forEach((item) => (item.checked = true));
    this.countOfCheckedItems = this.subItems?.length;
    this.checked = true;
  }

  public toggleChildChecked(childId: number | string): void {
    let child = this.subItems?.find((item) => item.id === childId);
    if (!child) throw new Error('child not found');

    if (child.checked) {
      child.checked = false;
      this.countOfCheckedItems--;
      if (this.countOfCheckedItems === 0) this.checked = false;
      return;
    }
    child.checked = true;
    this.countOfCheckedItems++;
    this.checked = true;
  }
}
