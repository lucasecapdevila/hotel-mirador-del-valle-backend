import Usuario from "../database/models/usuario.js";
import bcrypt from "bcrypt";
import generarJWT from "../helpers/generarJWT.js";
export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al buscar los usuarios" });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    const existeEmail = await Usuario.findOne({ userEmail });
    if (existeEmail) {
      return res
        .status(400)
        .json({
          mensaje: "Ya existe un usuario con el correo electronico enviado",
        });
    }
    const usuarioNuevo = new Usuario(req.body);
    const salt = bcrypt.genSaltSync(10);
    usuarioNuevo.userPassword = bcrypt.hashSync(userPassword, salt);
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "El usuario se creo correctamente",
      userEmail: usuarioNuevo.userEmail,
      userName: usuarioNuevo.userName,
      userRole: usuarioNuevo.role,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear el usuario",
    });
  }
};
export const login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    console.log(userEmail);
    const existeEmail = await Usuario.findOne({ userEmail });
    if (!existeEmail) {
      return res.status(400).json({ mensaje: "Correo o password incorrectos" });
    }
    const passwordValido = bcrypt.compareSync(
      userPassword,
      existeEmail.userPassword
    );
    if (!passwordValido) {
      return res.status(400).json({ mensaje: "Correo o password incorrectos" });
    }

    const token = await generarJWT(existeEmail.userName, existeEmail.userEmail)

    res.status(200).json({
      mensaje: "El usuario existe",
      nombreUsuario: existeEmail.userName,
      email: existeEmail.userEmail,
      rol: existeEmail.role,
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al intentar loguear un usuario.",
    });
  }
};
export const obtenerUsuario = async (req, res) => {
  try {
    console.log(req.params.id);
    const usuarioBuscado = await Usuario.findById(req.params.id);
    if (!usuarioBuscado) {
      return res
        .status(404)
        .json({ mensaje: "El usuario con el id enviado no existe" });
    }
    res.status(200).json(usuarioBuscado);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ mensaje: "No se pudo encontrar el usuario solicitado" });
  }
};
export const editarUsuario = async (req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id);
    if (!usuarioBuscado) {
      return res
        .status(404)
        .json({ mensaje: "No se encontro el usuario con el id especificado" });
    }
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "El usuario fue editado exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error no se pudo editar el usuario" });
  }
};
export const borrarUsuario = async (req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id);
    if (!usuarioBuscado) {
      return res
        .status(404)
        .json({
          mensaje: "No se pudo borrar el usuario con el id especificado",
        });
    }
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "El usuario fue eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error no se pudo borrar el usuario" });
  }
};
