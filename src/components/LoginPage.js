// src/components/LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure} from '../actions/actions';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Inisialisasi useNavigate hook

  const handleLogin = async () => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Jika login berhasil, simpan data pengguna ke Redux state
        dispatch(loginSuccess(data));
        // Redirect ke halaman pengguna (Users page)
        // Menggunakan useNavigate untuk navigasi ke halaman Users
        navigate('/users');
      } else {
        dispatch(loginFailure());
        // Tampilkan pesan kesalahan atau notifikasi gagal login
      }
    } catch (error) {
      console.error('Error while logging in:', error);
      dispatch(loginFailure());
      // Tampilkan pesan kesalahan atau notifikasi gagal login
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
