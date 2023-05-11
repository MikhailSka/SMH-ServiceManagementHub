import CustomerTable from 'components/Tables/CustomerTable/Components/CustomerTable'
import { DialogProvider } from 'components/Dialogs/Context/DialogContextProvider'

const CustomerPage: React.FC = () => {
  return (
      <DialogProvider>
        <CustomerTable />
      </DialogProvider>
  )
}
export default CustomerPage
