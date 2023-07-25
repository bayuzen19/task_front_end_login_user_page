import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../actions/actions';
import './UsersPage.css';

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();

        if (response.ok) {
          // Simpan daftar pengguna ke Redux state
          dispatch(setUsers(data.data));
        } else {
          console.error('Error while fetching users:', data);
          // Tampilkan pesan kesalahan atau notifikasi gagal mendapatkan daftar pengguna
        }
      } catch (error) {
        console.error('Error while fetching users:', error);
        // Tampilkan pesan kesalahan atau notifikasi gagal mendapatkan daftar pengguna
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div className="users-container">
      <h2>Users Page</h2>
      <div className="user-list">
        {users.map((user) => (
          <div className="user-item" key={user.id}>
            <img src={user.avatar} alt="User Avatar" />
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
