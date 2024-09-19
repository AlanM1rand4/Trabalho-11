let numeroAleatorio = Math.floor(Math.random() * 101);

    function adivinhar() {
        let palpite = document.getElementById("palpite").value;
        let resultado = document.getElementById("resultado");

        if (palpite === "") {
            resultado.textContent = "Por favor, insira um número!";
            return;
        }

        palpite = parseInt(palpite);

        if (palpite > numeroAleatorio) {
            resultado.textContent = "Está abaixo!";
        } else if (palpite < numeroAleatorio) {
            resultado.textContent = "Está acima!";
        } else {
            resultado.textContent = "Parabéns! Você acertou!";
            resetarJogo();
        }
    }

    function resetarJogo() {
        setTimeout(() => {
            numeroAleatorio = Math.floor(Math.random() * 101);
            document.getElementById("resultado").textContent = "Novo jogo iniciado! Tente adivinhar novamente.";
            document.getElementById("palpite").value = "";
        }, 2000); // Aguarda 2 segundos antes de iniciar um novo jogo
    }

console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
