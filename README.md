# Cifra de César

## Cliente

O aniversário da minha mãe está se aproximando e estou organizando uma festa
surpresa. Para manter a festa em segredo criei um grupo de Whatsapp com
amigxs e familiares. Como ela é super curiosa e está sempre mexendo no meu celular,
preciso de uma aplicação que permita criptografar e descriptografar mensagens. 


## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Objetivos

Desenvolver um projeto que permita ao usuario inserir uma mensagem e um `offset`
indicando quantas posições de deslocamento de caracteres ele deseja para cifrar 
ou descifrar a mensagem.
  

## Processo de desenvolvimento

Para a realização do projeto foi desenvolvido um planejamento de execução onde foram definidos 
todas as funcionalidades do mesmo. A partir disso, como planejado, foi desenvolvido um Diagrama de blocos,
onde foi possivel projetar e ter maior clareza da sequência lógica do fluxo de dados. Com o fluxo definido,
foi realizado toda a parte lógica do projeto. Após concluida a parte lógica, foi desenvolvido o Layout do projeto
de acordo como a necessidade do cliente, que precisa de uma aplicação que encriptografe e descriptografe mensagens. 
Foi criado um arquivo de testes onde são verificadas se todas as funçóes do sistema estão funcionando corretamente.


![diagrama](https://github.com/JaquelineGDS/caesar-cipher/blob/master/src/imagens/diagrama.png)


## Funcionalidades 

- Permitir ao usuario inserir uma mensagem e uma chave numérica para encriptografar uma mensagem.
- Permitir ao usuario inserir uma mensagem e uma chave numérica para descriptografar uma mensagem.


