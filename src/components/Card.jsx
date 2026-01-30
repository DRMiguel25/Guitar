export default function Card({ guitar, cart, setCart }) {
    const { name, image, description, price } = guitar

    const handleClick = (item) => {
        // Verificar si ya existe en el carrito
        const existeEnCarrito = cart.find(g => g.id === item.id)

        if (existeEnCarrito) {
            // Si existe, incrementar cantidad
            const carritoActualizado = cart.map(g => {
                if (g.id === item.id) {
                    return { ...g, quantity: g.quantity + 1 }
                }
                return g
            })
            setCart(carritoActualizado)
        } else {
            // Si no existe, agregar con quantity 1
            setCart([...cart, { ...item, quantity: 1 }])
        }
    }

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img
                    className="img-fluid"
                    src={"/img/" + image + ".jpg"}
                    alt="imagen guitarra"
                />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => handleClick(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}