const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularNomeExperiencia(nome, experiencia) {
    let resultado;

    switch (true) {
        case experiencia < 1000:
            resultado = "Ferro";
            break;
        case experiencia >= 1001 && experiencia <= 2000:
            resultado = "Bronze";
            break;
        case experiencia >= 2001 && experiencia <= 5000:
            resultado = "Prata";
            break;
        case experiencia >= 5001 && experiencia <= 7000:
            resultado = "Ouro";
            break;
        case experiencia >= 7001 && experiencia <= 8000:
            resultado = "Platina";
            break;
        case experiencia >= 8001 && experiencia <= 9000:
            resultado = "Ascendente";
            break;
        case experiencia >= 9001 && experiencia <= 10000:
            resultado = "Imortal";
            break;
        case experiencia >= 10001:
            resultado = "Radiante";
            break;
        default:
            resultado = "Desconhecido";
    }

    console.log(`O herói ${nome} tem ${experiencia} pontos de experiência e é classificado como ${resultado}.`);
}

function calcularOutroHeroi() {
    rl.question('Deseja calcular a experiência de outro herói? (sim/não): ', (resposta) => {
        if (resposta.toLowerCase() === 'sim') {
            obterNomeExperiencia();
        } else if (resposta.toLowerCase() === 'não') {
            console.log('Encerrando o programa.');
            rl.close();
        } else {
            console.log('Opção inválida. Por favor, responda com "sim" ou "não".');
            calcularOutroHeroi();
        }
    });
}

function obterNomeExperiencia() {
    rl.question('Digite o nome do herói: ', (nome) => {
        rl.question('Digite a experiência do herói: ', (experiencia) => {
            calcularNomeExperiencia(nome, parseInt(experiencia));
            calcularOutroHeroi();
        });
    });
}

console.log('Bem-vindo ao classificador de nível de herói!');

obterNomeExperiencia();