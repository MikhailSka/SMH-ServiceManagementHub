import React from 'react'
import { useState } from 'react'

import { TabContext } from './TabContext'

export const TabState = ({ children }: { children: React.ReactNode }) => {
  const [tab, setTab] = useState<null | HTMLElement>(null)

  const openTab = (event: React.MouseEvent<HTMLElement>) => {
    setTab(event.currentTarget)
  }

  const closeTab = () => {
    setTab(null)
  }

  return (
    <TabContext.Provider value={{ tab, openTab, closeTab }}>
      {children}
    </TabContext.Provider>
  )
}
