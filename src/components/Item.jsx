export default function Item({ cart, eliminarItem, incrementarCantidad, decrementarCantidad }) {
    const { id, image, name, price, quantity } = cart

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
            <td className="d-flex align-items-center gap-2">
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => decrementarCantidad(id)}
                >
                    -
                </button>
                <span className="fw-bold">{quantity}</span>
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => incrementarCantidad(id)}
                >
                    +
                </button>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarItem(id)}
                >
                    X
                </button>
            </td>
        </tr>
    )
}
