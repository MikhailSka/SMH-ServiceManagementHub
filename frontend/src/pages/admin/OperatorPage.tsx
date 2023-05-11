import OperatorTable from 'components/Tables/OperatorTable/Components/OperatorTable'
import { DialogProvider } from 'components/Dialogs/Context/DialogContextProvider'

const OperatorPage: React.FC = () => {
  return (
      <DialogProvider>
        <OperatorTable />
      </DialogProvider>
  )
}
export default OperatorPage
