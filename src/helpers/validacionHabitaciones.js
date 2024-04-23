import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionHabitacion = [
  check("numeroHabitacion")
    .notEmpty()
    .withMessage("El numero de habitacion es un dato obligatorio")
    .isNumeric()
    .withMessage("El numero de habitacion debe ser un número"),
  check("tipoHabitacion")
    .notEmpty()
    .withMessage("EL tipo de habitacion es un dato obligatorio")
    .isIn(["Doble", "Deluxe", "Suite", "Twin"])
    .withMessage(
      "EL tipo de habitacion debe ser una de las siguientes opciones (Doble, Deluxe, Suite,Twin)"
    ),
  check("precioHabitacion")
    .notEmpty()
    .withMessage("El precio de habitacion es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio de habitacion debe ser un número")
    .custom((value) => {
      if (value >= 5000) {
        return true;
      } else {
        throw new Error("El precio de habitacion debe ser mayor de $5000");
      }
    }),
  check("imagenHabitacion")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
    .withMessage(
      "La imagen debe ser una url valida y terminar con alguna de las siguientes extensiones (jpg|jpeg|gif|png)"
    ),
  check("descripcionBreve")
    .notEmpty()
    .withMessage("La descripcion breve es un dato obligatorio")
    .isString()
    .withMessage("La descripcion debe ser un string")
    .isLength({ min: 10, max: 80 })
    .withMessage("La descripcion breve debe contener entre 10 y 80 caracteres"),
  check("descripcionAmplia")
    .notEmpty()
    .withMessage("La descripcion amplia es un dato obligatorio")
    .isString()
    .withMessage("La descripcion debe ser un string")
    .isLength({ min: 20, max: 500 })
    .withMessage(
      "La descripcion breve debe contener entre 20 y 500 caracteres"
    ),
  check("disponibilidad")
    .isArray()
    .withMessage("La disponibilidad debe ser un array"),
  check("disponibilidad.*.fecha")
    .notEmpty()
    .withMessage("La fecha de disponibilidad debe ser obligatoria")
    .isISO8601()
    .withMessage("La fecha de disponibilidad  debe ser en formato ISO8601"),
  check("disponibilidad.*.disponible")
    .notEmpty()
    .withMessage("La disponibilidad es requerida")
    .isBoolean()
    .withMessage("La disponibilidad debe ser un booleano"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionHabitacion;
