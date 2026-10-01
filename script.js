// SELEÇÃO DOS ELEMENTOS DO HTML
const btnAbrirCadastro = document.getElementById('btn-abrir-cadastro');
const areaCadastro = document.getElementById('area-cadastro');
const formulario = document.getElementById('formulario-cadastro');
const campoNome = document.getElementById('nome');
const campoIdade = document.getElementById('idade');
const campoEmail = document.getElementById('email');
const campoSenha = document.getElementById('senha');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

const cardExplorar = document.getElementById('card-explorar');
const secaoExplorarLivros = document.getElementById('secao-explorar-livros');

// ABRIR/FECHAR CADASTRO
btnAbrirCadastro.addEventListener('click', function() {
    areaCadastro.classList.toggle('escondido');
    if (!areaCadastro.classList.contains('escondido')) {
        areaCadastro.scrollIntoView({ behavior: 'smooth' });
    }
});

// ABRIR EXPLORAR LIVROS
cardExplorar.addEventListener('click', function() {
    secaoExplorarLivros.classList.remove('escondido');
    secaoExplorarLivros.scrollIntoView({ behavior: 'smooth' });
});

// SALVAR NO LOCALSTORAGE E DESAPARECER ÁREA DE CADASTRO
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // 1. Criar o objeto de cadastro
    const novoUsuario = {
        nome: campoNome.value,
        idade: campoIdade.value,
        email: campoEmail.value,
        senha: campoSenha.value
    };

    // 2. Salvar no localStorage
    let usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios_bookplus')) || [];
    usuariosCadastrados.push(novoUsuario);
    localStorage.setItem('usuarios_bookplus', JSON.stringify(usuariosCadastrados));

    // 3. Exibir mensagem de sucesso
    mensagemSucesso.style.display = 'block';
    formulario.reset();

    // 4. Aguardar 2 segundos e fechar/esconder a área de cadastro automaticamente
    setTimeout(function() {
        mensagemSucesso.style.display = 'none';
        areaCadastro.classList.add('escondido');
    }, 2000);
});