import { MUIDataTableColumnDef } from "mui-datatables";
import { MUIDataTableOptions } from "mui-datatables";
import { MUIDataTableProps } from "mui-datatables";
import { MUIDataTableState } from "mui-datatables";

export interface IMUIDataTableProps {
    tableForm: React.ReactNode;
    title: string;
    loading: boolean;
    addRow: (data: any) => any;
    editRow: (data: any, id: string) => any;
    deleteRow: (id: string) => any;
    columns: MUIDataTableColumnDef[];
    components?: any
    data: Array<any>;
    options?: MUIDataTableOptions | undefined;
    innerRef?: React.RefObject<React.Component<MUIDataTableProps, MUIDataTableState> | null | undefined> | undefined;
}