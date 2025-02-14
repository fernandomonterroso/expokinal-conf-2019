'use strict'

var express = require('express');
var UserController = require('../controllers/userController');
var CharlaController = require('../controllers/conferenciaController');
var CorreoController = require('../controllers/correoController');
var carrouselController= require('../controllers/carrouselController')
var TextoController =require('../controllers/textoController')
var historiaController =require('../controllers/historiaController')
var conferencistaController =require('../controllers/conferencistaController')
var md_auth = require('../middlewares/autheticated');

//SUBIR IMAGEN
var multiparty = require('connect-multiparty');
var md_subir = multiparty({ uploadDir: './src/uploads/users' })


//Rutas
var api = express.Router();
api.get('/productos', md_auth.ensureAuth, UserController.getProductos);
api.post('/producto', UserController.agregarProducto);
api.post('/productoV', md_auth.ensureAuth, UserController.agregarProductoVendidoPorUsuario);
api.put('/productoVendido/:productoId', md_auth.ensureAuth, UserController.ProductoVendido);

api.get('/ejemplo', md_auth.ensureAuth, UserController.ejemplo);
api.get('/usario/:id', md_auth.ensureAuth, UserController.getUser);
api.get('/usuarios', UserController.getUsers);
api.post('/registrar', UserController.registrar);
api.delete('/eliminar/:id', UserController.eliminar);
api.post('/login', UserController.login);
api.post('/subir-imagen-usuario/:id', [md_auth.ensureAuth, md_subir], UserController.subirImagen);
api.get('/obtener-imagen-usuario/:nombreImagen', UserController.obtenerImagen)
api.put('/editar-usuario/:id', md_auth.ensureAuth, UserController.editarUsuario)
api.put('/email/:correo/:codigo', UserController.verificarEmail)

api.post('/charla/register', CharlaController.registrarCharla);
api.put('/charla/edit/:id', CharlaController.editarCharla);
api.put('/charla/occupy/:id', md_auth.ensureAuth, CharlaController.ocuparAsiento);
api.put('/charla/unoccupy/:id', md_auth.ensureAuth, CharlaController.cancelarEntrada);
api.put('/charla/check/:id', md_auth.ensureAuth, CharlaController.confirmarEntrada);
api.get('/charla/list', CharlaController.listarCharlas);
api.get('/charla/search/:id', CharlaController.buscarId);
api.get('/charla/noti/:id', CharlaController.notificacion);
api.delete('/charla/delete/:id', CharlaController.eliminarCharla);

//CARROUSEL
api.post('/registrar-carrousel', carrouselController.registrarcarrousel);
api.put('/editar-carrousel/:id', carrouselController.editarcarrousel);
api.get('/listar-carrousels', carrouselController.listarcarrousels);
api.delete('/eliminar-carrousel/:id', carrouselController.eliminarcarrousel)
api.post('/subir-image/:id',carrouselController.subirImagen)
api.get('/obtener-imagen/:imageFile', carrouselController.getImageFile)

//TEXTO
api.post('/agregar-Texto',TextoController.agregarTexto);
api.delete('/eliminar-Texto/:id',TextoController.eliminarTexto);
api.put('/editar-Texto/:id',TextoController.editarTexto);
api.get('/listar-Texto',TextoController.listarTexto);
api.get('/buscar-texto/:titulo',TextoController.buscarTexto);
api.get('/obtener-imagen/:imageFile', TextoController.getImageFile);
api.post('/subir-image/:id', [md_auth.ensureAuth, md_subir] ,TextoController.subirImagen)

//HISTORIA
api.post('/agregar-historia',historiaController.addHistoria);
api.delete('/eliminar-historia/:id',historiaController.deleteHistoria);
api.put('/editar-historia/:id',historiaController.editHistoria);
api.get('/listar-historia',historiaController.listarHistorias);
api.get('/obtener-imagen/:imageFile', historiaController.getImageFile);
api.post('/subir-image/:id', [md_auth.ensureAuth, md_subir] ,historiaController.subirImagen)

//CONFERENCISTAS/COMUNICADORES
api.post('/conferencista/agregar',conferencistaController.addConferencista);
api.put('/conferencista/editar/:id',conferencistaController.editConferencista);
api.post('/conferencista/red/:id/:url/:redSocial',conferencistaController.addRed);
api.delete('/conferencista/eliminar/:id',conferencistaController.deleteConferencista);
api.get('/conferencista/getAll', conferencistaController.listarComunicadores);
api.get('/conferencista/get/:id', conferencistaController.listarComunicador);
api.post('/conferencista/', [md_auth.ensureAuth, md_subir] ,conferencistaController.subirImagen)
api.get('/obtener-imagen/:imageFile', conferencistaController.getImageFile);

//CORREO
api.post('/correo', md_auth.ensureAuth, CorreoController.correoRestablecerPassword);


module.exports = api;