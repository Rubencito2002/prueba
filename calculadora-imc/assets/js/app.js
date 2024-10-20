// app.js

// Seleccionamos el formulario y el área de resultados
const form = document.getElementById('imc-form');
const result = document.getElementById('result');

// Añadimos un listener para el evento submit del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();  // Evitamos que el formulario se envíe y la página se recargue

    // Obtenemos los valores de peso y altura
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    // Verificamos que los valores sean válidos
    if (isNaN(weight) || isNaN(heightCm)) {
        result.textContent = "Por favor, ingresa valores válidos.";
        result.classList.add('alert-danger');
        result.classList.remove('d-none', 'alert-success');
        return;
    }

    // Convertimos la altura de cm a metros
    const height = heightCm / 100;

    // Calculamos el IMC
    const imc = (weight / (height * height)).toFixed(2);

    // Evaluamos la categoría del IMC
    let category = '';
    if (imc < 18.5) {
        category = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        category = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        category = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        category = 'Obesidad grado 1';
    } else if (imc >= 35 && imc < 39.9) {
        category = 'Obesidad grado 2';
    } else {
        category = 'Obesidad grado 3';
    }

    // Mostramos el resultado en la página
    result.innerHTML = `
        <p>Tu IMC es <strong>${imc}</strong>.</p>
        <p>Estás en la categoría: <strong>${category}</strong>.</p>
    `;
    
    // Estilizamos el resultado
    result.classList.remove('d-none', 'alert-danger');
    result.classList.add('alert-success');
});
