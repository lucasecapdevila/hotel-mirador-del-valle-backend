import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  imgUser: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        return  /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor);
      },
      message: (dato) => `${dato.value} no es un formato de imagen válido`,
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
    maxLength: 20,
    validate: {
      validator: (valor) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(valor);
      },
      message: (dato) => `${dato.value} no es una contraseña valida`,
    }
  },
  userName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
    unique: true,
    validate: {
      validator: (valor) => {
        return /^[a-z0-9]{3,20}/.test(valor);
      },
      message: (dato) => `${dato.value} debe contener solo letras minúsculas y se pueden colocar números`,
    }
  },
  nombreUser: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  apellidoUser: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  esAdmin: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true,
});
const Usuario = mongoose.model("usuario", usuarioSchema);
export default Usuario;
