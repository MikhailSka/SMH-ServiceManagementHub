export interface IUnitView {
    id?: string;
    active: boolean;
    name: string;
    serial_number: string;
    product_code: string;
    device_id: string;
    device_name?: string;
    operator_id: string;
    operator_name?: string;
    description: string;
    creation_date?: string;
    modification_date?: string;
  }