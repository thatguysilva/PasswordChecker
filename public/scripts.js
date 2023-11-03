async function checkPassword() {
    const passwordInput = document.getElementById('password');
    const resultDiv = document.getElementById('result');
    
    const password = passwordInput.value;
    const response = await fetch('http://localhost:3000/check-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
    });

    const data = await response.json();
    resultDiv.innerText = data.message;
}
