import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  imgUser: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        return  /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor);
      },
      message: (dato) => `${dato.value} no es una dirección de correo valida`,
    },
   
    unique: true,
  },
  userEmail: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 250,
    validate: {
      validator: (valor) => {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(valor);
      },
      message: (dato) => `${dato.value} no es una dirección de correo valida`,
    },
    unique: true,
  },
  userPassword: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 15,
    validate: {
      validator: (valor) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(valor);
      },
      message: (dato) => `${dato.value} no es una contraseña valida`,
    },
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    unique: true,
  },
  nombreUser: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  apellidoUser: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
});
const Usuario = mongoose.model("usuario", usuarioSchema);
export default Usuario;
