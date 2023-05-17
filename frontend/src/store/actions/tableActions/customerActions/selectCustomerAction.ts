import { selectCustomer } from "store/reducers/tableRedusers/customerReduser/customerReduser";
import { ICustomer } from '../../../../models/ICustomer';

export const selectCustomerAction = (customer: ICustomer) => (dispatch: any) => {
    dispatch(selectCustomer(customer));
};
