// export const listarHabitaciones = (req, res)=>{
//     console.log('aqui preparo la lista de habitaciones')
//     res.send('Enviando la lista de habitaciones')
// }

import Habitacion from '../models/habitacion.js';

export const agregarHabitacion = async (req, res) => {
    try {
        const { numeroHabitacion, tipoHabitacion, precioHabitacion, descripcionBreve, descripcionAmplia } = req.body;
        const nuevaHabitacion = new Habitacion({
            numeroHabitacion,
            tipoHabitacion,
            precioHabitacion,
            descripcionBreve,
            descripcionAmplia
        });
        const habitacionGuardada = await nuevaHabitacion.save();
        res.status(201).json(habitacionGuardada);
    } catch (error) {
        console.error('Error al agregar la habitación:', error);
        res.status(500).json({ mensaje: 'Error al agregar la habitación', error });
    }
};
