import React, { useState } from 'react';
import '../style/login.css';
import PropTypes from 'prop-types';

// async function loginUser(credentials) {
//     try {
//         const response = await fetch('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(credentials)
//         });

//         if (!response.ok) {
//             throw new Error('Failed to log in');
//         }

//         return response.json();
//     } catch (error) {
//         console.error('Login Error:', error);
//         throw error;
//     }
// }


function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async () => {
        // e.preventDefault();
        try {
            const response = await fetch('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (!response.ok) {
                throw new Error('Failed to log in');
            }
            console.log(response.json());
            setToken(response);
            // return response.json();
        } catch (error) {
            console.error('Login Error:', error);
            throw error;
        }
        // const token = tokenData.token;
        // console.log(token)
        // setToken(token);

    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}