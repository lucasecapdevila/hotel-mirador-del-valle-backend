import {Router} from "express";
import {listarReservas, crearReserva, obtenerReserva, editarReserva, borrarReserva} from "../controllers/reservas.controllers.js"
const router = Router();

router.route('/reservas').get(listarReservas).post(crearReserva);
router.route('/reservas/:id').get(obtenerReserva).put(editarReserva).delete(borrarReserva);
export default router