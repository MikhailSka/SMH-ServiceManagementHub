import ServiceTable from 'components/Tables/ServiceTable/Components/ServiceTable'
import { DialogProvider } from 'components/Dialogs/Context/DialogContextProvider'

const ServicePage: React.FC = () => {
  return (
      <DialogProvider>
        <ServiceTable />
      </DialogProvider>
  )
}
export default ServicePage
