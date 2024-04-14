import {Router} from "express";
import {listarUsuarios, crearUsuario} from "../controllers/usuarios.controllers.js"
const router = Router();

router.route('/usuarios').get(listarUsuarios).post(crearUsuario);
export default router