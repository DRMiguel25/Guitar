export default function Card({ guitar, cart, setCart }) {
    const { name, image, description, price } = guitar

    const handleClick = (item) => {
        //Verificar si ya existe en el carrito usando operador ternario
        const existeEnCarrito = cart.find(g => g.id === item.id)
        //si existe, incrementar cantidad, si no existe, agregar con quiantity 1
        const carritoActualizado = existeEnCarrito
            ? cart.map(g => g.id === item.id ? { ...g, quantity: g.quantity + 1 } : g)
            : [...cart, { ...item, quantity: 1 }]

        setCart(carritoActualizado)
    }
    /* const addTocart(item){
        const itemExist = cart.findIndex(guitar=> guitar.id== item.id)
        //sin duplicados
        if (itemExist >=0){
            const updatedCart = [...cart]
            updatedCart[itemExist].quantity++
            setCart(updatedCart)
            //aumentar el valor de cantidad
    
        }else{
            //creando quantity
            item.quantity =1
            setCart ([...cart,item])
        }
    } */
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