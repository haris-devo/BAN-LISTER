/* eslint-disable no-unused-vars */
export interface IFormData {
  name: string;
  country: string;
  streamProfile: string;
  email: string;
  website: string;
}
export interface IFormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormSelectProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
