import { Router } from 'express';
import { agregarHabitacion, borrarHabitacion, listarHabitaciones, editarHabitacion, obtenerHabitacion } from '../controllers/habitaciones.controllers.js';
import validacionHabitaciones from '../helpers/validacionHabitaciones.js';
import validarJWT from '../helpers/validarJWT.js';
const router = Router();

router.route('/habitaciones').post([validarJWT, validacionHabitaciones],agregarHabitacion).get(listarHabitaciones)
router.route('/habitaciones/:id').get(obtenerHabitacion).delete(validarJWT, borrarHabitacion).put([validarJWT, validacionHabitaciones],editarHabitacion);
export default router;
