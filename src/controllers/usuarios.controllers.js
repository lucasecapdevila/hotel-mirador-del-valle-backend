import Usuario from "../database/models/usuario.js";
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
    console.log(req);
    console.log(req.body);
    const usuarioNuevo = new Usuario(req.body);
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "El usuario fue creado exitosamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El usuario no pudo ser creado",
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
      return res.status(404).json({ mensaje: "No se encontro el usuario con el id especificado" });
    }
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "El usuario fue editado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error no se pudo editar el usuario" });
  }
};
export const borrarUsuario = async (req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id);
    if (!usuarioBuscado) {
      return res.status(404).json({ mensaje: "No se pudo borrar el usuario con el id especificado" });
    }
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "El usuario fue eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error no se pudo borrar el usuario" });
  }
};

