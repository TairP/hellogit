function sumNumbers(){
    let sum = 0;
    let input;
    while(input !== 'end') {
        input = prompt ('number please')
        if (input === 'end') {
        alert (sum);
        }
        else if (isNaN(Number(input))) {
        alert ('numbers only')
        }
        else {
            sum+=Number(input);
        }
    }
}
sumNumbers();
