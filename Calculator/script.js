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

    setTimeout(() => res.classList.remove("mostrar"), 3000);
}
