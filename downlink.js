function encodeDownlink(input) {
  
const decToHex = (integer, shouldAddZero = true) => {
    let number = (+integer).toString(16).toUpperCase()
    if( (number.length % 2) > 0 && shouldAddZero ) { number= "0" + number }
    return number
}
const dec2hexWithZero = (i) => {
    return (i+0x10000).toString(16).substr(-4).toUpperCase();
}

const hextobytes = (i) => {
    return i.match(/(..)/g).map(b => parseInt(b, 16));
}


if (input.data.setTargetTemperature) {
    return {
    bytes: hextobytes('0E' + decToHex(input.data.setTargetTemperature)),
    fPort: 2
  };

}

}


