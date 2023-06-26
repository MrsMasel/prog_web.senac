function calculadora(par1, par2, operacao){
    if (operacao == 'soma'){
        function soma(par1, par2){
            return par1 + par2;
        }
    }
    else if (operacao =='subtração'){
        function subtracao(par1, par2){
            return par1 - par2;
        }
    }
    else if (operacao == 'multiplicação'){
        function multiplicacao(par1, par2){
            return par1 * par2;
        }
    }

     else if (operacao == 'divisão'){
        function divisao(par1, par2){
            return par1 / par2;
        }
    }
    else {
        alert('Até a próxima.')
    }
}

let operacao = prompt('Olá! Digite a operação que você deseja realizar: soma, subtração, multiplicação ou divisão?');
let par1 = prompt('Digite o primeiro número:');
let par2 = prompt('Digite o segundo número:');
alert(`Este é o resultado da sua operação: ${calculadora}`)

