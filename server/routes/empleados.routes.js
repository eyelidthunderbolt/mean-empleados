const express = require('express');
const router = express.Router(); // para crear la ruta de tipo get
const { mostrarEmpleados, crearEmpleados } = require('../controllers/empleados.controlador');
const emplcontrol = require ('../controllers/empleados.controlador');

router.get('/', emplcontrol.mostrarEmpleados)

router.post('/', emplcontrol.crearEmpleado);

router.get('/:id', emplcontrol.mostrarEmpleado)

router.put('/:id', emplcontrol.editarEmpleado)

router.delete('/:id', emplcontrol.borrarEmpleado)

// los metodos van a estar en los controladores y dependiendo de lo que pongamos en la url se va a llamar a las rutas a una parte u otra y esa parte u otra va a llamar al metodo dentro  del controlador

module.exports = router; // esta ruta se carga en el index

//ruta apuntan a controladores y controladores contienen metodos que hacen algo. Todos fnucionan mediante requests y respuestas: ASYN me indica que mientras lee el metodo find() y mientras lee datos del server al array devuelve el control para que podamos seguir haciendo movidas
