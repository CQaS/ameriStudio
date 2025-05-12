import {
    validarPrisma
} from "../../prisma/cliente_prisma.js";

class Cliente {
    constructor(id, nombre, apellido, telefono, email, fechaNacimiento) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono || null;
        this._email = email || null;
        this._fechaNacimiento = fechaNacimiento ? new Date(fechaNacimiento) : null;
    }

    obtenerInfo() {
        return {
            id: this._id,
            nombreCompleto: this._nombre + " " + this._apellido,
            telefono: this._telefono,
            email: this._email,
            fechaNacimiento: this._fechaNacimiento ? this._fechaNacimiento.toLocaleDateString() : null,
        };
    }

    static async obtenerTodos() {
        try {
            return await validarPrisma.cliente.findMany();
        } catch (error) {
            throw error;
        }
    }

    static async obtenerPorId(id) {
        try {
            return await validarPrisma.cliente.findUnique({
                where: {
                    id_cliente: parseInt(id),
                },
            });
        } catch (error) {
            throw error;
        }
    }

    /* #formatearNombreCompleto() {
        return `${this._nombre} ${this._apellido}`;
    } */

    // Nuevo método estático para crear un cliente en la base de datos
    static async crear(clienteData) {
        try {
            const clienteCreado = await validarPrisma.cliente.create({
                data: {
                    nombre: clienteData.nombre,
                    apellido: clienteData.apellido,
                    telefono: clienteData.telefono,
                    email: clienteData.email,
                    fecha_nacimiento: clienteData.fecha_nacimiento ? new Date(clienteData.fecha_nacimiento) : null,
                },
            });
            return clienteCreado;
        } catch (error) {
            throw error; // Re-lanza el error para que el controlador lo maneje
        }
    }

    static async actualizar(id, clienteData) {
        try {
            return await validarPrisma.cliente.update({
                where: {
                    id_cliente: parseInt(id),
                },
                data: {
                    nombre: clienteData.nombre,
                    apellido: clienteData.apellido,
                    telefono: clienteData.telefono ? clienteData.telefono : null,
                    email: clienteData.email,
                    fecha_nacimiento: clienteData.fecha_nacimiento ? new Date(clienteData.fecha_nacimiento) : null
                },
            });
        } catch (error) {
            throw error;
        }
    }

    static async eliminar(id) {
        try {
            await validarPrisma.cliente.delete({
                where: {
                    id_cliente: parseInt(id),
                },
            });
            return true; // Indica que la eliminación fue exitosa
        } catch (error) {
            throw error;
        }
    }

    static async verificarTelefono(telefono) {
        if (!telefono) {
            return null; // Si el teléfono es nulo o undefined, no verificamos
        }
        try {
            return await validarPrisma.cliente.findFirst({
                where: {
                    telefono
                },
            });
        } catch (error) {
            throw error;
        }
    }

    static async verificarEmail(email) {
        if (!email) {
            return null; // Si el email es nulo o undefined, no verificamos
        }
        try {
            return await validarPrisma.cliente.findFirst({
                where: {
                    email
                },
            });
        } catch (error) {
            throw error;
        }
    }
}

export default Cliente;