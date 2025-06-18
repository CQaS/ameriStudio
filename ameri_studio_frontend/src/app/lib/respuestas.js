export function successResponse(data, message = "Operación exitosa") {
    return {
        ok: true,
        message,
        data,
    };
}

export function errorResponse(message = "Error en la solicitud", error = null) {
    return {
        ok: false,
        message,
        error,
        data: null,
    };
}