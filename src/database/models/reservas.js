import mongoose, { Schema } from "mongoose";

const reservaSchema = new Schema({
    habitacion:{
        type: String,
        required: true,
    },
    idHabitacion:{
        type: String,
        required: true,
    },
    idUsuario:{
        type: String,
        required: true,
    },
    fechaEntrada:{
        type: String,
        required: true,
    },
    fechaSalida:{
        type: String,
        required: true,
    },
    precioTotal:{
        type: String,
        required: true,
    },
    diasTotales:{
        type: String,
        required: true,
    }
});

const Reserva = mongoose.model("reserva", reservaSchema);
export default Reserva;