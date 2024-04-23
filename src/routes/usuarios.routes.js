import {Router} from "express";
import {listarUsuarios, crearUsuario, obtenerUsuario, editarUsuario, borrarUsuario} from "../controllers/usuarios.controllers.js"
import validacionUsuario from "../helpers/validacionUsuario.js";
const router = Router();

router.route('/usuarios').get(listarUsuarios).post([validacionUsuario],crearUsuario);
router.route('/usuarios/:id').get(obtenerUsuario).put([validacionUsuario],editarUsuario).delete(borrarUsuario);
export default router