// Contador de abóboras
let pumpkinCount = 0;

function collectPumpkin() {
    pumpkinCount++;
    document.getElementById("foundCount").innerText = pumpkinCount;
}

// Adiciona evento de clique para a seção de jogos
document.getElementById("guessButton").addEventListener("click", function() {
    const candies = ["Chocolate", "Balas de goma", "Pirulitos", "Doces de milho", "Chicletes"];
    const randomCandy = candies[Math.floor(Math.random() * candies.length)];
    document.getElementById("guessResult").innerText = "Você adivinhou: " + randomCandy + "!";
});

// Inicializa o quiz
const quizQuestions = [
    {
        question: "Qual é o símbolo mais associado ao Halloween?",
        options: ["Caveira", "Abóbora", "Fantasma", "Bruxa"],
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
        question: "Qual o nome da bruxa que voa em uma vassoura?",
        options: ["Glinda", "Morgana", "Elphaba", "Hermione"],
        answer: "Elphaba"
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
