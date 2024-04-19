import Reserva from "../database/models/reservas.js";
export const listarReservas = async (req, res) => {
  try {
    const reservas = await Reservas.find();
    res.status(200).json(reservas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al buscar los usuarios" });
  }
};
