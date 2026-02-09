// Seleccionar elementos del HTML
const boton = document.getElementById("btn-html");
const texto = document.getElementById("texto-html");

// Agregar comportamiento
boton.addEventListener("click", function () {
    texto.textContent = "Este texto fue modificado con JavaScript 🎉";
});
