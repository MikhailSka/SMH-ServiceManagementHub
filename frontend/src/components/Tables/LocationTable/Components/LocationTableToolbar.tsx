import { useDialogContext } from 'components/Dialogs/Context/useDialogContext';
import { AddButton } from 'components/Buttons/Components/IconButtons/AddButton';
import { LocationForm } from 'components/Forms/TableForms/LocationForm/LocationForm';

export const LocationTableToolbar: React.FC = () => {
  const { openDialog } = useDialogContext();

  const handleAddButtonClick = () => {
    const content = <LocationForm />;
    const title = 'Add Location';
    openDialog(content, title);
  };

  return <AddButton handleAction={handleAddButtonClick} />;
};
