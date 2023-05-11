import { TOGGLE_SIDENAVBAR } from "store/reducers/sideNavBarReducer/SideNavBarActionTypes";
import { SideNavBarActionTypes } from "store/reducers/sideNavBarReducer/SideNavBarActionTypes";

export const toggleSideNavBar = (): SideNavBarActionTypes => {
  return {
    type: TOGGLE_SIDENAVBAR,
  };
};