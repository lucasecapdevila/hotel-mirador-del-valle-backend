import mongoose, { Schema } from "mongoose";

const reservaSchema = new Schema({
  habitacion: {
    type: Number,
    required: true,
  },
  idHabitacion: {
    type: String,
    required: true,
  },
  idUsuario: {
    type: String,
    required: true,
  },
  fechaEntrada: {
    type: String,
    required: true,
  },
  fechaSalida: {
    type: String,
    required: true,
  },
  precioTotal: {
    type: Number,
    required: true,
  },
  diasTotales: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    require: true,
    default: 'Reservado'
  },
}, {
  timestamps: true,
});

const Reserva = mongoose.model("reserva", reservaSchema);
export default Reserva;
