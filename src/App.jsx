import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import './App.css'
import { db } from './db/db' 

function Card({guitar, total, setTotal}) {
  const { name, image, description, price } = guitar;

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
            <img className="img-fluid" src={`/img/${image}.jpg`} alt={`imagen ${name}`} />
        </div>
        <div className="col-8">
            <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
            <p>{description}</p>
            <p className="fw-black text-primary fs-3">${price}</p>
            <button 
                type="button"
                className="btn btn-dark w-100"
                onClick={() => setTotal(total + price)}
            >Agregar al Carrito</button>
        </div>
    </div>
  )
}

function App() {
    const [data] = useState(db);
    const [total, setTotal] = useState(0); 
    const [cart, setCart] = useState([]); 
    
/* const [products, setProducts] = useState([]);

const [modal, setModal] = useState(false); */

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>
          <p className="text-center fs-4">Total en Carrito: <b>${total}</b></p>

          <div className="row mt-5">
    {data.map((guitarItem) => (
        <Card 
            key={guitarItem.id}    
            guitar={guitarItem}    
            total={total}         
            setTotal={setTotal}    
        />
    ))}
</div>
      </main>

      <Footer />
    </>
  )
}

export default App