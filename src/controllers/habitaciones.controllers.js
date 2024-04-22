

import Habitacion from '../database/models/habitaciones.js';

export const listarHabitaciones = async (req, res) => {
    try {
      // Obtener todas las habitaciones desde la base de datos
      const habitaciones = await Habitacion.find();
  
      // Enviar la lista de habitaciones como respuesta
      res.status(200).json(habitaciones);
    } catch (error) {
      console.error('Error al listar las habitaciones:', error);
      res.status(500).json({ mensaje: 'Error al obtener la lista de habitaciones' });
    }
  };

  export const agregarHabitacion = async (req, res) => {
    try {
        const { numeroHabitacion, tipoHabitacion, precioHabitacion, imagenHabitacion, descripcionBreve, descripcionAmplia } = req.body;
        const nuevaHabitacion = new Habitacion({
            numeroHabitacion,
            tipoHabitacion,
            precioHabitacion,
            imagenHabitacion,
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

export const editarHabitacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { numeroHabitacion, tipoHabitacion, precioHabitacion, imagenHabitacion, descripcionBreve, descripcionAmplia } = req.body;
        const habitacionActualizada = await Habitacion.findByIdAndUpdate(id, {
            numeroHabitacion,
            tipoHabitacion,
            precioHabitacion,
            imagenHabitacion,
            descripcionBreve,
            descripcionAmplia
        }, { new: true });
        if (!habitacionActualizada) {
            return res.status(404).json({ mensaje: 'No se encontró la habitación que desea editar' });
        }

        res.status(200).json(habitacionActualizada);
    } catch (error) {
        console.error('Error al editar la habitación:', error);
        res.status(500).json({ mensaje: 'Error de parametros ingresados. habitación no actualizada.', error });
    }
};

export const borrarHabitacion = async (req, res) => {
    try {
        const { id } = req.params;
        const habitacionBorrada = await Habitacion.findByIdAndDelete(id);
        if (!habitacionBorrada) {
            return res.status(404).json({ mensaje: 'No se encontró la habitación que desea eliminar' });
        }
        res.status(200).json({ mensaje: 'Habitación eliminada exitosamente' });
    } catch (error) {
        console.error('Error al borrar la habitación:', error);
        res.status(500).json({ mensaje: 'Error al borrar la habitación', error });
    }
};
