# Calculadora Util 1.0

Este projeto é uma calculadora simples feita com HTML, CSS e JavaScript, ideal para quem está começando no desenvolvimento web. Ela realiza operações básicas: soma, subtração, multiplicação e divisão.

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
