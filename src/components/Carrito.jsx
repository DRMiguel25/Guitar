import Item from './Item'

export default function Carrito({ cart, setCart, vaciarCarrito, eliminarItem, incrementarCantidad, decrementarCantidad }) {
    //state derivado
    const isEmpty = cart.length === 0
    const carTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    return (
        <div className="carrito">
            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

            <div id="carrito" className="bg-white p-3">
                {isEmpty ? (
                    <p className="text-center">El carrito está vacío</p>
                ) : (
                    <>
                        <table className="w-100 table">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <Item
                                        key={item.id}
                                        cart={item}
                                        eliminarItem={eliminarItem}
                                        incrementarCantidad={incrementarCantidad}
                                        decrementarCantidad={decrementarCantidad}
                                    />
                                ))}
                            </tbody>
                        </table>

                        <p className="text-end">
                            Total pagar: <span className="fw-bold">
                                ${carTotal()}
                            </span>
                        </p>
                        <button
                            className="btn btn-dark w-100 mt-3 p-2"
                            onClick={vaciarCarrito}
                        >Vaciar Carrito</button>
                    </>
                )}
            </div>
        </div>
    )
}
