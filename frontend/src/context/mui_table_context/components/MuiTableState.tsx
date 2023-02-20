import { IMuiTableContext } from '../model/IMuiTableContext'
import { MuiTableContext } from './MuiTableContext'

export const MuiTableState = (props: IMuiTableContext ) => {
    const data = props.data

    const addRow = props.addRow

    const updateRow = props.updateRow

    const deleteRow = props.deleteRow

    return (
        <MuiTableContext.Provider value={{ data, addRow, updateRow, deleteRow }}>
            {props.children}
        </MuiTableContext.Provider>
    )
}