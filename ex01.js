var prompt = require('prompt-sync')(); 

menu()

function menu () {   

    console.log(`    
Operações:\n
    1 - Soma\n
    2 - Subtração\n
    3 - Multiplicação\n
    4 - Divisão\n
    0 - Sair\n
Escolha uma das operações acima: `)

let opcao = Number(prompt())
    switch (opcao) {
        case 1:
            soma()
            break;
            
        case 2:            
            subtracao()
            break;
        
        case 3:            
            multiplicacao()
            break;
        
        case 4:            
            divisao()
            break;
        
        case 0:
            console.log("Encerrando o programa...")
            break;
            
        default:
            console.log("\nPor favor, digite uma opção válida\n")
            menu()
    }
}

function soma() {   
    let n1 = Number(prompt('Digite o primeiro valor: '))
    let n2 = Number(prompt('Digite o segundo valor: '))    
    return console.log("Resultado: ", n1 + n2)
} 

function subtracao() { 
    let n1 = Number(prompt('Digite o primeiro valor: '))
    let n2 = Number(prompt('Digite o segundo valor: '))     
    return console.log("Resultado:", n1 - n2)
}

function multiplicacao() {    
    let n1 = Number(prompt('Digite o primeiro valor: '))
    let n2 = Number(prompt('Digite o segundo valor: '))  
    return console.log("Resultado:", n1 * n2)
}

function divisao() {
    let n1 = Number(prompt('Digite o primeiro valor: '))
    let n2 = Number(prompt('Digite o segundo valor: '))  
    if (n2 == 0) {
        console.log("Não é possível divisão por zero")
    } else
    return console.log("Resultado:", n1 / n2)
}
