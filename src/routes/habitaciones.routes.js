import { Router } from 'express';
import { agregarHabitacion, borrarHabitacion, listarHabitaciones, editarHabitacion, obtenerHabitacion } from '../controllers/habitaciones.controllers.js';
import validacionHabitaciones from '../helpers/validacionHabitaciones.js';
const router = Router();

router.route('/habitaciones').post([validacionHabitaciones],agregarHabitacion).get(listarHabitaciones)
router.route('/habitaciones/:id').get(obtenerHabitacion).delete(borrarHabitacion).put([validacionHabitaciones],editarHabitacion);
export default router;
