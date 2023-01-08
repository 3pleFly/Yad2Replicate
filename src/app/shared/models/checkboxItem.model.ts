export class CheckboxItem {
  public id: number | string;
  public value: string;
  public subItems?: CheckboxItem[];
  public checked: boolean;
  public disabled: boolean = false;
  public countOfCheckedItems = 0;
  visible: boolean = true;

  constructor(
    id: string | number,
    value: string,
    subItems: CheckboxItem[] = [],
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
    if (this.disabled) return;

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

  public toggleChild(childId: number | string): void {
    if (this.disabled) return;

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

  private selectAll() {
    if (!this.subItems) return;
    this.subItems?.forEach((item) => (item.checked = true));
    this.countOfCheckedItems = this.subItems?.length;
    this.checked = true;
  }
}
