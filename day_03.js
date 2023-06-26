let nome = prompt('Olá. Como devemos te chamar? (Escreva seu nome, por favor).');

let area = prompt(`${nome}, em qual área você deseja seguir? Digite 1 para Front-End ou 2 para Back-End.`);
if (area == 1){
    let front = prompt('Certo. Você escolheu o Front-End. Neste caso, o que você gostaria de aprender primeiro? Digite 3 para React ou 4 para Vue.');
    if (front == 3){
        alert('Certo. Você escolheu a tecnologia React.');
    }
    else {
        alert('Certo. Você escolheu a tecnologia Vue.');
    }
}

else {
    let back = prompt("Certo. Você escolheu o Back-End. Neste caso, o que você gostaria de aprender primeiro? Digite 3 para C# ou 4 para Java.");
        if (back == 3){
            alert("Certo. Você escolheu a linguagem C#.");
        }
        else {
            alert("Certo. Você escolheu a linguagem Java.");
        }
}
let futuro = prompt(`Maravilha, ${nome}. Como você se vê no futuro? Digite 5, caso deseje se especializar na área escolhida, ou 6, caso queira se tornar Fullstack.`);
    if (futuro == 5){
        alert("Tenho certeza de que com dedicação e tempo, você se tornará uma excelente pessoa desenvolvedora.");
    }
    else {
        alert("Tenho certeza de que com dedicação e tempo, você se tornará uma excelente pessoa desenvolvedora Fullstack.");
    }
    
let tecnologias = prompt(`Para concluirmos, ${nome}: quais tecnologias você gostaria de conhecer ou em quais delas você gostaria de se desenvolver?`);
let msg = prompt(`Certo. Você escolheu a(s) seguinte(s) tecnologia(s): ${tecnologias}. Há mais alguma que você deseje aprender? Em caso afirmativo, digite sim.`);
while (msg === 'sim'){
   novastecnos = prompt('Qual?');
   msg = prompt(`Você escolheu ${novastecnos}. Há mais alguma que você deseje aprender? Em caso afirmativo, digite sim.`);
}
alert(`Que bacana, ${nome}. Estou torcendo pelo seu sucesso profissional. Um passo por vez, com consistência, você chagará longe!`);