export interface CategoryBoxModel {
  id: number;
  iconImgSrc: string;
  titleText: string;
  subtitleText?: string;
}

export enum BoxDisplays {
  All, ImageAndTitle, Title
}
