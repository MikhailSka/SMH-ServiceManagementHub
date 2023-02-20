import { useContext } from "react"
import { IsDataActive } from "components/icons/components/IsDataActive"
import { ModalState } from "context/modal_context/components/ModalState"
import { FormatDate } from "services/format/FormatDate"
import { ModalUpdate } from "../table_components/ModalUpdate"
import { ModalDelete } from "../table_components/ModalDelete"
import { DeleteButton } from "components/buttons/components/DeleteButton"
import { MuiTableContext } from "context/mui_table_context/components/MuiTableContext"
import { UpdateDeviceForm } from "components/forms/components/forms/device_form/components/UpdateDeviceForm"

export const MuiDeviceColumns = [
    {
        name: "id",
        options: {
            viewColumns: false,
            display: false,
            filter: false,
            searchable: false
        }
    },
    {
        name: "active",
        label: "Status",
        options: {
            filter: false,
            sort: true,
            viewColumns: true,
            setCellProps: () => ({ style: { width: "30px" } }),
            customBodyRender: (value: any) => {
                return IsDataActive(value)
            }
        }
    },
    {
        name: "name",
        label: "Name",
        options: {
            filter: false,
            sort: true,
            viewColumns: true
        }
    },
    {
        name: "creation_date",
        label: "Creation Date",
        options: {
            filter: true,
            sort: true,
            viewColumns: true,
            customBodyRender: (value: any) => {
                return FormatDate(value)
            }

        }
    },
    {
        name: "modification_date",
        label: "Modification Date",
        options: {
            filter: true,
            sort: true,
            viewColumns: true,
            customBodyRender: (value: any) => {
                return FormatDate(value)
            }
        }
    },
    {
        name: "",
        options: {
            viewColumns: false,
            filter: false,
            sort: false,
            empty: true,
            setCellProps: () => ({ style: { width: "80px" } }),
            customBodyRenderLite: (dataIndex: number) => {
                const { deleteRow, data } = useContext(MuiTableContext)
                return (
                    <ModalState>
                        <ModalDelete>
                            <DeleteButton handleAction={() => deleteRow(data[dataIndex]['id'])} />
                        </ModalDelete>
                    </ModalState>
                )
            }
        }
    },
    {
        name: "",
        options: {
            viewColumns: false,
            filter: false,
            sort: false,
            empty: true,
            setCellProps: () => ({ style: { width: "80px" } }),
            customBodyRenderLite: (dataIndex: number) => {
                const { data } = useContext(MuiTableContext)
                return (
                    <ModalState>
                        <ModalUpdate>
                            <UpdateDeviceForm preloadedValues={data[dataIndex]} />
                        </ModalUpdate>
                    </ModalState>
                )
            }
        }
    }
]