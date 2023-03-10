import { useState } from "react";
import Card from "./Components/Card/Card"
import './App.css'


export const App = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
      {formSubmitted &&
        (error ?
          <p>Por favor chequea que la información sea correcta</p>
          :
          <Card name={name} colorHex={color} />)}
    </div>
  );
}
export default App
