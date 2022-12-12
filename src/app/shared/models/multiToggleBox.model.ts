import { Item } from "./item.model";

export interface MultiToggleBox {
    id: number;
    imgSrc: string;
    description: string;
    optionItems: Item[];
}
