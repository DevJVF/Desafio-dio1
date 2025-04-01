// Carrega o módulo readline
const readline = require('readline');

// Cria a interface de leitura para capturar a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para classificar o herói com base na XP
function classificarHeroi() {
    // Entrada de dados (nome)
    rl.question("Digite o nome do herói: ", function(nome) {
        rl.question("Digite a quantidade de experiência (XP) do herói: ", function(xp) {
            xp = parseInt(xp); // Converte XP para número inteiro

            // Definindo o nível com base na XP
            let nivel;
            if (xp < 1000) {
                nivel = "Ferro";
            } else if (xp >= 1001 && xp <= 2000) {
                nivel = "Bronze";
            } else if (xp >= 2001 && xp <= 5000) {
                nivel = "Prata";
            } else if (xp >= 5001 && xp <= 7000) {
                nivel = "Ouro";
            } else if (xp >= 7001 && xp <= 8000) {
                nivel = "Platina";
            } else if (xp >= 8001 && xp <= 9000) {
                nivel = "Ascendente";
            } else if (xp >= 9001 && xp <= 10000) {
                nivel = "Imortal";
            } else {
                nivel = "Radiante";
            }

            // Saída
            console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

            // Fecha a interface readline
            rl.close();
        });
    });
}

// Chama a função para executar
classificarHeroi();
