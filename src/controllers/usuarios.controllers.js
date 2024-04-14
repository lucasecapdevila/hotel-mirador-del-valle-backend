import Usuario from "../database/models/usuario.js"
export const listarUsuarios = (req, res)=>{
    console.log('aqui preparo la lista de usuarios')
    res.send('Enviando la lista de usuarios')
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