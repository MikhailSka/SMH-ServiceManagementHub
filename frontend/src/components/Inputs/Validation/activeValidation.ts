export const activeValidation = {
    validate: (value: string) => {
        if (value.toString() !== 'true' && value.toString() !=='false') {
            return 'Choose an option'
        }

        return true;
    }
};