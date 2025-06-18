import {
    errorResponse,
    successResponse
} from "@/app/lib/respuestas";
import {
    NextResponse
} from "next/server";

export async function GET() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_BACK}/api/clientes/clientes_lista`);
        if (!res.ok) {
            const errorData = await res.json();
            return NextResponse.json(errorResponse("Error desde backend", errorData), {
                status: res.status,
            });
        }
        const data = await res.json();
        return NextResponse.json(successResponse(data, "Lista de clientes obtenida"), {
            status: 200
        });

    } catch (error) {
        console.log("Error en GET /api/clientes:", error);
        return NextResponse.json(errorResponse("Error interno del servidor", error.message), {
            status: 500,
        });
    }
}

export async function POST() {
    try {
        const body = await req.json();

        // Validación básica
        const {
            nombreCompleto,
            email,
            telefono
        } = body;
        if (!nombreCompleto || !email || !telefono) {
            return NextResponse.json({
                error: "Faltan campos requeridos"
            }, {
                status: 400
            });
        }

        // Enviar al backend real
        const res = await fetch(`${process.env.BACKEND_URL}/api/clientes/crear`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json({
                error: error.message || "Error backend"
            }, {
                status: res.status
            });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error en POST /api/clientes:", error);
        return NextResponse.json({
            error: "Error interno del servidor"
        }, {
            status: 500
        });
    }
}

export function PUT() {
    return NextResponse.json({
        message: "Hello from the users route PUT!"
    });
}

export function DELETE() {
    return NextResponse.json({
        message: "Hello from the users route DELETE!"
    });
}

// time ................ 2.51