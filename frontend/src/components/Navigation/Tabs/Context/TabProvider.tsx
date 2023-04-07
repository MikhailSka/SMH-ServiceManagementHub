import { useState, ReactNode } from 'react';

import { TabContext } from './TabContext';

interface TabProviderProps {
  children: ReactNode;
}

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
  const [tab, setTab] = useState<null | HTMLElement>(null);

  const openTab = (event: React.MouseEvent<HTMLElement>) => {
    setTab(event.currentTarget);
  };

  const closeTab = () => {
    setTab(null);
  };

  const contextValue = {
    tab,
    openTab,
    closeTab,
  };

  return (
    <TabContext.Provider value={contextValue}>
      {children}
    </TabContext.Provider>
  );
};