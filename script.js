// Espera que o DOM esteja completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Seleção dos elementos do DOM que serão manipulados
    const decimalToRomanTab = document.getElementById('decimalToRoman');
    const romanToDecimalTab = document.getElementById('romanToDecimal');
    const decimalToRomanForm = document.getElementById('decimalToRomanForm');
    const romanToDecimalForm = document.getElementById('romanToDecimalForm');
    const convertToRomanBtn = document.getElementById('convertToRoman');
    const convertToDecimalBtn = document.getElementById('convertToDecimal');
    const decimalInput = document.getElementById('decimalInput');
    const romanInput = document.getElementById('romanInput');
    const romanOutput = document.getElementById('romanOutput');
    const decimalOutput = document.getElementById('decimalOutput');

    // Controle de alternância entre as abas de conversão
    decimalToRomanTab.addEventListener('click', function() {
        // Ativa a aba decimal para romano
        decimalToRomanTab.classList.add('active');
        romanToDecimalTab.classList.remove('active');
        // Mostra o formulário correspondente
        decimalToRomanForm.classList.add('active');
        romanToDecimalForm.classList.remove('active');
        resetOutputs();
    });

    romanToDecimalTab.addEventListener('click', function() {
        // Ativa a aba romano para decimal
        romanToDecimalTab.classList.add('active');
        decimalToRomanTab.classList.remove('active');
        // Mostra o formulário correspondente
        romanToDecimalForm.classList.add('active');
        decimalToRomanForm.classList.remove('active');
        resetOutputs();
    });

    // Função para limpar resultados anteriores
    function resetOutputs() {
        romanOutput.textContent = '';
        decimalOutput.textContent = '';
        decimalInput.value = '';
        romanInput.value = '';
    }

    // Função para converter números decimais para romanos
    function decimalToRoman(num) {
        // Verifica se o número está dentro do intervalo válido
        if (num < 1 || num > 3999) {
            return 'Número fora do intervalo válido (1-3999)';
        }

        // Mapeamento dos valores decimais para símbolos romanos
        // Inclui combinações especiais como CM (900), XC (90), etc.
        const romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];

        // Processo de conversão usando o algoritmo guloso
        let result = '';
        for (let i = 0; i < romanNumerals.length; i++) {
            // Enquanto o número for maior ou igual ao valor atual na tabela
            while (num >= romanNumerals[i].value) {
                result += romanNumerals[i].numeral; // Adiciona o símbolo romano
                num -= romanNumerals[i].value; // Subtrai o valor do número
            }
        }
        return result;
    }

    // Função para converter números romanos para decimais
    function romanToDecimal(roman) {
        // Verifica se a entrada está vazia
        if (!roman) {
            return 'Digite um número romano válido';
        }

        // Converte para maiúsculas para garantir consistência
        roman = roman.toUpperCase();
        // Regex que verifica se a string contém apenas caracteres romanos válidos
        const validRomanRegex = /^[MDCLXVI]+$/;

        if (!validRomanRegex.test(roman)) {
            return 'Número romano inválido. Use apenas M, D, C, L, X, V, I';
        }

        // Mapeamento de símbolos romanos para valores decimais
        const romanMap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        let result = 0;

        // Algoritmo de conversão
        for (let i = 0; i < roman.length; i++) {
            const current = romanMap[roman[i]];
            const next = romanMap[roman[i + 1]];

            // Se o próximo valor for maior que o atual (ex: IV), subtrai o atual do próximo
            if (next && current < next) {
                result += next - current;
                i++; // Pula o próximo caractere, pois já foi processado
            } else {
                // Caso contrário, apenas soma o valor atual
                result += current;
            }
        }

        // Validação adicional: verifica se o número romano é válido
        // reconstruindo-o a partir do valor decimal encontrado
        if (decimalToRoman(result) !== roman) {
            return 'Número romano inválido';
        }

        return result;
    }

    // Event Listener para o botão de conversão decimal para romano
    convertToRomanBtn.addEventListener('click', function() {
        const decimal = parseInt(decimalInput.value);
        if (isNaN(decimal)) {
            romanOutput.textContent = 'Digite um número válido';
            return;
        }
        romanOutput.textContent = decimalToRoman(decimal);
    });

    // Event Listener para o botão de conversão romano para decimal
    convertToDecimalBtn.addEventListener('click', function() {
        const roman = romanInput.value.trim();
        decimalOutput.textContent = romanToDecimal(roman);
    });

    // Adiciona capacidade de usar a tecla Enter para acionar a conversão
    decimalInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            convertToRomanBtn.click();
        }
    });

    romanInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            convertToDecimalBtn.click();
        }
    });
});
