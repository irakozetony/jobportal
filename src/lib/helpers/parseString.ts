export const parseString = (stringToParse: string) => {
    return (stringToParse.split(';').map((requirement) => requirement.trim()));
}
