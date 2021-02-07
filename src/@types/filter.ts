import { AxiosError } from "axios";
import {
  changeExFilter,
  EXFILTER_LIST_FAILURE,
  EXFILTER_LIST_REQUEST,
  EXFILTER_LIST_SUCCESS,
} from "../reducer/filter";

export interface FilterState {
  exFilterList: ExFilterList | null;
  exFilterListLoading: boolean;
  exFilterListError: AxiosError | null;
  exFilter: string[];
}

export type FilterActions =
  | ExFilterListAction
  | ReturnType<typeof changeExFilter>;

export interface ExFilterList {
  liver: ExFilter[];
  digest: ExFilter[];
  maternity: ExFilter[];
  xray: ExFilter[];
  ultra: ExFilter[];
  ct: ExFilter[];
  mri: ExFilter[];
  cancer: ExFilter[];
  function: ExFilter[];
  lyumatiseu: ExFilter[];
  infectious: ExFilter[];
  [key: string]: ExFilter[];
}

export interface ExFilter {
  checks_name: string;
  checks_code: string;
  checks_ca_code: string;
  checks_ca_name: string;
  checks_icons: string;
  checks_estimated_min: number;
  checks_estimated_max: number;
}

export interface ExCheckboxList {
  liver: ExCheckbox[];
  digest: ExCheckbox[];
  maternity: ExCheckbox[];
  xray: ExCheckbox[];
  ultra: ExCheckbox[];
  ct: ExCheckbox[];
  mri: ExCheckbox[];
  cancer: ExCheckbox[];
  function: ExCheckbox[];
  lyumatiseu: ExCheckbox[];
  infectious: ExCheckbox[];
  [key: string]: ExCheckbox[];
}

export interface ExCheckbox {
  checks_name: string;
  checks_code: string;
  checks_ca_code: string;
  checks_ca_name: string;
  checks_icons: string;
  checks_estimated_min: number;
  checks_estimated_max: number;
  isChecked: boolean;
}

interface ExFilterListRequest {
  type: typeof EXFILTER_LIST_REQUEST;
}

interface ExFilterListResponse {
  type: typeof EXFILTER_LIST_SUCCESS;
  payload: ExFilterList;
}

interface ExFilterListFailure {
  type: typeof EXFILTER_LIST_FAILURE;
  payload: AxiosError;
}

export type ExFilterListAction =
  | ExFilterListRequest
  | ExFilterListResponse
  | ExFilterListFailure;
