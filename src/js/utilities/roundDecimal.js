const roundDecimal = (value, precision) => {
    let precisionCount = 1;
    for(let i=0;i<precision;i++){
        precisionCount *= 10;
    }
    return Math.round(value * precisionCount)/precisionCount;
}

export default roundDecimal;
