import Usuario from "../database/models/usuario.js"
export const listarUsuarios = async(req, res)=>{
   try{
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios)
    }catch(error){
        console.log(error)
        res.status(500).json({mensaje: "Error al buscar los usuarios"})
    }
}

export const crearUsuario = async(req, res) =>{
    try{
        console.log(req);
        console.log(req.body);
        const usuarioNuevo = new Usuario(req.body);
        await usuarioNuevo.save();
        res.status(201).json({
            mensaje: 'El usuario fue creado exitosamente'
        })
    }catch (error){
        console.log(error)
        res.status(400).json({
            mensaje: 'El usuario no pudo ser creado'
        })
    }
}
export const obtenerUsuario = async (req, res)=>{
    try {
        console.log(req.params.id)
        const usuarioBuscado = await Usuario.findById(req.params.id);
        if (!usuarioBuscado) {
            return res.status(404).json({mensaje:"El usuario vcon el id enviado no existe"})
        }
        res.status(200).json(usuarioBuscado);
    } catch (error) {
        console.log(error);
        res.status(400).json({mensaje:"No se pudo encontrar el usuario solicitado"})
    }
}