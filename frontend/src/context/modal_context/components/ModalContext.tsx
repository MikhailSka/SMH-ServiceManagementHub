import { createContext } from 'react'

import { IModalContext } from '../model/IModalContext'

export const ModalContext = createContext<IModalContext>({
    modal: false,
    openModal: () => { },
    closeModal: () => { }
})
