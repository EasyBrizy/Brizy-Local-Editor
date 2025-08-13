import { Response } from "./common";

export interface FormFieldsOption {
  title: string;
  value: string;
}

export interface Form {
  action?: string;
  recaptcha?: {
    siteKey: string;
  };
  fields?: {
    label?: string;
    handler: (res: Response<Array<FormFieldsOption>>, rej: Response<string>) => void;
  };
  fields2?: {
    label?: string;
    handler: (res: Response<Array<FormFieldsOption>>, rej: Response<string>) => void;
  };
}

export type FormInputTypes =
  | "Text"
  | "Email"
  | "Number"
  | "Paragraph"
  | "Select"
  | "Radio"
  | "Checkbox"
  | "Date"
  | "Url"
  | "Time"
  | "FileUpload"
  | "Hidden"
  | "Tel"
  | "Password";
