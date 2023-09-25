  // declaração de variavel
// var numero = 1;
// var decimal = 1.5;
// var texto = '';
// let nome = '';
// const pi = 3.14;

  //inprimir na tela
// console.log(nome);
 // console.log("hoje não");

 
 // && = E
 // || = OU

 // Declarar uma variavel para representar os elementos do jogo
 let letra = 'X'; // X ou O

 
 function joga(casa) {
    let celulaclicada = document.getElementById(casa).innerHTML;

    if(celulaclicada == 'X' || celulaclicada == '0')  {
        alert('está célula já tem um valor!');
    } else {
        document.getElementById(casa).innerHTML = letra;
        if(letra == 'X') {
            letra = 'O';
        }
        else {
            letra = 'X';
        }
      }
    }
 