import axios from 'axios';

export function login(username, password){
    return axios.post('/api/login/', {
        "username": username,
        "password" : password
    }).catch((e) => {
        console.log(e.response.data);
    });
}

export function user(token) {
    if(token == undefined) {
        console.log('token is undefined');
        return;
    }

    const config = {
        headers: { 'Authorization': 'Token '+token }
    };

    return axios.get('http://127.0.0.1:8000/user/', config).catch((e) => {
        console.log(e.response.data);
    });
}
