import axios from 'axios';
import { useState } from 'react';

function Login() {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.2:3000/login', {
                username,
                password
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
              <input type="username" name="username" placeholder="Username" required
              onChange={(e) => setEmail(e.target.value)}/>
              <input type="password" name="password" placeholder="Password" required
              onChange={(e) => setPassword(e.target.value)}/>
              <button type="submit" className='btn-login'>Login</button>
            </form>
          </div>
    );
  }

  export default Login;
