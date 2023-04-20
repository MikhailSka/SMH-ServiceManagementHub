import { selectCustomer } from "store/reducers/customerReduser/customerReduser";
import { ICustomer } from '../../../models/ICustomer';

export const selectCustomerAction = (customer: ICustomer) => (dispatch: any) => {
    dispatch(selectCustomer(customer));
};
