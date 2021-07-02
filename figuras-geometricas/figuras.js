//Codigo del Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Codigo del Triangulo
console.group("Triaungulo");

function perimetroTriagulo(lado1, lado2, base) {
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}

function areaTriangulo(altura, base) {
    return (altura * base) / 2;
}

console.groupEnd();

//Codigo del Circulo
console.group("Circulos");

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}

//Area 
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// interaccion con HTML 
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const resultado = document.getElementById("resultadoCuadrado");
    resultado.innerHTML = `El perimetro del cuadrado es: ${perimetro}`;
}

function calcularArea() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    const resultado = document.getElementById("resultadoCuadrado");
    resultado.innerHTML = `El área del cuadrado es: ${area}`;
}

function calcularPerimetroTriangulo() {
    const ladoA = document.getElementById("inputTrianguloLadoA");
    const ladoAValue = ladoA.value;

    const ladoB = document.getElementById("inputTrianguloLadoB");
    const ladoBValue = ladoB.value;

    const base = document.getElementById("inputTrianguloLadoBase");
    const baseValue = base.value;

    const area = perimetroTriagulo(ladoAValue, ladoBValue, baseValue);

    const resultado = document.getElementById("resultadoTriangulo");
    resultado.innerHTML = `El perimetro del triangulo es: ${area}`;
}

function calcularAreaTriangulo() {
    const base = document.getElementById("inputTrianguloLadoBase");
    const baseValue = base.value;
    
    const altura = document.getElementById("inputTrianguloLadoAltura");
    const alturaValue = altura.value;

    const area = areaTriangulo(alturaValue, baseValue);

    const resultado = document.getElementById("resultadoTriangulo");
    resultado.innerHTML = `El área del triangulo es: ${area}`;

}