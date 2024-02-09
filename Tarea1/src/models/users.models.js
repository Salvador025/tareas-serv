const axios = require('axios');
const { deleteUsers } = require('../controllers/users.controller');

//Traemos la variable del archivo .env
const url = process.env.URL;
class User {
    // Método para obtener usuarios
    getUsers() {
        return axios.get(url)
           
    }
    getUsersById(id) {
        return axios.get(`${url}/${id}`)
         
            }
    postUsers(newUser){
        return axios.post(url, newUser)
    }
    putUsers(id, updatedUser){
        return axios.put(url + '/' + id, updatedUser)
    }
    deleteUsers(id){
        return axios.delete(url + '/' + id)
    
    }
}



// Exportar la clase User
module.exports = User;