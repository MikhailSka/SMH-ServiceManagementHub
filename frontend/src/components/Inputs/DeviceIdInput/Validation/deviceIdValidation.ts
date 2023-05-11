export const deviceIdValidation = {
    validate: (value: string) => {
        if (!value) {
            return 'Choose an option'
        }
        return true;
    }
};