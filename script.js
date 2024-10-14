// Contador de abóboras porr
let pumpkinCount = 0;

function collectPumpkin() {
    pumpkinCount++;
    document.getElementById("foundCount").innerText = pumpkinCount;
    // Adicionar abóboras ao site 
const pumpkinCountTotal = 6;
let pumpkinCount = 0;
let pumpkins = [];

function createPumpkins() {
    for (let i = 0; i < pumpkinCountTotal; i++) {
        const pumpkin = document.createElement("img");
        pumpkin.src = "/mnt/data/abobora.gif"; // Usando o GIF fornecido
        pumpkin.classList.add("pumpkin");
        pumpkin.style.top = `${Math.random() * 80}vh`; // Posicionamento aleatório
        pumpkin.style.left = `${Math.random() * 90}vw`;
        document.body.appendChild(pumpkin);

        pumpkin.addEventListener("click", function() {
            pumpkin.style.display = "none"; // Esconde a abóbora após ser clicada
            collectPumpkin();
        });

        pumpkins.push(pumpkin);
    }
}

function collectPumpkin() {
    pumpkinCount++;
    document.getElementById("foundCount").innerText = pumpkinCount;
    if (pumpkinCount === pumpkinCountTotal) {
        alert("Parabéns! Você encontrou todas as abóboras!");
    }
}

// Mostrar abóboras ao clicar no botão "Iniciar Caça às Abóboras!"
document.getElementById("startHuntButton").addEventListener("click", function() {
    pumpkins.forEach(pumpkin => pumpkin.style.display = "block");
});

// Inicializa abóboras quando o site carrega
window.onload = function() {
    createPumpkins();
};

}

// Adiciona evento de clique para a seção de jogos
document.getElementById("guessButton").addEventListener("click", function() {
    const candies = ["Chocolate", "Balas de goma", "Pirulitos", "Doces de milho", "Chicletes", "Biscoitos assustadores"];
    const randomCandy = candies[Math.floor(Math.random() * candies.length)];
    document.getElementById("guessResult").innerText = "Você adivinhou: " + randomCandy + "!";
});

// Inicializa o quiz
const quizQuestions = [
    {
        question: "Qual é o símbolo mais associado ao Halloween?",
        options: ["Caveira", "Abóbora", "Fantasma", "Bruxa", "Gato preto", "Gato"],
        answer: "Abóbora"
    },
    {
        question: "De onde se origina o Halloween?",
        options: ["Estados Unidos", "Irlanda", "Inglaterra", "França"],
        answer: "Irlanda"
    },
    {
        question: "Qual cor é mais associada ao Halloween?",
        options: ["Verde", "Vermelho", "Laranja", "Azul"],
        answer: "Laranja"
    },
    {
        question: "Qual fruta é esculpida para fazer lanterna?",
        options: ["Maçã", "Pêra", "Abóbora", "Banana"],
        answer: "Abóbora"
    },
    {
        question: "Qual é o instrumento musical do esqueleto?",
        options: ["guitarra", "tambor", "flauta", "Trombone"],
        answer: "Trombone"
    },
    {
        question: "Em que dia é comemorado o Halloween?",
        options: ["30 de outubro", "31 de outubro", "1 de novembro", "2 de novembro"],
        answer: "31 de outubro"
    },
    {
        question: "Qual é o famoso doce que é um símbolo do Halloween?",
        options: ["Chocolate", "Doces de milho", "Bala de goma", "Pirulito"],
        answer: "Doces de milho"
    },
    {
        question: "O que as crianças normalmente dizem ao pedir doces?",
        options: ["Por favor", "Trick or Treat", "Doces!", "Obrigado"],
        answer: "Trick or Treat"
    },
    {
        question: "Qual é o animal frequentemente associado ao Halloween?",
        options: ["Cachorro", "Gato", "Coruja", "Coelho"],
        answer: "Gato"
    },
    {
        question: "Qual a origem da palavra 'Halloween'?",
        options: ["All Hallows' Eve", "Hallowe'en", "Dia das Bruxas", "Noite das Sombras"],
        answer: "All Hallows' Eve"
    },
    {
        question: "Qual é o vampiro mais antigo e icônico ?",
        options: ["Alucard", "Drácula", "Edward Cullen", "Nosferatu"],
        answer: "Nosferatu"
    }
];

document.getElementById("quizButton").addEventListener("click", function() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const userAnswer = prompt(`${index + 1}. ${q.question}\n${q.options.join('\n')}`);
        if (userAnswer === q.answer) {
            score++;
        }
    });
    document.getElementById("quizResult").innerText = `Você acertou ${score} de ${quizQuestions.length} perguntas!`;
});
