import { TOGGLE_SIDENAVBAR } from "./SideNavBarActionTypes";
import { SideNavBarActionTypes } from "./SideNavBarActionTypes";
import { SideNavBarState } from './SideNavBarState';

const initialState: SideNavBarState = {
  drawerOpen: false,
};

const sideNavBarReducer = (
  state = initialState,
  action: SideNavBarActionTypes
): SideNavBarState => {
  switch (action.type) {
    case TOGGLE_SIDENAVBAR:
      return {
        ...state,
        drawerOpen: !state.drawerOpen,
      };
    default:
      return state;
  }
};

export default sideNavBarReducer;