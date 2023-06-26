let frutas = [];
let verduras = [];
let bebidas = [];
let nPereciveis = [];
let listaFinal = (`Frutas: ${frutas}\n Verduras: ${verduras}\n Bebidas: ${bebidas}\n Não perecíveis: ${nPereciveis}`);
let compras = prompt('Olá! Parece que chegou a hora de fazer compras. Você deseja adicionar algum item na lista?\nDigite SIM ou NÃO.');
if (compras == 'NÃO'){
    alert('Uhm... parece que, na verdade, sua geladeira está cheia. Volte quando sentir falta de algo.');
}
else{
    var comida = prompt('Qual comida você precisa comprar? Digite aqui:');
    var categoria = prompt(`Em qual categoria ${comida} se encaixa? Frutas, verduras, bebidas ou não perecíveis?`);
        if (categoria == 'frutas'||'Frutas'){
            frutas.push(comida);
        }
        else if (categoria == 'verduras'||'Verduras'){
            verduras.push(comida);
        }
        else if (categoria == 'bebidas'||'Bebidas'){
            bebidas.push(comida);
        }
        else if (categoria == 'não perecíveis'||'Não perecíveis'){
            nPereciveis.push(comida);
        }
        else{
            alert('Essa categoria não existe.');
        }
    var novaComida = prompt('Você deseja adicionar mais algum item à lista? Digite SIM ou NÃO.');
    while (novaComida == 'SIM'){
        var comida = prompt('Qual comida você precisa comprar? Digite aqui:');
        var categoria = prompt(`Em qual categoria ${comida} se encaixa? Frutas, verduras, bebidas ou não perecíveis?`);
        var novaComida = prompt('Você deseja adicionar mais algum item à lista? Digite SIM ou NÃO.');
    }
    if(novaComida == 'NÃO'){
        var remover = prompt('Certo. Você deseja REMOVER algum item da lista? Digite SIM ou NÃO.');
        if (remover == 'NÃO'){
            alert(`Entendi. Esta é a sua lista de compras: ${listaFinal}`);
        }
        else if (remover == 'SIM'){
           var menosComida = prompt(`Você escolheu remover um item. Vou te mostrar a sua lista e você digita o alimento que deseja remover, ok?\n ${listaFinal}`);
           let localRemover = listaFinal.indexOf(menosComida);
           let listaFinal.splice(localRemover, 1); 
        }
        else if (listaFinal.indexOf(menosComida) == -1){
            alert('Não foi possível encontrar este item na sua lista.');
        }
    }
    fim = alert(`Parece que você já anotou tudo. Boas compras! Aqui está a sua lista de compras:\n ${listaFinal}`);
}
