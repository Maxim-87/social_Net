export const required = (value: any) => {
    if (value) return undefined;
    else return 'Field is required';
}

export const maxlengthCreator = (maxlength: any) => (value: any) => {
    if (value && value.length > maxlength) return `Max value is over ${maxlength} symbols`;
    return undefined;
}

