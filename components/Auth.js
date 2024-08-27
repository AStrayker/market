import React, { useState } from 'react';

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log('Logged in:', user);
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
    };

    return (
        <div className="auth">
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Пароль" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
}

export default Auth;
