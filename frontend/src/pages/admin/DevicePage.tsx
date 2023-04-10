import DeviceTable from 'components/Tables/DeviceTable/Components/DeviceTable'
import { DialogProvider } from 'components/Dialogs/Context/DialogContextProvider'

const DevicePage: React.FC = () => {
  return (
      <DialogProvider>
        <DeviceTable />
      </DialogProvider>
  )
}
export default DevicePage
