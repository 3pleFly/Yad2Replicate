import { Yad2Assets } from "./yad2assets.enum";

export interface FormField {
  field: string;
  value: string;
}

export class SevenStepsForm {
  category?: string;
  propertyType?: Yad2Assets;
  propertyState?: string;
  city?: string;
  street?: string;
  houseNum?: string;
  floor?: string;
  totalFloors?: string;
  isOnColumns?: string;
  neighborhood?: string;
  zone?: string;

  constructor(init: Partial<SevenStepsForm>) {
    if (init) {
      Object.assign(this, init);
    }
  }
}
