function validar() {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let pais = document.getElementById('pais')
    let num = document.getElementById('num')
    let data = document.getElementById('data')
    let padrao = document.getElementById('padrao')
    let res = document.getElementById('res')

    // Limpar mensagens de erro anteriores
    document.querySelectorAll('.error-msg').forEach(el => el.remove());

    let hasError = false;

    if (nome.value.length == 0){
        showError('nome', '[ERRO] Campo "Nome completo" é obrigatório.');
        hasError = true;
    }
    if (email.value.length == 0) {
        showError('email', '[ERRO] Campo "E-mail" é obrigatório.');
        hasError = true;
    }
    if (pais.value == 'Selecione um país...') {
        showError('pais', '[ERRO] Campo "País" é obrigatório.');
        hasError = true;
    }
    if (num.value.length == 0) {
        showError('num', '[ERRO] Campo "Número de celular" é obrigatório.');
        hasError = true;
    }
    if (data.value.length == 0) {
        showError('data', '[ERRO] Campo "Data de nascimento" é obrigatório.');
        hasError = true;
    }

    if (!hasError) {
        // Animação no botão
        let botao = document.getElementById('botao');
        botao.classList.add('spin');
        setTimeout(() => botao.classList.remove('spin'), 500);

        res.innerHTML = '<p>Tudo ok!</p>'
        let dataFormatada = new Date(data.value).toLocaleDateString('pt-BR');
        res.innerHTML += `<p>Seu nome é: ${nome.value}</p><p>Seu email para contato é: ${email.value}</p><p>Você mora em: ${pais.value}</p><p>Seu número para contato é: ${num.value}</p><p>Sua data de nascimento é: ${dataFormatada}.</p>`
        let botaoconfirm = document.createElement('input')
        botaoconfirm.type = 'button'
        botaoconfirm.value = 'Confirmar'
        botaoconfirm.id = 'confirmar'
        botaoconfirm.onclick = confirmar
        res.appendChild(botaoconfirm)
        let botaocancel = document.createElement('input')
        botaocancel.type = 'button'
        botaocancel.value = 'Cancelar'
        botaocancel.id = 'cancelar'
        botaocancel.onclick = cancelar
        res.appendChild(botaocancel)
        botaoconfirm.style.background = 'rgb(53, 184, 53)'
        botaocancel.style.background = 'red'
        botaoconfirm.style.color = 'white'
        botaocancel.style.color = 'white'
        botaoconfirm.style.borderRadius = '7px'
        botaocancel.style.borderRadius = '7px'
        botaoconfirm.style.padding = '10px'
        botaocancel.style.padding = '10px'
        botaoconfirm.style.marginRight = '17px'
        botaocancel.style.marginRight = '17px'
        botaoconfirm.style.marginBottom = '15px'
        botaocancel.style.marginBottom = '15px'
        botaoconfirm.style.width = '145px'
        botaocancel.style.width = '145px'

        // Mostrar #res com animação
        res.classList.add('show');
    }
}

function showError(fieldId, message) {
    let field = document.getElementById(fieldId);
    let errorSpan = document.createElement('span');
    errorSpan.className = 'error-msg';
    errorSpan.style.color = 'red';
    errorSpan.style.fontSize = '0.9em';
    errorSpan.innerText = message;
    field.parentNode.appendChild(errorSpan);
}

function confirmar() {
    let botaoconfirm = document.getElementById('confirmar')
    res.innerHTML += '<p>Inscricão realizada com sucesso.</p>'
}

function cancelar() {
    let botaocancel = document.getElementById('cancelar')
    res.innerHTML += '<p>Por favor, edite os dados incorretos inseridos e clique em "Validar Dados".</p>'
}
