import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'

interface ActiveStatusRendererProps {
  value: boolean
}

const ActiveStatusRenderer: React.FC<ActiveStatusRendererProps> = ({
  value,
}) => {
  return value ? (
    <CheckCircleIcon color="success" />
  ) : (
    <CancelIcon color="error" />
  )
}

export default ActiveStatusRenderer
