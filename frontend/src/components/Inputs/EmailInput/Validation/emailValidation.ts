import { requiredField } from "../../Common/Validation/required";

export const emailValidation = {
    required: requiredField,
    validate: (value: string) => {
        if (value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return true;

        }
        else if (value.length >= 128) {
            return `Email is too long`
        }
        else {
            return 'Invalid email address'
        }
    }
};