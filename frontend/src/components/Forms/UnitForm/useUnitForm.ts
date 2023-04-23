import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
import { postUnit } from 'store/actions/unitActions/postUnit';
import { updateUnit } from 'store/actions/unitActions/updateUnit';
import { IUnitView } from 'models/Unit/IUnitView';
import { IUnit} from '../../../models/Unit/IUnit';

interface UseUnitFormProps {
    unit?: IUnitView;
}
const convertIUnitViewToIUnit = (unitView: IUnitView): IUnit => {
    if (!unitView) {
        // Return an empty IUnit object or handle the error as required
        return {
          active: false,
          name: "",
          serial_number: "",
          product_code: "",
          device_id: "",
          operator_id: "",
          description: "",
        };
      }
    
      const {
        id,
        active,
        name,
        serial_number,
        product_code,
        device_id,
        operator_id,
        description,
        creation_date,
        modification_date,
      } = unitView;
    
      return {
        id,
        active,
        name,
        serial_number,
        product_code,
        device_id,
        operator_id,
        description,
        creation_date,
        modification_date,
      };
    
  };

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
            console.log(convertIUnitViewToIUnit(data))
            dispatch(updateUnit(convertIUnitViewToIUnit(data)));
        } else {
            dispatch(postUnit(data));
        }
    };

    return { control, handleSubmit, register, errors, onSubmit };
};