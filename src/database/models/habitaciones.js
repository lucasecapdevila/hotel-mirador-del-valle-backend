import mongoose, { Schema } from "mongoose";

const habitacionSchema = new Schema({
  numeroHabitacion: {
    type: Number,
    required: true,
    unique: true,
  },
  tipoHabitacion: {
    type: String,
    required: true,
    enum: ["Doble", "Deluxe", "Suite", "Twin"],
  },
  precioHabitacion: {
    type: Number,
    required: true,
    min:5000,
},
  reservasActuales: [],
  imagenHabitacion: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(value);
      },
      message: (dato) => `${dato.value} no es un formato de imagen válido`,
    },
    unique: true,
  },
  descripcionBreve: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 80,
  },
  descripcionAmplia: {
    type: String,
    required: true,
    minLength: 20,
    maxLength: 500,
  },
  disponibilidad: [
    {
        fecha: {
            type: Date,
            required: true
        },
        disponible: {
            type: Boolean,
            required: true,
            default: true
        }
    }
]
});

const Habitacion = mongoose.model("Habitacion", habitacionSchema);
export default Habitacion;
