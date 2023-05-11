import { createContext } from 'react'

interface MenuContextValue {
  menu: HTMLElement | null
  openMenu: (event: React.MouseEvent<HTMLElement>) => void
  closeMenu: () => void
}

export const MenuContext = createContext<MenuContextValue | undefined>(undefined)
