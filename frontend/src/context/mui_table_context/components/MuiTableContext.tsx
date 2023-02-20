import { createContext } from 'react'

import { IMuiTableContext } from '../model/IMuiTableContext'

export const MuiTableContext = createContext<IMuiTableContext>({
    data: [],
    addRow: (data: any) => { },
    updateRow: (data: any, id: string) => { },
    deleteRow: (id: string) => { },
})