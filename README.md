# Calculadora Util 1.0

Bem-vindo ao projeto **Calculadora Util 1.0**! Este é um site simples, mas funcional, criado para estudar o desenvolvimento web de forma rápida e intuitiva.

Aqui você poderá somar, subtrair, multiplicar e dividir dois números, tudo isso em uma interface amigável, que foi pensada para ser acessível e responsiva — ou seja, que funciona bem tanto em computadores quanto em dispositivos móveis.

Este projeto tem o objetivo de:

- Praticar e demonstrar conhecimentos fundamentais de **HTML**, **CSS** e **JavaScript**.
- Criar um layout limpo e agradável usando técnicas modernas de estilização.
- Implementar funcionalidades interativas com JavaScript para tornar a experiência do usuário simples e eficiente.
- Fornecer um exemplo básico que pode ser expandido ou adaptado para outras aplicações.

Além disso, o código está estruturado para ser fácil de entender e modificar, o que torna este projeto uma ótima base para quem está começando no desenvolvimento web e deseja aprender os conceitos essenciais de front-end.

Sinta-se à vontade para explorar o código, testar a calculadora e usar este projeto como inspiração para seus próprios desafios.

---

## Estrutura do Código

### 1. HTML: Estrutura e Semântica

O HTML cria a base da página com título, imagem, texto explicativo, lista de operações e o formulário da calculadora.

```html
<h1>Calculadora Util 1.0</h1>
<h2>Calcule operações simples com facilidade</h2>

<img src="https://cdn-icons-png.flaticon.com/512/3210/3210053.png" alt="Imagem de uma calculadora" />

<p>Bem-vindo à minha calculadora simples! Aqui você poderá fazer cálculos básicos como soma, subtração, multiplicação e divisão.</p>

<ul>
    <li>Soma</li>
    <li>Subtração</li>
    <li>Multiplicação</li>
    <li>Divisão</li>
</ul>

<div class="calculator">
    <form onsubmit="event.preventDefault(); calcular();">
        <label for="num1">Número 1:</label>
        <input type="number" id="num1" required />

        <label for="operacao">Operação:</label>
        <select id="operacao">
            <option value="soma">Soma (+)</option>
            <option value="subtracao">Subtração (−)</option>
            <option value="multiplicacao">Multiplicação (×)</option>
            <option value="divisao">Divisão (÷)</option>
        </select>

        <label for="num2">Número 2:</label>
        <input type="number" id="num2" required />

        <button type="submit">Calcular</button>
    </form>

    <div id="resultado"></div>
</div>
```
### Explicação do HTML:
- Usamos `<h1>` e `<h2>` para os títulos principais e secundários, que organizam o conteúdo e facilitam a leitura.
- A tag `<img>` insere uma imagem da calculadora e usamos `alt` para acessibilidade.
- O parágrafo `<p>` explica para o usuário o propósito do site.
- A lista `<ul>` mostra as operações que a calculadora pode realizar.
- O formulário contém:
  - `<label>` que identifica cada campo para o usuário.
  - `<input type="number">` para entrada dos números, que aceita apenas números.
  - `<select>` com `<option>` para escolher a operação matemática.
  - O `<button>` para executar o cálculo.
