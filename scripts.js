document.getElementById("cep").addEventListener("blur", (evento)=>{
    const elemento = evento.target;
    const cepInformado = elemento.value;

    if(!(cepInformado.length === 8))
        return;

    fetch('https://viacep.com.br/ws/${cepInformado}/json/')
        .then(response => response.json())
        .then(data => {
            if(!data.erro){
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            }else{
                alert("cep não encontrado.")
            }




        } )
        .catch(error => console.error("Erro ao buscar o cep: ", error));


})

    function validarFormulario(){
        const nome = document.getElementById("nome").value
        localStorage.setItem('nomeUsuario', nome);

        const idade = document.getElementById("idade").value
        localStorage.setItem('idadeUsuario', idade);

        const numero = document.getElementById("numero").value
        localStorage.setItem('numeroUsuario', numero);

        const cep = document.getElementById("cep").value
        localStorage.setItem('cepUsuario', cep);

    
    }

    
