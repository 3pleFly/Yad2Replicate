import { SevenStepViewModel } from 'src/app/modules/publish/models/seven-step-form.model';
import { CategoryListing } from 'src/app/shared/models/categoryListing.model';
import { CheckboxItem } from 'src/app/shared/models/checkboxItem.model';
import { Item, MultiToggleBox } from 'src/app/shared/models/inner.models';
import { Yad2Properties } from 'src/app/shared/models/yad2Properties.model';

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
    checkboxItem: new CheckboxItem(1, 'דירות', [
      new CheckboxItem('apartment', 'דירה'),
      new CheckboxItem('garden_apartment', 'דירת גן'),
      new CheckboxItem('roof/penthouse', 'גג/פנטהאוז'),
      new CheckboxItem('duplex', 'דופלקס'),
      new CheckboxItem('vacation_apartment', 'דירת נופש'),
      new CheckboxItem('basement', 'מרתף/פרטר'),
      new CheckboxItem('triplex', 'טריפלקס'),
      new CheckboxItem('living_unit', 'יחידת דיור'),
      new CheckboxItem('studio', 'סטודיו/לופט'),
    ]),
  },
  {
    id: 2,
    imgSrc:
      'https://assets.yad2.co.il/yad2site/y2assets/images/realestate/Country-house.svg',
    checkboxItem: new CheckboxItem(2, 'בתים', [
      new CheckboxItem('private_residence', 'בית פרטי/קוטג׳'),
      new CheckboxItem('townhouse', 'דו משפחתי'),
      new CheckboxItem('estate', 'משק חקלאי/נחלה'),
      new CheckboxItem('home_farm', 'משק עזר'),
    ]),
  },
  {
    id: 3,
    imgSrc:
      'https://assets.yad2.co.il/yad2site/y2assets/images/realestate/Other.svg',
    checkboxItem: new CheckboxItem(3, 'סוגים נוספים', [
      new CheckboxItem('lots', 'מגרשים'),
      new CheckboxItem('assisted_living', 'דיור מוגן'),
      new CheckboxItem('building', 'בניין מגורים'),
      new CheckboxItem('storage', 'מחסן'),
      new CheckboxItem('parking_lot', 'חניה'),
      new CheckboxItem('purchasing_group', 'קב׳ רכישה/זכות לנכס'),
      new CheckboxItem('general', 'כללי'),
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
  new CheckboxItem('1', 'חניה'),
  new CheckboxItem('2', 'מיזוג'),
  new CheckboxItem('3', 'ממ״ד'),
  new CheckboxItem('4', 'מחסן'),
  new CheckboxItem('5', 'משופצת'),
  new CheckboxItem('6', 'בבלעדיות'),
  new CheckboxItem('7', 'מעלית'),
  new CheckboxItem('8', 'מרפסת'),
  new CheckboxItem('9', 'סורגים'),
  new CheckboxItem('10', 'גישה לנכים'),
  new CheckboxItem('11', 'מרוהטת'),
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

export const categoryListings: CategoryListing[] = [
  {
    title: 'נדל״ן',
    subtitle: 'מכירה, השכרה, מסחרי',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/nadlan.svg',
  },
  {
    title: 'כלי רכב',
    subtitle: 'כלי רכב, דו גלגלי, כלי שיט, מיוחדים',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/vehicle.svg',
  },
  {
    title: 'יד שניה',
    subtitle: 'לבית לגינה ולמשרד, חשמל, ספורט, פנאי ושונות',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/second_hand.svg',
  },
  {
    title: 'עסקים למכירה',
    subtitle: 'הייטק, בתי קפה ועוד',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/business.svg',
  },
  {
    title: 'בעלי מקצוע',
    subtitle: 'הובלות, מוסכים, שיפוצים',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/profession.svg',
  },
  {
    title: 'נדל״ן מסחרי',
    subtitle: 'מחסנים, קליניקות, משרדים',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/commercial.svg',
  },
  {
    title: 'סלולר',
    subtitle: 'מכשירים, אביזרים, ושעונים חכמים',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/tech.svg',
  },
  {
    title: 'ריהוט',
    subtitle: '',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/furniture.svg',
  },
  {
    title: 'תיירות ונופש',
    subtitle: '',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/vication.svg',
  },
  {
    title: 'אופנה וטיפוח',
    subtitle: '',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/fashion.svg',
  },
  {
    title: 'חיות מחמד',
    subtitle: '',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/pets.svg',
  },
  {
    title: 'לתינוק ולילד',
    subtitle: '',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/kids.svg',
  },
  {
    title: 'מורים פרטיים',
    subtitle: '',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/tech.svg',
  },
  {
    title: 'דרושים',
    subtitle: '',
    iconImgSrc:
      'https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/drushim.svg',
  },
];

export const onColumnsCheckboxItem: CheckboxItem = new CheckboxItem(
  'columns',
  'על עמודים'
);
export const receiveEmailCommericalsCheckboxItem: CheckboxItem =
  new CheckboxItem(
    'email-me',
    'אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל״ן'
  );

export const _yad2Properties: Yad2Properties[] = [
  { name: 'מיזוג', imgSrc: 'assets/images/publish/asset_properties/ac.png' },
  { name: 'ממ״ד', imgSrc: 'assets/images/publish/asset_properties/mamad.png' },
  {
    name: 'מחסן',
    imgSrc: 'assets/images/publish/asset_properties/storage.png',
  },
  {
    name: 'ריהוט',
    imgSrc: 'assets/images/publish/asset_properties/furniture.png',
  },
  {
    name: 'גישה לנכים',
    imgSrc: 'assets/images/publish/asset_properties/disabled.png',
  },
  { name: 'מעלית', imgSrc: 'assets/images/publish/asset_properties/lift.png' },
  {
    name: 'מזגן תדירן',
    imgSrc: 'assets/images/publish/asset_properties/ac.png',
  },
  {
    name: 'משופצת',
    imgSrc: 'assets/images/publish/asset_properties/renovated.png',
  },
  {
    name: 'מטבח כשר',
    imgSrc: 'assets/images/publish/asset_properties/kosher_kitchen.png',
  },
  {
    name: 'דוד שמש',
    imgSrc: 'assets/images/publish/asset_properties/water_heater.png',
  },
  {
    name: 'סורגים',
    imgSrc: 'assets/images/publish/asset_properties/window_bars.png',
  },
];

export const  govtApi_resourceId_streets_cities: string = '?resource_id=a7296d1a-f8c9-4b70-96c2-6ebb4352f8e3';
export const  govtApi_fields_streets: string = '&fields=שם_רחוב';
export const  govtApi_fields_cities: string = '&fields=שם_ישוב';
export const  govtApi_plain_false: string = "&plain=false";
export const govtApi_limit_10: string = "&limit=10";

// https://data.gov.il/api/3/action/datastore_search?resource_id=a7296d1a-f8c9-4b70-96c2-6ebb4352f8e3&fields=%D7%A9%D7%9D_%D7%A8%D7%97%D7%95%D7%91&limit=10&q=[object%20Object],%D7%94%D7%A8%D7%A6%D7%9C

//
