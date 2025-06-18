import Swal from 'sweetalert2';

// ✅ Alerta de éxito
export function showSuccess(message = "Operación exitosa", title = "Éxito") {
    Swal.fire({
        icon: "success",
        title,
        text: message,
        timer: 2000,
        showConfirmButton: false,
    });
}

// ❌ Alerta de error
export function showError(message = "Algo salió mal", title = "Error", footer = "") {
    Swal.fire({
        icon: "error",
        title,
        text: message,
        footer: footer || "",
    });
}

// ℹ️ Alerta informativa
export function showInfo(message = "Información", title = "Atención") {
    Swal.fire({
        icon: "info",
        title,
        text: message,
    });
}

// ⚠️ Alerta de advertencia
export function showWarning(message = "Revisa esto", title = "Advertencia") {
    Swal.fire({
        icon: "warning",
        title,
        text: message,
    });
}