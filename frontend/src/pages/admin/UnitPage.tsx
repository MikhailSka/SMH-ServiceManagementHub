import UnitTable from 'components/Tables/UnitTable/Components/UnitTable'
import { DialogProvider } from 'components/Dialogs/Context/DialogContextProvider'

const UnitPage: React.FC = () => {
  return (
      <DialogProvider>
        <UnitTable />
      </DialogProvider>
  )
}
export default UnitPage
