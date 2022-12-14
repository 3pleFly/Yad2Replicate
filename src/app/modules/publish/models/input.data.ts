import { CheckboxItem } from 'src/app/shared/models/checkboxItem.model';
import {
  SelectView,
  InputView,
} from 'src/app/shared/models/viewmodels/input.model';
import {
  numberOfPaymentsSelectOptions,
  numberOfRoomsSelectOptions,
} from '../../../../assets/mock/data/mock.data';
import { YAD2_ASSET } from 'src/app/shared/models/yad2Assets.const';
import {
  CategoryBoxModel,
  PUBLISH_CATEGORY,
} from 'src/app/shared/models/category-box.model';
import { OrderTypeView } from './seven-step-form.model';

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
  placeholder: 'בחירת מספר חדרים',
  labelText: 'מספר חדרים',
  options: numberOfRoomsSelectOptions,
};

export const numberOfPayments: SelectView = {
  labelText: 'מספר תשלומים',
  placeholder: 'בחירת מספר תשלומים',
  options: numberOfPaymentsSelectOptions,
  required: true,
};

export const houseCommitte: InputView = {
  labelText: 'ועד בית',
  placeholder: 'הכנסת סכום לתשלום לועד בית',
};

export const propertyTax: InputView = {
  labelText: 'ארנונה לחודשיים',
  placeholder: 'סכום ארנונה לתשלום',
};

export const squareMeter: InputView = {
  labelText: 'מ״ר בנוי',
  placeholder: 'כמה מטר רבוע יש בנכס',
};

export const gardenSquareMeter: InputView = {
  labelText: 'מ״ר גינה',
  placeholder: '',
};

export const totalSquareMeter: InputView = {
  labelText: 'גודל במ״ר סך הכל',
  placeholder: '',
  required: true,
};

export const price: InputView = {
  labelText: 'מחיר',
  placeholder: 'סכום מינימלי 100',
};

export const entryDate: InputView = {
  labelText: 'תאריך כניסה',
  placeholder: 'DD/MM/YYYY',
  required: true,
  inputType: 'date',
};

export const isImmediateEnty: CheckboxItem = new CheckboxItem('4', 'מיידי');

export const isFlexible: CheckboxItem = new CheckboxItem('4', 'גמיש');

export const isLongTerm: CheckboxItem = new CheckboxItem('4', 'טווח ארוך');

export const contactName: InputView = {
  labelText: 'שם איש קשר',
  required: true,
  inputType: 'text',
};

export const contactPhoneNumber: InputView = {
  labelText: 'טלפון ראשי',
  required: true,
  inputType: 'text',
};

export const secondContactName: InputView = {
  labelText: 'איש קשר נוסף',
  required: true,
  inputType: 'text',
};

export const secondContactPhoneNumber: InputView = {
  labelText: 'טלפון נוסף',
  required: true,
  inputType: 'text',
};

export const email: InputView = {
  labelText: 'דוא״ל',
  required: false,
  inputType: 'text',
};

// export const useVirtualNumber: CheckboxItem = new CheckboxItem('7', '');.

export const agreeToReceiveCallsOnTheWeekends: CheckboxItem = new CheckboxItem(
  '8',
  ''
);

export const agreedToTermsAndConditions: CheckboxItem = new CheckboxItem(
  '9',
  ''
);

export const wouldLiketoRecieveUpdates: CheckboxItem = new CheckboxItem(
  '10',
  ''
);

export const basicOrder: OrderTypeView = {
  imgSrc: 'assets/images/publish/basic-order.png',
  title: 'בסיסי',
  featureList: ['מודעה רגילה ללא הדגשה'],
  missingFeatureList: ['הקפצה אוטומטית פעם ביום'],
  price: 'חינם',
  days: '-',
  buttonText: 'בחירה במסלול',
  recommended: false
};

export const recommendedOrder: OrderTypeView = {
  imgSrc: 'assets/images/publish/recommended-order.png',
  title: 'למכור מהר!',
  featureList: [
    'מודעה בצהוב מעל כולם',
    'הקפצה אוטומטית פעם ביום',
    'מקבלת הכי הרבה טלפונים',
  ],
  missingFeatureList: [],
  price: '199 ₪',
  days: '28 ימים',
  buttonText: 'המסלול המומלץ',
  recommended: true

};
export const highlightedOrder: OrderTypeView = {
  imgSrc: 'assets/images/publish/highlighted-order.png',
  title: 'מודגשת',
  featureList: ['מודעה בורוד מעל רגילות', 'הקפצה אוטומטית פעם ביום'],
  missingFeatureList: [],
  price: '99 ₪',
  days: '28 ימים',
  buttonText: 'בחירה במסלול',
  recommended: false
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
  numberOfPayments,
  houseCommitte,
  propertyTax,
  squareMeter,
  gardenSquareMeter,
  totalSquareMeter,
  price,
  entryDate,
  isImmediateEnty,
  isFlexible,
  isLongTerm,
  contactName,
  secondContactName,
  contactPhoneNumber,
  secondContactPhoneNumber,
  agreeToReceiveCallsOnTheWeekends,
  agreedToTermsAndConditions,
  email,
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
