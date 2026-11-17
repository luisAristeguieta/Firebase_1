
import { useState, type SyntheticEvent } from 'react'
import './App.css'
import { db } from './firebase'
import { collection, addDoc } from 'firebase/firestore'


function App() {
  const [nombre, setnombre] = useState("");
  const [precio, setprecio] = useState("");
  const [stock, setstock] = useState("");

  const guardarProducto = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    try {

      const docRef = await addDoc(collection(db, "productos"), {
        nombre,
        precio: Number(precio),
        stock: Number(stock),
      });

      console.log("Producto creado: ", docRef.id)

      setnombre("");
      setprecio("");
      setstock("");

    } catch (error) {
      console.log("error :" + error)
    }

  }

  return (
    <div>
      <h1>
        Registros de Productos
      </h1>
      <div>
        <form onSubmit={guardarProducto}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
          />
          <input
            type="number"
            placeholder="precio"
            value={precio}
            onChange={(e) => setprecio(e.target.value)}
          />
          <input
            type="number"
            placeholder="stock"
            value={stock}
            onChange={(e) => setstock(e.target.value)}
          />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>


  )
}

export default App
