const mongoose = require('mongoose'); // indica que se requiere mongoose
const { Schema } = mongoose; // solamente quiero de mongoose el esquema para definir lo que va a tener la base de datos

const empleadosEsquema = new Schema({ // indicamos un nuevo esquema

    nombre: {type: String, required: true},
    cargo: {type: String, required: true},
    departamento: {type: String, required: true},
    salario: {type: Number, required: true}


});

module.exports = mongoose.model('Empleados', empleadosEsquema); // exportamos el modulo que contiene el esquema de empleados

