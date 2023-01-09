import { CheckboxItem } from 'src/app/shared/models/checkboxItem.model';
import {
  SelectView,
  InputView,
} from 'src/app/shared/models/viewmodels/input.model';
import { numberOfRoomsSelectOptions } from '../../../../assets/mock/data/mock.data';
import { YAD2_ASSET } from 'src/app/shared/models/yad2Assets.const';
import {
  CategoryBoxModel,
  PUBLISH_CATEGORY,
} from 'src/app/shared/models/category-box.model';

export const categories: CategoryBoxModel[] = [
  {
    category: PUBLISH_CATEGORY.SALE,
    labelText: 'מכירה',
    subtitle: '',
    iconImgSrc: 'assets/images/publish/house-forsale.png',
  },
  {
    category: PUBLISH_CATEGORY.RENT,
    labelText: 'השכרה',
    subtitle: '',
    iconImgSrc: 'assets/images/publish/house-forrent.png',
  },
  {
    category: PUBLISH_CATEGORY.ROOMMATES,
    labelText: 'שותפים',
    subtitle: '',
    iconImgSrc: 'assets/images/publish/roommates.png',
  },
  {
    category: PUBLISH_CATEGORY.COMMERCIAL,
    labelText: 'מסחרי',
    subtitle: '',
    iconImgSrc: 'assets/images/publish/commercial.png',
  },
];

export const propertyType: SelectView = {
  labelText: 'סוג הנכס',
  placeholder: 'דירה או אולי פנטהאוז?',
  required: true,
  options: [...Object.values(YAD2_ASSET)],
};

export const propertyState: SelectView = {
  labelText: 'מצב הנכס',
  placeholder: 'משופץ? חדש מקבלן?',
  required: true,
  options: [
    'חדש מקבלן (לא גרו בו בכלל)',
    'חדש (נכס בן עד 5 שנים)',
    'משופץ (שופץ ב5 שנים האחרונות)',
    'במצב שמור (במצב טוב לא שופץ)',
    'דרוש שיפוץ (זקוק לעבודת לשיפוץ)',
  ],
};

export const city: InputView = {
  labelText: 'ישוב',
  placeholder: 'איפה נמצא הנכס?',
  required: true,
};

export const floor: InputView = {
  placeholder: 'הכנסת מספר קומה',
  labelText: 'קומה',
  required: true,
  visible: true,
};

export const totalFloors: InputView = {
  placeholder: 'הכנסת סה״כ קומות',
  labelText: 'סה״כ קומות בבניין',
  required: true,
  visible: true,

};

export const isOnColumns: CheckboxItem = new CheckboxItem(0, 'על עמודים');

export const street: InputView = {
  labelText: 'רחוב',
  disabled: true,
  placeholder: 'הכנסת שם הרחוב',
  required: false,
};

export const houseNum: InputView = {
  labelText: "מס' בית",
  placeholder: '',
  required: false,
};

export const neighborhood: InputView = {
  labelText: 'שכונה',
  required: false,
  placeholder: '',
};

export const area: InputView = {
  labelText: 'אזור מכירה',
  required: false,
  placeholder: 'בחירת אזור מכירה',
};

export const emailCommercials: CheckboxItem = new CheckboxItem(
  2,

  'אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל״ן'
);

export const rooms: SelectView = {
  placeholder: "בחירת מספר חדרים",
  labelText: "מספר חדרים",
  options: numberOfRoomsSelectOptions,
};

export const Yad2InputsViewModels = {
  categories,
  propertyType,
  propertyState,
  city,
  street,
  houseNum,
  floor,
  totalFloors,
  isOnColumns,
  neighborhood,
  area,
  emailCommercials,
  rooms,
};

export const sevenStepsModelData = {
  step1: {
    title: 'באיזו קטגוריה נפרסם היום?',
    collapasedTitle: 'אני רוצה למכור נכס',
    stepStage: 0,
    inputs: Yad2InputsViewModels,
  },
  step2: {
    title: 'כתובת הנכס',
    collapasedTitle: '',
    stepStage: 1,
    inputs: Yad2InputsViewModels,
  },
  step3: {
    title: 'על הנכס',
    collapasedTitle: '',
    stepStage: 2,
    inputs: Yad2InputsViewModels,
  },
  step4: {
    title: 'תשלומים, תאריכים ועוד',
    collapasedTitle: '',
    stepStage: 3,
    inputs: Yad2InputsViewModels,
  },
  step5: {
    title: 'תמונות וסרטונים',
    collapasedTitle: '',
    stepStage: 4,
    inputs: Yad2InputsViewModels,
  },
  step6: {
    title: 'פרטים ליצירת קשר',
    collapasedTitle: '',
    stepStage: 5,
    inputs: Yad2InputsViewModels,
  },
  step7: {
    title: 'בחירת מסלול',
    collapasedTitle: '',
    stepStage: 6,
    inputs: Yad2InputsViewModels,
  },
};
