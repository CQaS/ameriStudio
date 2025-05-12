import {
    PrismaClient
} from '@prisma/client';
import {
    Prisma
} from '@prisma/client';
import {
    z
} from 'zod';

// Esquemas de validación con Zod
const ClienteSchema = z.object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
    apellido: z.string().min(2, "El apellido debe tener al menos 2 caracteres").max(100),
    telefono: z.string().optional().nullable(),
    email: z.string().email("Formato de email inválido").optional().nullable(),
    fecha_nacimiento: z.date()
        .optional()
        .nullable()
        .refine((date) => {
            if (!date) return true; // Si no hay fecha, no se valida
            const hoy = new Date();
            const hace18Anos = new Date(hoy.getFullYear() - 18, hoy.getMonth(), hoy.getDate());
            return date <= hace18Anos;
        }, {
            message: "El cliente debe ser mayor de 18 años",
        }),
});

const BarberoSchema = z.object({
    nombre: z.string().min(2, "El nombre del barbero debe tener al menos 2 caracteres").max(100),
    apellido: z.string().min(2, "El apellido del barbero debe tener al menos 2 caracteres").max(100),
    especialidad: z.string().min(10, "La especialidad deber sr incluida").max(100),
});

const ServicioSchema = z.object({
    nombre: z.string().min(3, "El nombre del servicio debe tener al menos 3 caracteres").max(100),
    descripcion: z.string().optional().nullable(),
    duracion_estimada: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, "Formato de hora inválido (HH:MM:SS)"),
    precio: z.number().positive("El precio debe ser positivo"),
});

const ReservaSchema = z.object({
    id_cliente: z.number().int().positive(),
    fecha: z.date(),
    hora_inicio: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, "Formato de hora inválido (HH:MM:SS)"),
    hora_fin: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, "Formato de hora inválido (HH:MM:SS)"),
    id_servicio: z.number().int().positive(),
    estado: z.enum(['Pendiente', 'Confirmada', 'Cancelada', 'Finalizada']).optional().default('Pendiente'),
    notas: z.string().optional().nullable(),
});

const prisma = new PrismaClient().$extends({
    query: {
        cliente: {
            create({
                args,
                query
            }) {
                const validatedData = ClienteSchema.parse(args.data);
                return query({
                    ...args,
                    data: validatedData
                });
            },
            update({
                args,
                query
            }) {
                const validatedData = ClienteSchema.partial().parse(args.data);
                return query({
                    ...args,
                    data: validatedData
                });
            },
        },
        servicio: {
            create({
                args,
                query
            }) {
                const validatedData = ServicioSchema.parse(args.data);
                return query({
                    ...args,
                    data: validatedData
                });
            },
            update({
                args,
                query
            }) {
                const validatedData = ServicioSchema.partial().parse(args.data);
                return query({
                    ...args,
                    data: validatedData
                });
            },
        },
        reserva: {
            create({
                args,
                query
            }) {
                const validatedData = ReservaSchema.parse(args.data);
                return query({
                    ...args,
                    data: validatedData
                });
            },
            update({
                args,
                query
            }) {
                const validatedData = ReservaSchema.partial().parse(args.data);
                return query({
                    ...args,
                    data: validatedData
                });
            },
        },
        barbero: {
            create({
                args,
                query
            }) {
                const validatedData = BarberoSchema.parse(args.data);
                return query({
                    ...args,
                    data: validatedData
                });
            },
            update({
                args,
                query
            }) {
                const validatedData = BarberoSchema.partial().parse(args.data);
                return query({
                    ...args,
                    data: validatedData
                });
            },
        },
    },
});

export const validarPrisma = prisma;