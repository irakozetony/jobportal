export const parseString = (stringToParse: string) => {
    console.log(stringToParse);
    return (stringToParse.split(';').map((requirement) => requirement.trim()));
}
