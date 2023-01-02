export interface GovtAreaModel {
  text: string;
}

export interface GovtModel {
  data: { area: GovtAreaModel[] };
  message: string;
}

export interface GovtDataStoreSearch{
  help: string;
  success: boolean;
  result: GovtDataStoreSearchResults;
}

export interface GovtDataStoreSearchResults {
  include_total: boolean;
  limit: number;
  q: string;
  records_format: string;
  resource_id: string;
  total_estimation_threshold: string;
  records: GovtDataStoreSearchResultRecords[];
}

export interface GovtDataStoreSearchResultRecords {
  שם_רחוב: any;
  שם_ישוב: string;
}

export interface GovtDataStoreQueryParams {
  שם_ישוב?: string;
  שם_רחוב?: string;
}
