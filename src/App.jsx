import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import { useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {

  const [customer, setCustomer] = useState({})
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useLocalStorage('carrito-guitarras', [])

  // 1. Iniciamos 'data' como un arreglo vacío. Ya no usamos 'db'.
  const [data, setData] = useState([])

  // 2. Usamos useEffect para consultar el backend en cuanto cargue la página
  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const respuesta = await fetch('http://localhost:4000/Api/products')
        const resultado = await respuesta.json()

        // El backend responde con un objeto { data: [...] }, guardamos ese arreglo
        setData(resultado.data)
      } catch (error) {
        console.error("Hubo un error al conectar con el backend:", error)
      }
    }

    consultarAPI()
  }, [])

  return (
    <div>
      <Header cart={cart} setCart={setCart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {/* 3. Validamos que haya datos antes de mapear para evitar errores */}
          {data && data.length > 0 ? (
            data.map(guitar => (
              <Card
                key={guitar.id}
                guitar={guitar}
                cart={cart}
                setCart={setCart}
              />
            ))
          ) : (
            <p className="text-center">No hay guitarras disponibles en la base de datos.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App