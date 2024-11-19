document.addEventListener("DOMContentLoaded", function() {
    // Verificar si los elementos existen
    const showAlertButton = document.getElementById("showAlert");
    const closeAlertButton = document.getElementById("closeAlert");

    if (showAlertButton) {
        console.log("Botón para mostrar alerta encontrado");
    } else {
        console.log("Botón para mostrar alerta no encontrado");
    }

    if (closeAlertButton) {
        console.log("Botón para cerrar alerta encontrado");
    } else {
        console.log("Botón para cerrar alerta no encontrado");
    }

    // Mostrar alerta
    showAlertButton?.addEventListener("click", function() {
        document.getElementById("alertModal").classList.remove("hidden");
    });

    // Cerrar alerta
    closeAlertButton?.addEventListener("click", function() {
        document.getElementById("alertModal").classList.add("hidden");
    });
});
