import { CheckBoxItem } from 'src/app/shared/models/checkboxItem.model';
import { Item, MultiToggleBox } from 'src/app/shared/models/inner.models';

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
    checkboxItem: new CheckBoxItem(1, 'דירות', [
      new CheckBoxItem('apartment', 'דירה'),
      new CheckBoxItem('garden_apartment', 'דירת גן'),
      new CheckBoxItem('roof/penthouse', 'גג/פנטהאוז'),
      new CheckBoxItem('duplex', 'דופלקס'),
      new CheckBoxItem('vacation_apartment', 'דירת נופש'),
      new CheckBoxItem('basement', 'מרתף/פרטר'),
      new CheckBoxItem('triplex', 'טריפלקס'),
      new CheckBoxItem('living_unit', 'יחידת דיור'),
      new CheckBoxItem('studio', 'סטודיו/לופט'),
    ]),
  },
  {
    id: 2,
    imgSrc:
      'https://assets.yad2.co.il/yad2site/y2assets/images/realestate/Country-house.svg',
    checkboxItem: new CheckBoxItem(2, 'בתים', [
      new CheckBoxItem('private_residence', 'בית פרטי/קוטג׳'),
      new CheckBoxItem('townhouse', 'דו משפחתי'),
      new CheckBoxItem('estate', 'משק חקלאי/נחלה'),
      new CheckBoxItem('home_farm', 'משק עזר'),
    ]),
  },
  {
    id: 3,
    imgSrc:
      'https://assets.yad2.co.il/yad2site/y2assets/images/realestate/Other.svg',
    checkboxItem: new CheckBoxItem(3, 'סוגים נוספים', [
      new CheckBoxItem('lots', 'מגרשים'),
      new CheckBoxItem('assisted_living', 'דיור מוגן'),
      new CheckBoxItem('building', 'בניין מגורים'),
      new CheckBoxItem('storage', 'מחסן'),
      new CheckBoxItem('parking_lot', 'חניה'),
      new CheckBoxItem('purchasing_group', 'קב׳ רכישה/זכות לנכס'),
      new CheckBoxItem('general', 'כללי'),
    ]),
  },
];

export const numberOfRoomsSelectOptions: string[] = [
  '1',
  '1.5',
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '4.5',
  '5',
  '5.5',
  '6',
  '6.5',
  '7',
  '7.7',
  '8',
  '8.5',
  '9',
  '9.5',
  '10',
  '10.5',
  '11',
  '11.5',
  '12',
];

export const advancedSearchCheckboxItems = [
  new CheckBoxItem('1', 'חניה'),
  new CheckBoxItem('2', 'מיזוג'),
  new CheckBoxItem('3', 'ממ״ד'),
  new CheckBoxItem('4', 'מחסן'),
  new CheckBoxItem('5', 'משופצת'),
  new CheckBoxItem('6', 'בבלעדיות'),
  new CheckBoxItem('7', 'מעלית'),
  new CheckBoxItem('8', 'מרפסת'),
  new CheckBoxItem('9', 'סורגים'),
  new CheckBoxItem('10', 'גישה לנכים'),
  new CheckBoxItem('11', 'מרוהטת'),
];

export const advancedSearchNumberOfFloorsSelectOptions: string[] = [
  'מרתף/פרטר',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
];
