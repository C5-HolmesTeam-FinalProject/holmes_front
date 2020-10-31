import React, { useEffect } from 'react';

function Datos() {
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await fetch('http://localhost:1337/users');
      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  return <div>Hi</div>;
}

export default Datos;
