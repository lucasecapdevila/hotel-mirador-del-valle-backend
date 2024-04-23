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
      validator: (value)=>{
        const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
        return pattern.test(value)
    }
  },
    unique: true,
  },
  userPassword: {
    type: String,
    required: true,
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
    maxLength: 30,
  },
  apellidoUser: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  role: {
    type: String,
    require: true,
  },
});
const Usuario = mongoose.model("usuario", usuarioSchema);
export default Usuario;
