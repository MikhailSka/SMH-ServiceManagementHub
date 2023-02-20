import { createContext } from 'react'

import { ITabContext } from '../model/ITabContext'

export const TabContext = createContext<ITabContext>({
    tab: null,
    openTab: () => { },
    closeTab: () => { }
})
