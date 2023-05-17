import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from 'store/hooks';
import { postUnit } from 'store/actions/tableActions/unitActions/postUnit';
import { updateUnit } from 'store/actions/tableActions/unitActions/updateUnit';
import { getLocations } from 'store/actions/tableActions/locationActions/getLocations';
import { getDevices } from 'store/actions/tableActions/deviceActions/getDevices';
import { getOperators } from 'store/actions/tableActions/operatorActions/getOperators';
import { IUnit } from 'models/IUnit';

interface UseUnitFormProps {
    unit?: IUnit;
}

export const useUnitForm = ({ unit }: UseUnitFormProps) => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);
    const {
        control,
        handleSubmit,
        reset,
        register,
        formState: { errors },
    } = useForm<IUnit>({
        defaultValues: unit,
    });

    useEffect(() => {
        if (unit) {
            reset(unit);
        }
    }, [unit, reset]);

    const onSubmit = (data: IUnit) => {
        if (unit) {
            data.id = unit.id;
            dispatch(updateUnit(data));
        } else {
            console.log(data)
            dispatch(postUnit(data));
        }
    };

    useEffect(() => {
        const fetchOperatorsAndDevicesAndLocations = async () => {
          try {
            await Promise.all([dispatch(getOperators()), dispatch(getDevices()), dispatch(getLocations())]);
          } catch (error) {
            console.error('Error:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchOperatorsAndDevicesAndLocations();
      }, [dispatch]);
    
      return { control, handleSubmit, register, errors, onSubmit, loading };
};