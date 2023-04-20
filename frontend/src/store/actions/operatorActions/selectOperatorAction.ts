import { selectOperator } from "store/reducers/operatorReduser/operatorReduser";

import { IOperator } from '../../../models/IOperator';

export const selectOperatorAction = (operator: IOperator) => (dispatch: any) => {
  dispatch(selectOperator(operator));
};