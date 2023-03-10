import React from 'react'

function Card({ name }) {
  return (
    <div style={{ width: "300px", border: "1px solid gray", textAlign: "center" }}>
      <h2>Hola {name}!</h2>
    </div >
  );
}

export default Card