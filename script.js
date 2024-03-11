document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch Bitcoin price');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Izpiši prejete podatke v konzoli za preverjanje
        const price = parseFloat(data.Price).toFixed(2); // Prikazi ceno do 2 decimalni mesti
        document.getElementById('price').innerText = `${price} USD`;
    })
    .catch(error => {
        console.error('Error fetching Bitcoin price:', error);
        document.getElementById('price').innerText = 'Failed to load price';
    });
});

function calculateBitcoin() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount)) {
        document.getElementById('result').innerText = 'Please enter a valid amount';
        return;
    }
    
    fetch('https://api.diadata.org/v1/assetQuotation/Bitcoin/0x0000000000000000000000000000000000000000')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch Bitcoin price');
        }
        return response.json();
    })
    .then(data => {
        const bitcoinPrice = parseFloat(data.Price);
        const bitcoinAmount = amount / bitcoinPrice;
        document.getElementById('result').innerText = `${amount} USD = ${bitcoinAmount.toFixed(8)} Bitcoin`;
    })
    .catch(error => {
        console.error('Error fetching Bitcoin price:', error);
        document.getElementById('result').innerText = 'Failed to calculate Bitcoin amount';
    });
}
