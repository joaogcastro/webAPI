import axios from 'axios';
import { useState } from 'react';
import './Register.css';

function Register() {
    const [form, setForm] = useState({ username: '', password: '', email: '', category: 'funcionario' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.2:3000/register', form, {
                headers: { 'Content-Type': 'application/json' }
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Registration Failed:', error);
            alert('Erro ao registrar');
        }
    };

    return (
        <div className="register-form-wrap">
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <select name="category" value={form.category} onChange={handleChange}>
                    <option value="funcionario">Funcionário</option>
                    <option value="gerente">Gerente</option>
                </select>
                <button type="submit" className='btn-register'>Register</button>
            </form>
        </div>
    );
}

export default Register;