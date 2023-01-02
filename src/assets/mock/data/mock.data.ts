import { CategoryListing } from 'src/app/shared/models/categoryListing.model';
import { CheckBoxItem } from 'src/app/shared/models/checkboxItem.model';
import { Item, MultiToggleBox } from 'src/app/shared/models/inner.models';
import { SevenStepViewModel } from 'src/app/shared/models/viewmodels/vm.model';
import { Yad2Assets } from 'src/app/shared/models/yad2assets.enum';
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

export const forsaleListingSubCategories: CategoryListing[] = [
  {
    title: 'מכירה',
    subtitle: '',
    iconImgSrc: 'assets/images/publish/house-forsale.png',
  },
  {
    title: 'השכרה',
    subtitle: '',
    iconImgSrc: 'assets/images/publish/house-forrent.png',
  },
  {
    title: 'שותפים',
    subtitle: '',
    iconImgSrc: 'assets/images/publish/roommates.png',
  },
  {
    title: 'מסחרי',
    subtitle: '',
    iconImgSrc: 'assets/images/publish/commercial.png',
  },
];

export const onColumnsCheckboxItem: CheckBoxItem = new CheckBoxItem(
  'columns',
  'על עמודים'
);
export const receiveEmailCommericalsCheckboxItem: CheckBoxItem =
  new CheckBoxItem(
    'email-me',
    'אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל״ן'
  );

export const _yad2AssetsArray = Object.values(Yad2Assets);

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

export const sevenStepsModelData: SevenStepViewModel[] = [
  {
    title: 'באיזו קטגוריה נפרסם היום?',
    collapasedTitle: 'אני רוצה למכור נכס',
    stepStage: 0,
  },
  { title: 'כתובת הנכס', collapasedTitle: '', stepStage: 1 },
  { title: 'על הנכס', collapasedTitle: '', stepStage: 2 },
  { title: 'תשלומים, תאריכים ועוד', collapasedTitle: '', stepStage: 3 },
  { title: 'תמונות וסרטונים', collapasedTitle: '', stepStage: 4 },
  { title: 'פרטים ליצירת קשר', collapasedTitle: '', stepStage: 5 },
  { title: 'בחירת מסלול', collapasedTitle: '', stepStage: 6 },
];


export const  govtApi_streets_resourceId: string = '?resource_id=3c318d87-b56a-49f6-b532-d9aa87d85a9a';
export const  govtApi_fields_streets: string = '&fields=שם_רחוב';
export const  govtApi_plain_false: string = "&plain=false";
export const govtApi_limit_10: string = "&limit=10";

