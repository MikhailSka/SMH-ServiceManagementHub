import { createContext } from 'react'

interface TabContextValue {
  tab: HTMLElement | null
  openTab: (event: React.MouseEvent<HTMLElement>) => void
  closeTab: () => void
}

export const TabContext = createContext<TabContextValue | undefined>(undefined)
