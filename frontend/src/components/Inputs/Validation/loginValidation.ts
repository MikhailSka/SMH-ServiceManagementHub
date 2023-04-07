import { requiredField } from "./required";

export const loginValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.match(/[а-яА-Я]/)) {
            return 'Логин не может содержать русские буквы'
        }

        return true;
    }
};