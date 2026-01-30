import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import { db } from '../src/db/db'
import { useState, useEffect } from 'react'

function App() {

  const [customer, setCustomer] = useState({})
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useState([])

  console.log(total)

  const [data, setData] = useState(db)

  console.log(data)
  console.log("Carrito:", cart)

  const [cards, setCards] = useState([])

  //useEffect(()=>{
  //  setData(db)
  //},[])

  return (
    <div>
      <Header cart={cart} setCart={setCart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(guitar => (
            <Card
              key={guitar.id}
              guitar={guitar}
              cart={cart}
              setCart={setCart}
            />
          ))}

        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App