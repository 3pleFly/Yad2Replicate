export interface GovtApiAreaModel {
  text: string;
}

export interface GovtApiModel {
  data: { area: GovtApiAreaModel[] };
  message: string;
}
