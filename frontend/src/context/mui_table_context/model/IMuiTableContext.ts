export interface IMuiTableContext {
    addRow: (data: any) => any;
    updateRow: (data: any, id: string) => any;
    deleteRow: (id: string) => any;
    data: Array<any>;
    children?: React.ReactNode;
}