import { IOperator } from 'models/IOperator'
import { RowActions } from 'components/Tables/Common/RowActions'
import { useOperatorActions } from '../Hooks/useOperatorActions'

interface OperatorRowActionsProps {
  operator: IOperator
}

export const OperatorRowActions: React.FC<OperatorRowActionsProps> = ({
  operator,
}) => {
  const { handleUpdate, handleDelete } = useOperatorActions(operator)

  return <RowActions handleUpdate={handleUpdate} handleDelete={handleDelete} />
}
