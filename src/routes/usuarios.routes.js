import {Router} from "express";
import {listarUsuarios, crearUsuario, obtenerUsuario, editarUsuario, borrarUsuario, login} from "../controllers/usuarios.controllers.js"
import validacionUsuario from "../helpers/validacionUsuario.js";
const router = Router();

router.route("/registrar").post([validacionUsuario],crearUsuario)
router.route('/usuarios').get(listarUsuarios);
router.route('/usuarios/:id').get(obtenerUsuario).put([validacionUsuario],editarUsuario).delete(borrarUsuario);
router.route("/").post(login)
export default router