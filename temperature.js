function convert() {
    const inputTemp = document.getElementById('degree').value;

    const tempSelected = document.getElementById('type');
    const valueTemp = type.options[tempSelected.selectedIndex].value;
    
    // Celsius to Fahrenheit
    function celToFah(cel) {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    function fahToCel(fah) {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'Celsius') {
        document.getElementById("display").innerHTML = celToFah(inputTemp);
    }
    else {
        document.getElementById("display").innerHTML = fahToCel(inputTemp);
    }
}

