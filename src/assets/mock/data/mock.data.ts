import { Item, MultiToggleBox } from "src/app/shared/models/inner.models";

export const subCategories: Item[] = [
  { id: 'forsale', value: 'מכירה' },
  { id: 'forrent', value: 'השכרה' },
  { id: 'roommates', value: 'שותפים' },
  { id: 'commercial', value: 'מסחרי' },
  { id: 'official_reciever', value: 'כונס נכסים' },
];

export const searchModes: Item[] = [
  { id: 'cityAndNeighborhood', value: 'עיר ושכונה' },
  { id: 'Area', value: 'אזור' },
  { id: 'closeToMe', value: 'קרוב אלי' },
];

export const multiToggleBoxItems: MultiToggleBox[] = [
  {
    id: 1,
    imgSrc:
      'https://assets.yad2.co.il/yad2site/y2assets/images/realestate/Building.svg',
    checkBoxItem: {
      id: 1,
      value: 'דירות',
      subItems: [
        { id: 'apartment', value: 'דירה' },
        { id: 'garden_apartment', value: 'דירת גן' },
        { id: 'roof/penthouse', value: 'גג/פנטהאוז' },
        { id: 'duplex', value: 'דופלקס' },
        { id: 'vacation_apartment', value: 'דירת נופש' },
        { id: 'basement', value: 'מרתף/פרטר' },
        { id: 'triplex', value: 'טריפלקס' },
        { id: 'living_unit', value: 'יחידת דיור' },
        { id: 'studio', value: 'סטודיו/לופט' },
      ],
    },
  },
  {
    id: 2,
    imgSrc:
      'https://assets.yad2.co.il/yad2site/y2assets/images/realestate/Country-house.svg',
    checkBoxItem: {
      id: 2,
      value: 'בתים',
      subItems: [
        { id: 'private_residence', value: 'בית פרטי/קוטג׳' },
        { id: 'townhouse', value: 'דו משפחתי' },
        { id: 'estate', value: 'משק חקלאי/נחלה' },
        { id: 'home_farm', value: 'משק עזר' },
      ],
    },
  },
  {
    id: 3,
    imgSrc:
      'https://assets.yad2.co.il/yad2site/y2assets/images/realestate/Other.svg',
    checkBoxItem: {
      id: 3,
      value: 'סוגים נוספים',
      subItems: [
        { id: 'lots', value: 'מגרשים' },
        { id: 'assisted_living', value: 'דיור מוגן' },
        { id: 'building', value: 'בניין מגורים' },
        { id: 'storage', value: 'מחסן' },
        { id: 'parking_lot', value: 'חניה' },
        { id: 'purchasing_group', value: 'קב׳ רכישה/זכות לנכס' },
        { id: 'general', value: 'כללי' },
      ],
    },
  },
];
