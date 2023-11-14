export const isEmail = (input) => {
    return input.includes("@");
}

export const isEmpty = (input) => {
    return input.trim() !== "";
}

export const valueEquals = (value, value2) => {
    return value === value2;
}