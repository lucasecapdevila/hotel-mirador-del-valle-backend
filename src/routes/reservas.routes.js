import {Router} from "express";
import {listarReservas, crearReserva, obtenerReserva, editarReserva, borrarReserva} from "../controllers/reservas.controllers.js"
import validacionReservas from '../helpers/validacionReservas.js';
const router = Router();

router.route('/reservas').get(listarReservas).post([validacionReservas],crearReserva);
router.route('/reservas/:id').get(obtenerReserva).put([validacionReservas],editarReserva).delete(borrarReserva);
export default router