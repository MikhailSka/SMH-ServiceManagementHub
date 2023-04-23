// import DeviceTable from 'components/Tables/DeviceTable/Components/DeviceTable'
import UnitTable from 'components/Tables/UnitTable/Components/UnitTable'
import { DialogProvider } from 'components/Dialogs/Context/DialogContextProvider'

const DevicePage: React.FC = () => {
  return (
      <DialogProvider>
        <UnitTable />
      </DialogProvider>
  )
}
export default DevicePage
