import { requiredField } from "./required";

export const emailValidation = {
    required: requiredField,
    validate: (value: string) => {
        if(value.match( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return true;
            
        }else{
            return 'Invalid email address'
        }
    }
};