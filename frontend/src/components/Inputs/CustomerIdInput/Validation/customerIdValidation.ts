export const customerIdValidation = {
    validate: (value: string) => {
        if (!value) {
            return 'Choose an option'
        }
        return true;
    }
};