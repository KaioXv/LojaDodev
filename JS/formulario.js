document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    var formData = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    fetch('https://apigenerator.dronahq.com/api/g6L5NvCu/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar o formulário.');
        }
        alert('Formulário enviado com sucesso!');
        document.getElementById("contact-form").reset();
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    });
});