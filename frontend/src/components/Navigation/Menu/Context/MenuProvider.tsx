import { useState, ReactNode } from 'react';

import { MenuContext } from './MenuContext';

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menu, setMenu] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setMenu(null);
  };

  const contextValue = {
    menu,
    openMenu,
    closeMenu,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      {children}
    </MenuContext.Provider>
  );
};