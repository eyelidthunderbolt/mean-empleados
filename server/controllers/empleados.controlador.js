// creamos un objeto en JS 
//Metodos para crear borrar modificar... dependiendo de lo que ponga en el navegador con las rutas se ejecutara una cosa u otra
const controladorEmpleado = {};
const { request } = require('express');
const empleados = require('../models/empleados');
const empleadosModels = require('../models/empleados');


controladorEmpleado.mostrarEmpleados = async (req,res) => {

    const leerEmpleados = await empleadosModels.find(); // esta variable lee los empleados guardados en la base de datos
    res.json(leerEmpleados);
    // await lo que hace es decirle que este a la escucha y cuando termine lo guarde dentro de la constante empleados y cuando tenga todos los empleados responde en JSON al navegador
}



controladorEmpleado.crearEmpleado = async (req,res) => {

   const nuevoEmpleado =  new empleadosModels(req.body); // el objeto nuevoEmpleado se instancia y es de tipo request
   await nuevoEmpleado.save();
   
   res.json('EMPLEADO ALMACENADO'); // respuesta
    
}

controladorEmpleado.mostrarEmpleado = async (req,res) => {

const buscaEmpleado = await empleadosModels.findById(req.params.id);
res.json(buscaEmpleado);
    
}

controladorEmpleado.editarEmpleado = async (req,res) => {

    const { id } = req.params; //esto si o si ya que va a indicar que los parametros se van a necesitar obligatoriamente
    const empleadoAEditar = {

        nombre: req.body.nombre,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        salario: req.body.salario
    };

    await empleadosModels.findByIdAndUpdate(id, { $set: empleadoAEditar }, {new:true});
    res.json('EMPLEADO ACTUALIZADO')
    
}

controladorEmpleado.borrarEmpleado = async (req,res) => {

    
    await empleados.findByIdAndDelete(req.params.id);
    res.json('EMPLEADO ELIMINADO')
    
}

module.exports = controladorEmpleado;