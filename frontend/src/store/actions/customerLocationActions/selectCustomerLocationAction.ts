import { selectCustomerLocation } from "store/reducers/customerLocationReduser/customerLocationReduser"
import { ICustomerLocation } from "models/ICustomerLocation"

export const selectCustomerLocationAction = (customerLocation: ICustomerLocation) => (dispatch: any) => {
  dispatch(selectCustomerLocation(customerLocation))
}