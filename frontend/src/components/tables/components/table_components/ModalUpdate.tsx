import { useContext } from "react"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

import { OpenModal } from "components/modal/components/OpenModal"
import { ModalContext } from "context/modal_context/components/ModalContext"
import { PenButton } from "components/buttons/components/PenButton"

export function ModalUpdate({ children }: { children: React.ReactNode }) {
  
  const { modal, openModal, closeModal } = useContext(ModalContext)

  return (
    <>
      <PenButton
        handleAction={openModal}
      />
      <OpenModal
        show={modal}
        title={"EDIT"}
        decorator={<DriveFileRenameOutlineIcon />}
        onClose={closeModal}
      >
        {children}
      </OpenModal>
    </>
  )
}