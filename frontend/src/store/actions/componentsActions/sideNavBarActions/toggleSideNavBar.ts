import { TOGGLE_SIDENAVBAR } from "store/reducers/componentsRedusers/sideNavBarReducer/SideNavBarActionTypes";
import { SideNavBarActionTypes } from "store/reducers/componentsRedusers/sideNavBarReducer/SideNavBarActionTypes";

export const toggleSideNavBar = (): SideNavBarActionTypes => {
  return {
    type: TOGGLE_SIDENAVBAR,
  };
};