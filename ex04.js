var prompt = require('prompt-sync')(); 

var n1
var n2
var opcao

const operacoes = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => a / b,
}

const menu = () => {

    do {
        console.log(`    
Operações:\n
    1 - Soma\n
    2 - Subtração\n
    3 - Multiplicação\n
    4 - Divisão\n
    5 - Sair\n
Escolha uma das operações acima: `)
        
        opcao = Number(prompt())
        switch (opcao) {
            case 1:
                console.log(`soma: ${operacoes.soma(n1 = Number(prompt('Digite o primeiro valor: ')), n2 = Number(prompt('Digite o segundo valor: ')))}\n`);
                break;    
            case 2:            
                console.log(`Subtração: ${operacoes.subtracao(n1 = Number(prompt('Digite o primeiro valor: ')), n2 = Number(prompt('Digite o segundo valor: ')))}\n`);
                break;        
            case 3:            
                console.log(`Multiplicação: ${operacoes.multiplicacao(n1 = Number(prompt('Digite o primeiro valor: ')), n2 = Number(prompt('Digite o segundo valor: ')))}\n`);
                break;
            
            case 4:            
                console.log(`Divisao: ${operacoes.divisao(n1 = Number(prompt('Digite o primeiro valor: ')), n2 = Number(prompt('Digite o segundo valor: ')))}\n`);
                break;
            
            case 5:
                console.log("Encerrando o programa...")
                break;
                
            default:
                console.log("\nPor favor, digite uma opção válida\n")
        }
    } while (opcao != 5);
}

menu()