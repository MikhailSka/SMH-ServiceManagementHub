import { selectUnitLocationHistory } from "store/reducers/unitLocationHistoryReduser/unitLocationHistoryReduser";

import { IUnitLocationHistory } from "models/IUnitLocationHistory";

export const selectUnitLocationHistoryAction = (unitLocationHistory: IUnitLocationHistory) => (
    dispatch: any
  ) => {
    dispatch(selectUnitLocationHistory(unitLocationHistory));
  };