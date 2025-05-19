# Conversor de Números Romanos

## Sobre o Projeto

Este projeto consiste em um aplicativo web para conversão bidirecional entre números decimais e números romanos. A interface é intuitiva e permite conversões rápidas com validação de entrada.

## Funcionalidades

- **Conversão de Decimal para Romano**: Converte números inteiros (1-3999) para sua representação em algarismos romanos.
- **Conversão de Romano para Decimal**: Converte algarismos romanos válidos para números inteiros.
- **Validação Inteligente**: Detecta entradas inválidas e fornece feedback ao usuário.
- **Interface em Abas**: Alternância fácil entre os dois tipos de conversão.
- **Design Responsivo**: Funciona bem em dispositivos móveis e desktops.
- **Tabela Informativa**: Exibe os símbolos romanos e seus valores correspondentes.

## Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo da página.
- **CSS3**: Estilização e responsividade.
- **JavaScript**: Lógica de conversão e interatividade.

## Como Usar

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Para converter de decimal para romano:
   - Selecione a aba "Decimal → Romano"
   - Digite um número entre 1 e 3999
   - Clique em "Converter" ou pressione Enter

4. Para converter de romano para decimal:
   - Selecione a aba "Romano → Decimal"
   - Digite um número romano válido (usando os símbolos I, V, X, L, C, D, M)
   - Clique em "Converter" ou pressione Enter

## Limitações

- O sistema de numeração romana tradicionalmente suporta números de 1 a 3999.
- Números romanos possuem regras específicas de formação que são validadas pelo conversor.

## Regras da Numeração Romana

Os algarismos romanos são representados por combinações de letras do alfabeto latino:
- I = 1
- V = 5
- X = 10
- L = 50
- C = 100
- D = 500
- M = 1000

### Regras de combinação:
- Um símbolo repetido soma seu valor. Ex: III = 3
- Um símbolo menor à direita de um maior soma-se. Ex: VI = 6
- Um símbolo menor à esquerda de um maior subtrai-se. Ex: IV = 4
- O mesmo símbolo não pode ser repetido mais de três vezes. Ex: IV em vez de IIII
- Os símbolos V, L e D não podem ser repetidos.
- Apenas I, X e C podem ser usados como subtrativo, e apenas antes de símbolos com valores até 10 vezes maiores. Ex: IV (4), mas não IL (49).

## Exemplos de Conversão

| Decimal | Romano  |
|---------|---------|
| 1       | I       |
| 4       | IV      |
| 9       | IX      |
| 14      | XIV     |
| 42      | XLII    |
| 99      | XCIX    |
| 501     | DI      |
| 1984    | MCMLXXXIV|
| 3999    | MMMCMXCIX|

