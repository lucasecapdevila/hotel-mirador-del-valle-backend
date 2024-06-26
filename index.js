import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import habitacionesRouter from './src/routes/habitaciones.routes.js'
import usuariosRouter from './src/routes/usuarios.routes.js'
import reservasRouter from './src/routes/reservas.routes.js'
import './src/database/database.js'
const app = express();

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto ' + app.get('port'))
})

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename)
console.log(path.join(__dirname,'/public'))
app.use(express.static(path.join(__dirname,'/public')))

app.use('/api', habitacionesRouter)
app.use('/api', usuariosRouter)
app.use('/api', reservasRouter)