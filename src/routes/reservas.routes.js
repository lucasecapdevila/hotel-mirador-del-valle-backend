import {Router} from "express";
import {listarReservas, crearReserva, obtenerReserva, editarReserva, borrarReserva} from "../controllers/reservas.controllers.js"
import validacionReservas from '../helpers/validacionReservas.js';
import validarJWT from "../helpers/validarJWT.js";
const router = Router();

router.route('/reservas').get(listarReservas).post([validarJWT,validacionReservas],crearReserva);
router.route('/reservas/:id').get(obtenerReserva).put([validarJWT, validacionReservas],editarReserva).delete(validarJWT, borrarReserva);
export default router