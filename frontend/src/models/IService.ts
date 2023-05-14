export interface IService {
  id?: string;
  active: boolean;
  name: string;
  serial_number: string;
  product_code: string;
  location_id: string;
  location_name: string;
  customer_name: string;
  nip: string;
  device_name: string;
  operator_name: string;
  service_date: string;
  description: string;
  creation_date: string;
  modification_date: string;
}