import LocationTable from 'components/Tables/LocationTable/Components/LocationTable'
import { DialogProvider } from 'components/Dialogs/Context/DialogContextProvider'

const LocationPage: React.FC = () => {
  return (
      <DialogProvider>
        <LocationTable />
      </DialogProvider>
  )
}
export default LocationPage
