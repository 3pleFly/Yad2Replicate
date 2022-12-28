export class StepData {
  data : FormField[];

  constructor(data: FormField[]) {
    this.data = data;
  }
}

export interface FormField {
  fieldName: string;
  fieldValue: string;
}
