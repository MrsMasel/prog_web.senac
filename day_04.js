let nome = prompt('Olá! Qual é o seu nome?');
alert(`${nome}, você acha que consegue me ganhar neste jogo? Vamos descobrir. Você terá 3 tentativas para adivinhar.`);
let numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let aposta1 = prompt (`${nome}, eu escolhi um número entre 0 e 10. Qual é a sua primeira aposta?`);
if (aposta1 == numero){
    alert(`Nossa. Você me surpreendeu. Acertou de primeira. Parabens! O número era ${numero}.`);
    }
else{
    let aposta2 = prompt('Passou perto. Vamos tentar de novo. Qual é a sua aposta?');
    if (aposta2 == numero){
            alert(`Parabéns. Você acertou na segunda tentativa! O número era ${numero}.`);
        }
    else{
            let aposta3 = prompt('Ainda não foi dessa vez. Última chance: qual é a sua aposta?');
        if (aposta3 == numero){
            alert(`Parabéns, ${nome}! Você acertou!`);
            }
        else{
            alert(`Parece que eu te venci, ${nome}. O número escolhido foi o ${numero}. Tente de novo :).`)
            }
        }
    }