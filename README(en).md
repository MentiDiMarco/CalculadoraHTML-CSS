# Useful Calculator 1.0

Welcome to the Useful Calculator 1.0 project! This is a simple yet functional website, created with a focus on practical learning of HTML, CSS, and JavaScript.

The goal of this project is to build a basic calculator with a clean, responsive, and user-friendly layout, capable of performing simple mathematical operations (addition, subtraction, multiplication, and division) between two numbers entered by the user.

---

## Project Structure

The project is divided into three main files:

```
calculadora/
├── index.html   # Estrutura da página
├── style.css    # Estilo visual (cores, layout, fontes, etc)
└── script.js    # Lógica da calculadora
```

---

## Technologies Used

- **HTML5** — For page structure
- **CSS3** — For modern and responsive styling
- **JavaScript** — For the calculation logic
- **Google Fonts** — For the Poppins typography
- **Flexbox and Media Queries** — For an adaptive layout across different screen sizes

---

## How the Project Works

### 1. HTML: Structure and Semantics

The `index.html` file defines the main elements of the page:

# TRADUZINDO O RESTO COM O TEMPO

- **Títulos** com `<h1>` e `<h2>`
- **Imagem** decorativa e acessível com `<img>`
- **Parágrafo explicativo** com `<p>`
- **Lista** de operações suportadas com `<ul>`
- **Formulário interativo**, contendo:
  - `<label>` para descrever os campos
  - `<input type="number">` para inserção de números
  - `<select>` com `<option>` para escolher a operação
  - `<button>` para calcular
- Uma `<div id="resultado">` onde o resultado é exibido

### Exemplo de trecho HTML:
```html
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
```
## 2. CSS: Estilo e Layout

O arquivo `style.css` traz um visual moderno e agradável, com:

- Gradiente de fundo com tons suaves
- Tipografia personalizada (Poppins)
- Centralização com Flexbox
- Estilo nos inputs e botões com foco em usabilidade
- Sombra e bordas arredondadas para destacar elementos
- Responsividade com *media queries* para funcionar bem em telas menores

---

**Exemplo de trecho CSS:**

```css
body {
    background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    margin: 0;
    padding: 30px;
}
```
## 3. JavaScript: Lógica do Cálculo

O arquivo `script.js` implementa toda a lógica necessária para realizar os cálculos da calculadora. A função `calcular()` é chamada ao enviar o formulário e realiza as seguintes ações:

- **Pega os valores** digitados nos campos de entrada (`<input>`).
- **Converte os textos** em números utilizando `parseFloat`.
- **Verifica se os valores** inseridos são válidos com `isNaN`.
- **Executa a operação matemática** selecionada no `<select>` usando uma estrutura `switch`.
- **Exibe o resultado** dentro da `<div id="resultado">`.
- **Aplica uma animação suave** para mostrar e esconder o resultado, melhorando a experiência do usuário.

---

**Exemplo de trecho JavaScript:**

```javascript
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
        resultado = num2 === 0
          ? "Não é possível dividir por zero."
          : num1 / num2;
        break;
      default:
        resultado = "Operação inválida.";
    }
  }

  const res = document.getElementById("resultado");
  res.textContent = "Resultado: " + resultado;
  res.classList.add("mostrar");

  setTimeout(() => res.classList.remove("mostrar"), 3000);
}
```
## Como Executar

1. Clone este repositório ou baixe os arquivos `.zip`.
2. Certifique-se de que os seguintes arquivos estejam no mesmo diretório:
   - `index.html`
   - `style.css`
   - `script.js`
3. Abra o arquivo `index.html` com seu navegador.
4. Pronto! A calculadora já está funcionando.

---

## Possibilidades de Melhorias Futuras

Mesmo sendo um trabalho simples e introdutório, quero continuar desenvolvendo e expandindo esse projeto.

Algumas ideias para futuras versões:

- Adicionar histórico de operações
- Permitir operações encadeadas
- Criar uma versão com temas (dark/light mode)
- Armazenar dados com localStorage
- Transformar em uma SPA (Single Page Application) com frameworks modernos

Este projeto representa o início da minha jornada com desenvolvimento front-end, e pretendo mantê-lo atualizado como forma de acompanhar minha própria evolução.

---

## Licença

Este projeto é de uso livre para fins de estudo e aprendizado.

---

## Contato

Se quiser dar sugestões ou conversar sobre o projeto, fique à vontade para abrir uma issue ou me chamar pelo GitHub!
