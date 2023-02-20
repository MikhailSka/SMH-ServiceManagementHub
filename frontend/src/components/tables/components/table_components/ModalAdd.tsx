import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useContext } from "react";

import { AddButton } from "components/buttons/components/AddButton";
import { OpenModal } from "components/modal/components/OpenModal";
import { ModalContext } from "context/modal_context/components/ModalContext";

export function ModalAdd({ children }: { children: React.ReactNode }) {

  const { modal, openModal, closeModal } = useContext(ModalContext)

  return (
    <>
      <AddButton
        handleAction={openModal}
      />
      <OpenModal
        show={modal}
        title={"ADD"}
        decorator={<PlaylistAddIcon />}
        onClose={closeModal}
      >
        {children}
      </OpenModal>
    </>
  )
}