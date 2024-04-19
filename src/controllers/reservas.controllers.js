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
      console.log(req);
      console.log(req.body);
      const reservaNueva = new Reserva(req.body);
      await reservaNueva.save();
      res.status(201).json({
        mensaje: "La reserva fue creada con éxito",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "La reserva no se realizó",
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