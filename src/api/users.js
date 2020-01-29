import axios from 'axios';

export default {
    login(user) {
        // then return the promise of the axios instance
        return axios.post('http://localhost:8011/login/',{
                "email": user.email,
                "pass": user.password
            }).catch();
    },
    register(user){
        return axios.post('http://localhost:8011/users/',{
            "first_name": user.firstname,
            "last_name": user.lastname,
            "email":user.email,
            "pass": user.password,
            "birth_date": user.birthDate,
        }).catch();
    }
};