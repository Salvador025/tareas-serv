
const User = require('./../models/users.models');
// Importamos el módulo de respuesta
const ResponseStatus = require('./../utils/response-status')

// Creamos la clase UsersController
class UsersController {
    // Método para obtener usuarios
    getUsers(req, res) {
        const user = new User();
        user.getUsers().then(response => {
            res.send(response.data);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }
    getUsersById(req, res) {
        const user = new User();
        user.getUsersById(req.params.id).then(response => {
            res.send(response.data);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }
    postUsers(req, res){
        const user = new User();
        user.postUsers(req.body).then(response => {
            res.send(response.data);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }
    putUsers(req, res){
        const user = new User();
        user.putUsers(req.params.id, req.body).then(response => {
            res.send(response.data);
            console.log('Usuario actualizado');
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }
    deleteUsers(req, res){
        const user = new User();
        user.deleteUsers(req.params.id).then(response => {
            res.send(response.data);
            console.log('Usuario eliminado');
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }
}

// Exportamos la clase UsersController
module.exports = new UsersController();