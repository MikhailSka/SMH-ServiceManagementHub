import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { postUnitLocation } from 'store/actions/unitLocationActions/postUnitLocation';
import { updateUnitLocation } from 'store/actions/unitLocationActions/updateUnitLocation';
import { IUnitLocation } from '../../../models/IUnitLocation';

interface UseUnitLocationFormProps {
  unitLocation?: IUnitLocation;
}

export const useUnitLocationForm = ({ unitLocation }: UseUnitLocationFormProps) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<IUnitLocation>({
    defaultValues: unitLocation,
  });

  useEffect(() => {
    if (unitLocation) {
      reset(unitLocation);
    }
  }, [unitLocation, reset]);

  const onSubmit = (data: IUnitLocation) => {
    if (unitLocation) {
      data.id = unitLocation.id;
      dispatch(updateUnitLocation(data));
    } else {
      dispatch(postUnitLocation(data));
    }
  };

  return { control, handleSubmit, register, errors, onSubmit };
};