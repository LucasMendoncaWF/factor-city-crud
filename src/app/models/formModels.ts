export interface Form {
  fields: Field[];
}

export interface Field {
  name: string;
  label?: string;
  type?: string;
  max?: number;
  min?: number;
  value?: any;
  options?: any;
}
