//Convert to Binary.
function convert_to_binary() {
    var source = document.getElementById('conversion-number').value;
    var decNum = Math.floor(source);
    var quotient = decNum;
    var resultCalc = '';
    while (decNum != 0) {
        let binaryBit = Math.floor(quotient % 2);
        quotient = Math.floor(decNum / 2);
        resultCalc += binaryBit.toString();
        decNum = quotient;
    };
    let result = '';
    let swap = resultCalc.length - 1;
    while (swap >= 0) {
        result += resultCalc[swap];
        swap -= 1;
    }
    document.getElementById('outputField').innerHTML = result;
    document.getElementById('outputHead').innerHTML = `${source} in Binary is:`

}

//Convert to Decimal.
function convert_to_decimal() {
    let source = document.getElementById('conversion-number').value;
    let binNum = source.split('');
    let binaryCalc = [];
    let swap = binNum.length - 1;
    while (swap >= 0) {
        binaryCalc.push(binNum[swap]);
        swap -- ;
    }
    let binaryIndex = 0;
    let output = 0;
    for (value of binaryCalc) {
        if (value == '1') {
            output = (output + 2 ** binaryIndex);
            binaryIndex ++;
        } else {
            binaryIndex ++;
        }
    }
    document.getElementById('outputField').innerHTML = output;
    document.getElementById('outputHead').innerHTML = `${source} in Decimal is:`
}
