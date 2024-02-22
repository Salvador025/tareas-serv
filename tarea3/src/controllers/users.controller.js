
const User = require('./../models/users.models');
// Importamos el módulo de respuesta
const ResponseStatus = require('./../utils/response-status')

// Creamos la clase UsersController
class UsersController {
    // Método para obtener usuarios
    getUsers(req, res) {
        User.find().then(response => {
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        });
    }
    getUsersById(req, res) {
        const id = req.params.id;
        User.findById(id).then(response => {
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        });
    }
    postUsers(req, res){
        const data = { name: req.body.name, email: req.body.email, password: req.body.password, status: req.body.status, role: req.body.role };
        User.create(data).then(response => {
            res.send('Usuario creado');
            console.log('Usuario creado');
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        });
    }
    putUsers(req, res){
        const id = req.params.id;
        const data = { name: req.body.name, email: req.body.email, password: req.body.password, status: req.body.status, role: req.body.role };
        User.findByIdAndUpdate(id, data, {new: true}).then(response => {
            res.send(response);
            console.log('Usuario actualizado');
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        });
    }
    deleteUsers(req, res){
       const id = req.params.id;
       User.findByIdAndDelete(id).then(response => {
           res.send('Usuario eliminado');
           console.log('Usuario eliminado');
       }).catch(e => {
           res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
       });
    }
}

// Exportamos la clase UsersController
module.exports = new UsersController();