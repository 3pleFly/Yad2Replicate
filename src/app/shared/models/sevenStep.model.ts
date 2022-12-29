export class SevenStepForm {
  step1?: FormField[];
  step2?: FormField[];
  step3?: FormField[];
  step4?: FormField[];
  step5?: FormField[];
  step6?: FormField[];
  step7?: FormField[];

}

export class FormField {
  value: string;
  field: string;

  constructor(value: string, field: string) {
    this.value = value;
    this.field = field;
  }
}