- A div `#resultado` será onde mostraremos o resultado da conta.
## 2. CSS: Estilizando a Página
O CSS adiciona estilo e melhora a aparência do site, deixando ele mais agradável, organizado e responsivo.
```css
/* Fundo com gradiente */
body {
    background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
    font-family: 'Poppins', sans-serif;
    color: #333;
    text-align: center;
    padding: 30px;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h1 {
    color: #2c3e50;
    margin-bottom: 5px;
    font-weight: 700;
}

h2 {
    color: #34495e;
    margin-top: 0;
    font-weight: 500;
    margin-bottom: 25px;
}

img {
    display: block;
    margin: 20px auto;
    width: 180px;
    height: auto;
}

p {
    max-width: 600px;
    margin: 0 auto 20px;
    color: #222;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
}

ul {
    list-style-type: square;
    text-align: left;
    max-width: 300px;
    margin: 0 auto 40px;
    padding-left: 20px;
    color: #444;
    font-weight: 500;
    font-size: 16px;
}

li {
    margin-bottom: 8px;
}

/* Caixa da calculadora */
.calculator {
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 12px;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    margin-top: 15px;
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    text-align: left;
}

input, select {
    padding: 12px 15px;
    margin-top: 6px;
    font-size: 16px;
    width: 100%;
    max-width: 350px;
    box-sizing: border-box;
    border: 2px solid #ddd;
    border-radius: 8px;
    transition: border-color 0.3s ease;
    font-family: 'Poppins', sans-serif;
}

input:focus, select:focus {
    border-color: #3498db;
    outline: none;
}

button {
    margin-top: 25px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 14px 35px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;
    user-select: none;
}

button:hover {
    background-color: #2980b9;
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

button:active {
    transform: scale(0.95);
}

#resultado {
    margin-top: 20px;
    font-weight: 700;
    color: #27ae60;
    min-height: 30px;
    opacity: 0;
    transition: opacity 0.5s ease;
    font-size: 20px;
}

#resultado.mostrar {
    opacity: 1;
}

/* Responsividade básica */
@media (max-width: 440px) {
    .calculator {
        width: 90%;
        padding: 20px;
    }
    input, select, button {
        max-width: 100%;
    }
}
```
### Explicação do CSS:
- O `body` usa um gradiente de cores para o fundo e centraliza todo o conteúdo usando Flexbox, deixando a página elegante e moderna.
- Os títulos (`h1`, `h2`) têm cores e margens ajustadas para hierarquia visual.
- A imagem é centralizada e tem um tamanho fixo para manter o layout limpo.
- O texto (`p`) e a lista (`ul`) têm largura máxima para melhor leitura, além de alinhamento e espaçamento.
- A caixa `.calculator` tem fundo branco, cantos arredondados e sombra para destacar do fundo.
- O formulário usa Flexbox para alinhar itens verticalmente e labels e inputs com espaçamento e estilo agradável.
- Inputs e selects têm bordas suaves e ficam destacados ao serem focados (clicados).
- O botão tem cor azul, arredondado e efeitos de hover e clique para feedback visual.
- O resultado (`#resultado`) aparece com animação suave quando exibido.
- Um media query torna o site responsivo em telas pequenas, adaptando largura e tamanho dos campos.
## 3. JavaScript: Fazendo a Calculadora Funcionar
Este código JavaScript é responsável por executar os cálculos quando o usuário clica no botão “Calcular”.
```js
function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, digite dois números válidos.";
    } else {
        switch (operacao) {
            case "soma":
                resultado = num1 + num2;
                break;
            case "subtracao":
                resultado = num1 - num2;
                break;
            case "multiplicacao":
                resultado = num1 * num2;
                break;
            case "divisao":
                if (num2 === 0) {
                    resultado = "Não é possível dividir por zero.";
                } else {
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = "Operação inválida.";
        }
    }

    const res = document.getElementById("resultado");
    res.textContent = "Resultado: " + resultado;
    res.classList.add("mostrar");

    // Remove a classe depois de 3 segundos para animar novamente
    setTimeout(() => res.classList.remove("mostrar"), 3000);
}
```
### Explicação do JavaScript:
- A função `calcular` é chamada quando o formulário é enviado (clicando no botão).
- Usamos `document.getElementById` para pegar os valores digitados nos inputs e a operação selecionada.
- `parseFloat` transforma o texto digitado em número decimal.
- Verificamos se os dois números são válidos com `isNaN` (se algum não for número, mostramos uma mensagem de erro).
- Com o `switch`, escolhemos a operação correta (soma, subtração, multiplicação, divisão).
- Tratamos o caso especial da divisão por zero, mostrando mensagem de erro.
- O resultado do cálculo é colocado dentro da div `#resultado`.
- Usamos uma animação simples para mostrar e depois esconder o resultado depois de 3 segundos, melhorando a experiência do usuário.
---

## Próximos passos e melhorias futuras

Este projeto, apesar de ser um primeiro trabalho escolar simples, representa um importante passo na minha jornada de aprendizado em desenvolvimento web.

Pretendo continuar investindo tempo para aprimorar esta calculadora, explorando novas funcionalidades, melhorias de design e técnicas avançadas de programação.

Com o tempo, quero transformar esta aplicação em algo mais robusto e completo, adicionando recursos como histórico de cálculos, suporte a operações mais complexas, validações aprimoradas e até integração com APIs externas.

Meu objetivo é aprender e crescer como desenvolvedor, utilizando projetos práticos como este para evoluir constantemente.

Fique de olho nas atualizações!
