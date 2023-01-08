export interface CategoryBoxModel {
  id?: number;
  category: PublishCategory;
  iconImgSrc: string;
  labelText: string;
  subtitle?: string;
}

export const PUBLISH_CATEGORY = {
  SALE: 'SALE',
  RENT: 'RENT',
  ROOMMATES: 'ROOMMATES',
  COMMERCIAL: 'COMMERCIAL',

} as const;

export type PublishCategory = keyof typeof PUBLISH_CATEGORY;

export enum BoxDisplays {
  All, ImageAndTitle, Title
}
