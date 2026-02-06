import Carrito from './Carrito'

export default function Header({ cart, setCart }) {

    const vaciarCarrito = () => {
        setCart([])
    }

    const eliminarItem = (id) => {
        const carritoActualizado = cart.filter(item => item.id !== id)
        setCart(carritoActualizado)
    }

    const incrementarCantidad = (id) => {
        const carritoActualizado = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        setCart(carritoActualizado)
    }

    const decrementarCantidad = (id) => {
        //Si la cantidad es mayor a 1, decrementar; si no, eliminar del carrito
        const itemActual = cart.find(item => item.id === id)
        const carritoActualizado = itemActual.quantity > 1
            ? cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
            : cart.filter(item => item.id !== id)
        setCart(carritoActualizado)
    }

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <Carrito
                            cart={cart}
                            setCart={setCart}
                            vaciarCarrito={vaciarCarrito}
                            eliminarItem={eliminarItem}
                            incrementarCantidad={incrementarCantidad}
                            decrementarCantidad={decrementarCantidad}
                        />
                    </nav>
                </div>
            </div>
        </header>
    )
}