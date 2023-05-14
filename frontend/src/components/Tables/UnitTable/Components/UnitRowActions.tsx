import { IUnit } from 'models/IUnit'
import { RowActions } from 'components/Tables/Common/RowActions'
import { useUnitActions } from '../Hooks/useUnitActions'

interface UnitRowActionsProps {
  unit: IUnit
}

export const UnitRowActions: React.FC<UnitRowActionsProps> = ({ unit }) => {
  const { handleUpdate, handleDelete } = useUnitActions(unit)

  return <RowActions handleUpdate={handleUpdate} handleDelete={handleDelete} />
}
