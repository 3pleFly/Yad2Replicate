import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from 'src/app/shared/models/item.model';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MultiToggleBox } from 'src/app/shared/models/multiToggleBox.model';

// mock
const subCategories = [
  { title: 'forsale', value: 'מכירה' },
  { title: 'forrent', value: 'השכרה' },
  { title: 'roommates', value: 'שותפים' },
  { title: 'commercial', value: 'מסחרי' },
  { title: 'official_reciever', value: 'כונס נכסים' },
];

const searchModes = [
  { title: 'cityAndNeighborhood', value: 'עיר ושכונה' },
  { title: 'Area', value: 'אזור' },
  { title: 'closeToMe', value: 'קרוב אלי' },
];

const multiToggleBoxItems = [
  {
    id: 1,
    imgSrc:
      'https://assets.yad2.co.il/yad2site/y2assets/images/realestate/Building.svg',
    description: 'דירות',
    optionItems: [
      {title: 'apartment', value: 'דירה'},
      {title: 'garden_apartment', value: 'דירת גן'},
      {title: 'roof/penthouse', value: 'גג/פנטהאוז'},
      {title: 'duplex', value: 'דופלקס'},
      {title: 'vacation_apartment', value: 'דירת נופש'},
      {title: 'basement', value: 'מרתף/פרטר'},
      {title: 'triplex', value: 'טריפלקס'},
      {title: 'living_unit', value: 'יחידת דיור'},
      {title: 'studio', value: 'סטודיו/לופט'}
    ],
  },
  {
    id: 2,
    imgSrc:
      'https://assets.yad2.co.il/yad2site/y2assets/images/realestate/Country-house.svg',
    description: 'בתים',
    optionItems: [
      {title: 'private_residence', value: 'בית פרטי/קוטג׳'},
      {title: 'townhouse', value: 'דו משפחתי'},
      {title: 'estate', value: 'משק חקלאי/נחלה'},
      {title: 'home_farm', value: 'משק עזר'},
    ],
  },
  {
    id: 3,
    imgSrc:
      'https://assets.yad2.co.il/yad2site/y2assets/images/realestate/Other.svg',
    description: 'סוגים נוספים',
    optionItems: [
      {title: 'lots', value: 'מגרשים'},
      {title: 'assisted_living', value: 'דיור מוגן'},
      {title: 'building', value: 'בניין מגורים'},
      {title: 'storage', value: 'מחסן'},
      {title: 'parking_lot', value: 'חניה'},
      {title: 'purchasing_group', value: 'קב׳ רכישה/זכות לנכס'},
      {title: 'general', value: 'כללי'},

    ],
  },
];

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  subCategories: Item[] = subCategories;
  searchCategories: Item[] = searchModes;
  multiToggleBoxItems: MultiToggleBox[] = multiToggleBoxItems;
  selectedSubCategory!: string;
  cityInput!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe(
      (urlSegment) => (this.selectedSubCategory = urlSegment[2].path)
    );
  }

  selectCategory(category: string) {
    this.selectedSubCategory = category;
  }
}
