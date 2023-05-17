import { useNavigate } from 'react-router-dom';

import { useMenuContext } from '../../Context/useMenuContext';
import { toggleSideNavBar } from 'store/actions/componentsActions/sideNavBarActions/toggleSideNavBar';
import { useAppDispatch } from 'store/hooks';

export const useMenuOptions = () => {
  const { closeMenu } = useMenuContext();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return [
    {
      key: 'Home',
      onClick: () => {
        closeMenu();
        navigate('/');
      },
    },
    {
      key: 'Service',
      onClick: () => {
        closeMenu();
        navigate('/service');
      },
    },
    {
      key: 'Tables',
      onClick: () => {
        dispatch(toggleSideNavBar());
      },
    },
  ];
};