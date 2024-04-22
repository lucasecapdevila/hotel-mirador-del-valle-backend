import mongoose, { Schema } from "mongoose";

const habitacionSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
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
    validate: {
        validator: function(value) {
            return value >= 5000 && value <= 30000;
        },
        message: props => `${props.value} El precio debe ser de 5000 como mínimo y 30000 como máximo.`
    }
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
});

const Habitacion = mongoose.model("Habitacion", habitacionSchema);
export default Habitacion;
