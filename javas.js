document.getElementById('convert').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (amount === '' || amount <= 0) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }

    // API ficticia para demostración
    const apiKey = 'your-api-key';  // Reemplazar con la clave de la API real
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            return response.json();
        })
        .then(data => {
            const rate = data.rates[toCurrency];
            if (!rate) {
                alert('Moneda no soportada.');
                return;
            }
            const result = (amount * rate).toFixed(2);
            document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al obtener los tipos de cambio. Verifique su conexión a Internet.');
        });
});
