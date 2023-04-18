import { Posts } from 'components/Posts/Posts'
import { DialogProvider } from 'components/Dialogs/Context/DialogContextProvider'

export default function HomePage() {
  return (
    <DialogProvider>
      <Posts />
    </DialogProvider>
  )
}
