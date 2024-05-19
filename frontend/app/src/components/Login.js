import axios from 'axios';
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [category, setCategory] = useState('funcionario');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.2:3000/login', {
                username,
                password,
                category
            }, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log('Login Successful:', response.data);

        } catch (error) {
            console.error('Login Failed:', error.response.data);
        }
    }

    return (
        <div className="login-form-wrap">
            <h2>Login</h2>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="funcionario">Funcionário</option>
                    <option value="gerente">Gerente</option>
                </select>
                <button type="submit" className='btn-login'>Login</button>
            </form>
        </div>
    );
}

export default Login;