import { Router } from 'express';
import { agregarHabitacion, borrarHabitacion, listarHabitaciones, editarHabitacion } from '../controllers/habitaciones.controllers.js';

const router = Router();

router.route('/habitaciones').post(agregarHabitacion).get(listarHabitaciones)
router.route('/habitaciones/:id').delete(borrarHabitacion).put(editarHabitacion);
export default router;
