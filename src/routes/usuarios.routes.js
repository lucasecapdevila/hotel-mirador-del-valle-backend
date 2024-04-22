import {Router} from "express";
import {listarUsuarios, obtenerUsuario, editarUsuario, borrarUsuario, registrarUsuario, loginUsuario} from "../controllers/usuarios.controllers.js"
const router = Router();

router.route('/usuarios').get(listarUsuarios)
router.route('/usuarios/:id').get(obtenerUsuario).put(editarUsuario).delete(borrarUsuario);
router.route('/registro').post(registrarUsuario);
router.route('/login').post(loginUsuario);
export default router