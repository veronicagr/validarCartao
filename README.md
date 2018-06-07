# validarCartao
Algoritmo de Lunh

É conhecida como " 10"ou" modificação 10 " é um um método para validar números de identificação como por exemplo números de cartão de crédito.

Método para realização do cálculo:

Dado uma sequência de números inteiros positivos, devemos inverte-los e extrair os indices pares e multiplica-los por 2.
Se o resultado desta multiplicação for igual ou maior que 10, devemos subtrair o resultado por 9.
Ao final desta operação devemos somar todos os indices e verficar se o resultado desta soma é divisilvel por 10. 
Se positivo o número do cartão é válido.


Funcionalidade do Sistema:

O sistema é composto por uma função isValidCard ()

Para verificar se o número do cartão é válido o usuário deverá digitar uma sequência de números no campo solicitado.
E através de uma mensagem de alerta é impresso se o número do cartão é válido.


#Desenvolvimento:

Para o desenvolvimento foi utilizado a linguagem de programação JavaScript.
O usuário digitará uma sequência de números e através do Algoritmo de Lunh o programa retornará uma mensagem se o cartão é válido ou inválido.

#O programa é composto por 3 arquivos:

index.html: Página principal onde está presente o html;
app.JavaScript: pagina com a funções de isValidCard;
style.css: Em andamento;

#Funções:

inverteInput()| Utilizada para inverter os números digitados pelo usuário;

multiplicaIndicesPares()| Multiplica os indices nas posiçoes pares dos números digitados;

somaArray()| Realiza a soma de todos os números digitados;

isValidCard()| Método principal que retorna se o número do cartão é valido ou inválido;

![Fluxograma](https://www.draw.io/?state=%7B%22ids%22:%5B%221nQ0G8hOll9GgCo1T66ZSjov9ZO2Exw3F%22%5D,%22action%22:%22open%22,%22userId%22:%22103644699094741663922%22%7D#G1nQ0G8hOll9GgCo1T66ZSjov9ZO2Exw3F)

