const cadastroCliente = document.getElementById('from-api')

cadastroCliente.addEventListener('submit', evento => {
    evento.preventDefault();

    const formData = new FormData(cadastroCliente);
    const data = Object.fromEntries(formData)

    fetch('http://localhost:3000/clientes', {
        method:'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
}).then(res => res.json()).then(data => console.log(data))


})