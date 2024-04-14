import {Router} from "express";
import {listarUsuarios, crearUsuario, obtenerUsuario} from "../controllers/usuarios.controllers.js"
const router = Router();

router.route('/usuarios').get(listarUsuarios).post(crearUsuario);
router.route('/usuarios/:id').get(obtenerUsuario);
export default router