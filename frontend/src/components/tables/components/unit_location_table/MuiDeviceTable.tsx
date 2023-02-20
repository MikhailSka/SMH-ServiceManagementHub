import MUIDataTable from "mui-datatables";
import { useMemo } from "react";
import { MUIDataTableBody } from "mui-datatables";

import { LoadingTableBody } from "../table_components/MuiTableLoadingBody";
import { useDevices } from "services/data/components/DeviceService";
import { MuiTableState } from "context/mui_table_context/components/MuiTableState";
import { MuiDeviceColumns } from "./MuiDeviceColumns";
import { MuiDeviceTableOptions } from "./MuiDeviceTableOption";

export function MuiDeviceTable() {
    const { devices, loading, deleteDevice, addDevice, updateDevice } = useDevices()

    const BodyComponent = useMemo(
        () => (props: MUIDataTableBody) => (
            <LoadingTableBody loading={loading} {...props} />
        ),
        [loading]
    );

    return (
        <MuiTableState addRow={addDevice} updateRow={updateDevice} deleteRow={deleteDevice} data={devices}>
            <MUIDataTable
                data={devices}
                title={"Devices"}
                columns={MuiDeviceColumns}
                options={MuiDeviceTableOptions}
                components={{ TableBody: BodyComponent }}
            />
        </MuiTableState>
    )
}