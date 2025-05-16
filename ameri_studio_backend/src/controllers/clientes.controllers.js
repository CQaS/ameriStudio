import moment from "moment"
import {
    z
} from "zod";
import {
    Prisma
} from '@prisma/client';
import Cliente from "../models/Clientes.js";

export const clientes_lista = async (req, res) => {
    try {
        const clientesData = await Cliente.obtenerTodos();

        if (!clientesData || clientesData.length === 0) {
            return res.status(404).json({
                Error: 'No se encontraron clientes'
            });
        }

        const listaDeClientes = clientesData.map(clienteData => new Cliente(
            clienteData.id_cliente,
            clienteData.nombre,
            clienteData.apellido,
            clienteData.telefono,
            clienteData.email,
            clienteData.fecha_nacimiento
        ).obtenerInfo());

        res.json({
            Lista: listaDeClientes
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            Error: 'Algo falló al obtener la lista de clientes',
        });
    }
};

export const cliente_detalle = async (req, res) => {
    const {
        id
    } = req.params;

    try {
        const clienteData = await Cliente.obtenerPorId(id);
        if (!clienteData) {
            return res.status(404).json({
                Error: `Cliente con ID ${id} no encontrado`
            });
        }
        const clienteDetalle = new Cliente(
            clienteData.id_cliente,
            clienteData.nombre,
            clienteData.apellido,
            clienteData.telefono,
            clienteData.email,
            clienteData.fecha_nacimiento
        ).obtenerInfo();
        res.json({
            Cliente: clienteDetalle
        });
    } catch (error) {
        console.error('Error al obtener cliente:', error);
        return res.status(500).json({
            Error: `Error al obtener el cliente con ID ${id}`
        });
    }
};

export const clientes_nuevo = async (req, res) => {
    try {

        const clienteConTelefonoExistente = await Cliente.verificarTelefono(req.body.telefono);
        if (clienteConTelefonoExistente) {
            return res.status(409).json({
                Error: 'El teléfono ya está registrado'
            });
        }

        const clienteConEmailExistente = await Cliente.verificarEmail(req.body.email);
        if (clienteConEmailExistente) {
            return res.status(409).json({
                Error: 'El email ya está registrado'
            });
        }

        const clienteCreado = await Cliente.crear(req.body);
        res.status(201).json(clienteCreado);
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors.map(err => err.message);
            return res.status(400).json({
                Error: 'Error de validación',
                details: errorMessages
            });
        }
        console.error('Error al crear cliente:', error);
        return res.status(500).json({
            Error: 'Algo falló al crear el cliente'
        });
    }
};

export const clientes_actualizar = async (req, res) => {
    const {
        id
    } = req.params;
    const clienteId = parseInt(id);

    try {
        const clienteActualizadoData = await Cliente.actualizar(clienteId, req.body);
        if (!clienteActualizadoData) {
            return res.status(404).json({
                Error: `Cliente con ID ${clienteId} no encontrado`
            });
        }
        const clienteActualizado = new Cliente(
            clienteActualizadoData.id_cliente,
            clienteActualizadoData.nombre,
            clienteActualizadoData.apellido,
            clienteActualizadoData.telefono,
            clienteActualizadoData.email,
            clienteActualizadoData.fecha_nacimiento
        ).obtenerInfo();
        res.json({
            Cliente: clienteActualizado
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors.map(err => err.message);
            return res.status(400).json({
                Error: 'Error de validación',
                details: errorMessages
            });
        } else if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return res.status(404).json({
                Error: `Cliente con ID ${clienteId} no encontrado`
            });
        }
        console.error('Error al actualizar cliente:', error);
        return res.status(500).json({
            Error: `Error al actualizar el cliente con ID ${clienteId}`
        });
    }
};

export const clientes_eliminar = async (req, res) => {
    const {
        id
    } = req.params;
    const clienteId = parseInt(id);

    try {
        const eliminado = await Cliente.eliminar(clienteId);
        if (!eliminado) {
            return res.status(404).json({
                Error: `Cliente con ID ${clienteId} no encontrado`
            });
        }
        res.status(204).send();

    } catch (error) {

        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return res.status(404).json({
                Error: `Cliente con ID ${clienteId} no encontrado`
            });

        } else if (error instanceof Error && error.message.includes('turnos pendientes o confirmados')) {
            return res.status(400).json({
                Error: error.message
            });
        }
        console.error('Error al eliminar cliente:', error);
        return res.status(500).json({
            Error: `Error al eliminar el cliente con ID ${clienteId}`
        });
    }
};