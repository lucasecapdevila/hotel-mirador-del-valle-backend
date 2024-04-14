import {Router} from "express";
import {listarUsuarios, crearUsuario, obtenerUsuario, editarUsuario} from "../controllers/usuarios.controllers.js"
const router = Router();

router.route('/usuarios').get(listarUsuarios).post(crearUsuario);
router.route('/usuarios/:id').get(obtenerUsuario).put(editarUsuario);
export default router