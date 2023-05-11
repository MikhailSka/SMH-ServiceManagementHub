export const locationIdValidation = {
    validate: (value: string) => {
        if (!value) {
            return 'Choose an option'
        }
        return true;
    }
};