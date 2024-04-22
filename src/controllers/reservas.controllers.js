import dayjs from "dayjs";
import Reserva from "../database/models/reservas.js";

export const listarReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.status(200).json(reservas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al buscar los reservas" });
  }
};

export const crearReserva = async (req, res) => {
    try {
      const {
        habitacion,
        idHabitacion,
        idUsuario,
        fechaEntrada,
        fechaSalida,
        precioTotal,
        diasTotales,
      } = req.body

      const nuevaReserva =({
        habitacion: habitacion.numeroHabitacion,
        idHabitacion: habitacion._id,
        idUsuario,
        fechaEntrada: dayjs(fechaEntrada).format('DD-MM-YYYY'),
        fechaSalida: dayjs(fechaSalida).format('DD-MM-YYYY'),
        precioTotal,
        diasTotales
      })
      nuevaReserva.save()
      res.status(201).json({
        mensaje: "La reserva fue creada exitosamente"
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        mensaje: "La reserva no pudo ser realizada",
      });
    }
  };
  export const obtenerReserva = async (req, res) => {
    try {
      console.log(req.params.id);
      const reservaBuscada = await Reserva.findById(req.params.id);
      if (!reservaBuscada) {
        return res
          .status(404)
          .json({ mensaje: "La reserva con el id enviado no existe" });
      }
      res.status(200).json(reservaBuscada);
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({ mensaje: "No se pudo encontrar la reserva solicitada" });
    }
  };
  export const editarReserva = async (req, res) => {
    try {
      const reservaBuscada = await Reserva.findById(req.params.id);
      if (!reservaBuscada) {
        return res.status(404).json({ mensaje: "No se encontro la rserva con el id especificado" });
      }
      await Reserva.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ mensaje: "La reserva fue editada exitosamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Ocurrio un error no se pudo editar la reserva" });
    }
  };
  export const borrarReserva = async (req, res) => {
    try {
      const reservaBuscada = await Reserva.findById(req.params.id);
      if (!reservaBuscada) {
        return res.status(404).json({ mensaje: "No se pudo borrar la reserva con el id especificado" });
      }
      await Reserva.findByIdAndDelete(req.params.id);
      res.status(200).json({ mensaje: "La reserva fue eliminada exitosamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Ocurrio un error no se pudo borrar la reserva" });
    }
  };