import {
    Router
} from "express"
import {
    clientes_lista,
    cliente_detalle,
    clientes_nuevo,
    clientes_actualizar,
    clientes_eliminar
} from "../controllers/clientes.controllers.js"

const routesClientes = Router()

routesClientes.get('/clientes_lista', clientes_lista)
routesClientes.get('/cliente_id/:id', cliente_detalle)
routesClientes.post('/clientes_crear', clientes_nuevo)
routesClientes.put('/clientes_actualizar/:id', clientes_actualizar)
routesClientes.delete('/clientes_eliminar/:id', clientes_eliminar)

export default routesClientes