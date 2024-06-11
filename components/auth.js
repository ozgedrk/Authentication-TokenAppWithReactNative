import axios from "axios";

const  API_KEY = 'AIzaSyAxVjGkQE6ErRJM0n4rCVQuBI61aLE7724';

async function authentication(mode, email, password){

    const response  = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
            {
                email:email,
                password:password,
                returnSecureToken:true,
            }
        );
        console.log(response.data);
}


export async function createUser(email, password){
    return authentication('signUp',email,password)
};

export async function login(email, password){
    return authentication('signInWithPassword',email,password)
};