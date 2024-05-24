import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionUsuario = [
  check("imgUser")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
    .withMessage(
      "La imagen debe ser una URL válida y tener una de las siguientes extensiones: jpg, jpeg, gif, png"
    ),
  check("userEmail")
    .notEmpty()
    .withMessage("El correo electrónico es un dato obligatorio")
    .matches(
        /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/
    )
    .withMessage("El correo electrónico debe tener un formato válido"),
  check("userPassword")
    .notEmpty()
    .withMessage("La contraseña es un dato obligatorio")
    .isString()
    .withMessage("La contraseña debe ser un string")
    .isLength({min: 10})
    .withMessage(
      "La contraseña debe tener al menos 10 carácteres."
    )
    .matches(/^\S*$/)
    .withMessage(
      "La contraseña debe contener al menos una mayúscula, una minúscula y un símbolo."
    ),
  check("userName")
    .notEmpty()
    .withMessage("El usuario es un dato obligatorio")
    .isString()
    .withMessage("El usuario debe ser un string")
    .isLength({ min: 3, max: 15 })
    .withMessage("El  usuario debe tener entre 3 y 15 caracteres"),
  check("nombreUser")
    .notEmpty()
    .withMessage("El nombre del usuario es un dato obligatorio")
    .isString()
    .withMessage("El nombre del usuario debe ser un string")
    .isLength({ min: 3, max: 30 })
    .withMessage("El nombre del usuario debe tener entre 3 y 30 letras"),
  check("apellidoUser")
    .notEmpty()
    .withMessage("El apellido del usuario es un dato obligatorio")
    .isString()
    .withMessage("El apellido del usuario debe ser un string")
    .isLength({ min: 3, max: 30 })
    .withMessage("El apellido del usuario debe tener entre 3 y 30 letras"),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
