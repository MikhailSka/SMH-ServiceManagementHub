import { IOperator } from "models/IOperator";

export interface OperatorState {
    operators: IOperator[];
    selectedOperator: IOperator | null;
    isLoading: boolean;
    error: string | null;
  }
  