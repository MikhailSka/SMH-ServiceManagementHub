import MUIDataTable from "mui-datatables";
import { useMemo } from "react";
import { MUIDataTableBody } from "mui-datatables";
import { useLoaderData } from "react-router-dom";

import { LoadingTableBody } from "../table_components/MuiTableLoadingBody";
import { MuiTableState } from "context/mui_table_context/components/MuiTableState";
import { MuiDeviceColumns } from "./MuiDeviceColumns";
import { MuiDeviceTableOptions } from "./MuiDeviceTableOption";

import "../../styles/table.css"

export default function MuiDeviceTable() {
    const { devices, loading, deleteDevice, addDevice, updateDevice } = useLoaderData()

    const BodyComponent = useMemo(
        () => (props: MUIDataTableBody) => (
            <LoadingTableBody loading={loading} {...props} />
        ),
        [loading]
    );

    return (
        <div className="table">
        <MuiTableState addRow={addDevice} updateRow={updateDevice} deleteRow={deleteDevice} data={devices}>
            <MUIDataTable
                data={devices}
                title={"Devices"}
                columns={MuiDeviceColumns}
                options={MuiDeviceTableOptions}
                components={{ TableBody: BodyComponent }}
            />
        </MuiTableState>
        </div>
    )
}