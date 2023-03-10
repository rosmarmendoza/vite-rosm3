import { useState } from "react";
import Card from "./Components/Card/Card"
import './App.css'


export const App = () => {
  /* Props*/
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleColorChange = (event) => {
    setColor(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length < 3 || /^\s/.test(name) || color.trim().length < 6) {
      setError(true);
    } else {
      setError(false);
    }
    setFormSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>        
      /* Input Nombre */
        <p>
          <label htmlFor="name">Nombre</label>
          <input type="text"
            id="name"
            placeholder="Ingresa tu nombre"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </p>
        <p>
        /* Input Color */
          <label htmlFor="color">Color</label> 
          <input type="text"
            id="color"
            placeholder="Ingresa tu color favorito"
            name="color"
            value={color}
            onChange={handleColorChange}
          />
        </p>
        <input type="submit" value="Enviar" />
      </form>
      /* Manejo de error */
    </div>
  );
}
export default App
