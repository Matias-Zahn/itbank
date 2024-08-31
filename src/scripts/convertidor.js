function convertir() {
    const monto = document.getElementById('monto').value;
    const deMoneda = document.getElementById('deMoneda').value;
    const aMoneda = document.getElementById('aMoneda').value;

    let resultado = 0;

    
    if (deMoneda === 'USD' && aMoneda === 'ARS') {
        resultado = monto * 950;
    } else if (deMoneda === 'USD' && aMoneda === 'EUR') {
        resultado = monto * 0.9;
    } else if (deMoneda === 'ARS' && aMoneda === 'USD') {
        resultado = monto * 0.11; 
    } else if (deMoneda === 'ARS' && aMoneda === 'EUR') {
        resultado = monto * 0.10;
    } else if (deMoneda === 'EUR' && aMoneda === 'USD') {
        resultado = monto * 1.11;
    } else if (deMoneda === 'EUR' && aMoneda === 'ARS') {
        resultado = monto * 1050;
    } else {
        resultado = monto; 
    }

    const mensaje = monto + ' ' + deMoneda + ' = ' + resultado.toFixed(2) + ' ' + aMoneda;
    document.getElementById('resultado').innerText = mensaje;
}