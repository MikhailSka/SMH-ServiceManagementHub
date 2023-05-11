import { ILocation } from 'models/ILocation';
import { RowActions } from 'components/Tables/Common/RowActions';
import { useLocationActions } from '../Hooks/useLocationActions';

interface LocationRowActionsProps {
  location: ILocation;
}

const LocationRowActions: React.FC<LocationRowActionsProps> = ({ location }) => {
  const { handleUpdate, handleDelete } = useLocationActions(location);

  return <RowActions handleUpdate={handleUpdate} handleDelete={handleDelete} />;
};

export default LocationRowActions;