export default function Item({ cart, carrito, setCart }) {
    const { id, image, name, price, quantity } = cart

    const eliminarItem = () => {
        const carritoActualizado = carrito.filter(item => item.id !== id)
        setCart(carritoActualizado)
    }

    return (
        <tr>
            <td>
                <img
                    className="img-fluid"
                    src={"/img/" + image + ".jpg"}
                    alt={name}
                    style={{ width: '50px' }}
                />
            </td>
            <td>{name}</td>
            <td className="fw-bold">${price}</td>
            <td className="fw-bold text-center">{quantity}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={eliminarItem}
                >
                    X
                </button>
            </td>
        </tr>
    )
}
