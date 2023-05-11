export const operatorIdValidation = {
    validate: (value: string) => {
        if (!value) {
            return 'Choose an option'
        }
        return true;
    }
};