import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { postUnit } from 'store/actions/unitActions/postUnit';
import { updateUnit } from 'store/actions/unitActions/updateUnit';
import { IUnit } from '../../../models/IUnit';

interface UseUnitFormProps {
    unit?: IUnit;
}

export const useUnitForm = ({ unit }: UseUnitFormProps) => {
    const dispatch = useAppDispatch();
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
            dispatch(postUnit(data));
        }
    };

    return { control, handleSubmit, register, errors, onSubmit };
};