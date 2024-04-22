import { Router } from 'express';
import { agregarHabitacion, borrarHabitacion, listarHabitaciones, editarHabitacion } from '../controllers/habitaciones.controllers.js';

const router = Router();

router.route('/habitaciones')
  .post(agregarHabitacion)
  .delete(borrarHabitacion)
  .get(listarHabitaciones)
  .put(editarHabitacion);
export default router;
