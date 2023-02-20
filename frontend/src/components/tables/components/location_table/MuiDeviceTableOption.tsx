import { MUIDataTableOptions } from "mui-datatables";

import { MuiDeviceCustomToolbar } from "./MuiDeviceCustomToolbar";
import { ModalState } from "context/modal_context/components/ModalState";

export const MuiDeviceTableOptions: MUIDataTableOptions = {
    jumpToPage: true,
    fixedHeader: true,
    fixedSelectColumn: false,
    sortOrder: { name: 'amount', direction: 'asc' },
    filterType: 'checkbox',
    responsive: 'standard',
    selectableRows: 'none',
    elevation: 0,
    rowsPerPageOptions: [5, 10, 20, 25, 50, 100],
    downloadOptions: {
        filename: 'filename.csv',
        separator: ',',
    },
    draggableColumns: {
        enabled: true,
    },
    sortFilterList: false,
    customToolbar: () => {
        return (
            <ModalState>
                <MuiDeviceCustomToolbar />
            </ModalState>
        );
    },
    setFilterChipProps: () => {
        return {
            color: 'primary',
            variant: 'outlined',
        };
    },
    textLabels: {
        body: {
            noMatch: 'Sorry, no matching records found',
            toolTip: 'Sort',
            columnHeaderTooltip: column => (column.label ? `Sort on ${column.label}` : `Sort`),
        },
        pagination: {
            next: 'Next Page',
            previous: 'Previous Page',
            rowsPerPage: 'Rows per page:',
            displayRows: 'of',
            jumpToPage: 'Go To',
        },
        toolbar: {
            search: 'Search',
            downloadCsv: 'Download CSV',
            print: 'Print',
            viewColumns: 'View Columns',
            filterTable: 'Filter Table',
        },
        filter: {
            all: 'All',
            title: 'FILTERS',
            reset: 'RESET',
        },
        viewColumns: {
            title: 'Show Columns',
            titleAria: 'Show/Hide Table Columns',
        },
        selectedRows: {
            text: 'rows(s) selected',
            delete: 'Delete',
            deleteAria: 'Delete Selected Rows',
        },
    },
    storageKey: 'SavedToLocalStorage'
};