import { selectUnitLocationHistory } from "store/reducers/unitHistoryReduser/unitHistoryReduser";

import { IUnitHistory } from "models/IUnitHistory";

export const selectUnitLocationHistoryAction = (unitLocationHistory: IUnitHistory) => (
    dispatch: any
  ) => {
    dispatch(selectUnitLocationHistory(unitLocationHistory));
  };