import React from "react"
import { useContext } from "react"
import Box from '@mui/joy/Box';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Typography from '@mui/joy/Typography';

import { TrashButton } from "components/buttons/components/TrashButton"
import { OpenModal } from "components/modal/components/OpenModal"
import { ModalContext } from "context/modal_context/components/ModalContext"

export function ModalDelete({ children }: { children: React.ReactNode }) {
    
    const { modal, openModal, closeModal } = useContext(ModalContext)

    return (
        <React.Fragment>
            <TrashButton handleAction={openModal} />
            <OpenModal
                onClose={closeModal}
                show={modal}
                decorator={<WarningRoundedIcon />}
                title="DELETE"
            >
                <React.Fragment>
                    <Typography
                        id="alert-dialog-modal-description"
                        textColor="text.tertiary"
                        mb={3}
                    >
                        Are you sure you delete to delete this?
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                        {children}
                    </Box>
                </React.Fragment>

            </OpenModal>
        </React.Fragment>
    );
}