import {
    NextResponse
} from "next/server";

export async function GET() {
    const res = await fetch("http://localhost:5000/api/clientes/clientes_lista");
    console.log("res", res);
    const data = await res.json();

    return NextResponse.json(data);
}

export function POST() {
    return NextResponse.json({
        message: "Hello from the users route POST!"
    });
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