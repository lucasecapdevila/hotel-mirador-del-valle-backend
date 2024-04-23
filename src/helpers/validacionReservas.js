import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionReserva = [
    check("habitacion")
    .notEmpty()
    .withMessage("El numero de habitacion es un dato obligatorio")
    .isNumeric()
    .withMessage("El numero de habitacion debe ser un número"),
    check("idHabitacion")
    .notEmpty()
    .withMessage("El id de la habitacion es un dato obligatorio")
    .isString()
    .withMessage("El id debe ser un string"),
    check("idUsuario")
    .notEmpty()
    .withMessage("El id del usuario es un dato obligatorio")
    .isString()
    .withMessage("El id del usuario debe ser un string"),
    check("fechaEntrada")
    .notEmpty()
    .withMessage("La fecha de entrada un dato obligatorio")
    .isString()
    .withMessage("La fecha de entrada debe ser un string"),
    check("fechaSalida")
    .notEmpty()
    .withMessage("La fecha de salida un dato obligatorio")
    .isString()
    .withMessage("La fecha de salida debe ser un string"),
    check("precioTotal")
    .notEmpty()
    .withMessage("El precio total es un dato obligatorio")
    .isString()
    .withMessage("El precio total debe ser un string"),
    check("diasTotales")
    .notEmpty()
    .withMessage("Los dias totales deben ser un dato obligatorio")
    .isString()
    .withMessage("Los dias totales deben ser un string"),
    check("estado")
    .notEmpty()
    .withMessage("El estado es un dato obligatorio")
    .isString()
    .withMessage("El estado debe ser un string"),
    
    (req, res, next) => resultadoValidacion(req, res, next),
    
];
export default validacionReserva;
