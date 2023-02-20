import React from 'react'
import { useState } from 'react'

import { ModalContext } from './ModalContext'

export const ModalState = ({ children }: { children: React.ReactNode }) => {
    const [modal, setModal] = useState(false)

    const openModal = () => setModal(true)

    const closeModal = () => setModal(false)

    return (
        <ModalContext.Provider value={{ modal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}