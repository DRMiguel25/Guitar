# Mi Primer Proyecto React - Tienda de Guitarras 🎸

## Descripción del Proyecto
Este proyecto es una tienda de guitarras desarrollada con React. Permite visualizar una colección de guitarras y agregarlas a un carrito de compras.

---

## Temas Vistos en React

### 1. ¿Qué es un Componente?
Un **componente** en React es una pieza reutilizable de código que representa una parte de la interfaz de usuario. Es como un bloque de construcción que puede contener HTML, CSS y JavaScript. Los componentes pueden ser funciones que retornan JSX.

**Ejemplo en el proyecto:**
```jsx
// Card.jsx - Componente que muestra cada guitarra
export default function Card({ guitar, addToCart }) {
    return (
        <div className="col-md-6 col-lg-4 my-4">
            {/* Contenido del componente */}
        </div>
    )
}
```

**Componentes creados:**
- `App.jsx` - Componente principal
- `Header.jsx` - Encabezado con logo y carrito
- `Footer.jsx` - Pie de página
- `Card.jsx` - Tarjeta de cada guitarra
- `Carrito.jsx` - Carrito de compras
- `Item.jsx` - Cada item dentro del carrito

---

### 2. ¿Qué es un State (Estado)?
Un **state** en React es una variable especial que permite almacenar y manejar datos que pueden cambiar durante la ejecución de la aplicación. Cuando el state cambia, el componente se vuelve a renderizar automáticamente para reflejar los nuevos datos.

**Ejemplo en el proyecto:**
```jsx
// En App.jsx
const [cart, setCart] = useState([])  // Estado del carrito (array vacío inicial)
const [data, setData] = useState(db)  // Estado de las guitarras
const [total, setTotal] = useState(0) // Estado del total a pagar
```

**Para qué sirve:**
- `cart` → Almacena los productos agregados al carrito
- `data` → Almacena la lista de guitarras de la base de datos
- `setCart` → Función para actualizar el carrito

---

### 3. ¿Qué son las Props?
Las **props** (propiedades) son la forma de pasar datos de un componente padre a un componente hijo. Son como argumentos que se le pasan a una función.

**Ejemplo en el proyecto:**
```jsx
// En App.jsx (PADRE) pasando props al componente Card (HIJO)
<Card 
    key={guitar.id}
    guitar={guitar}        // Prop: datos de la guitarra
    addToCart={addToCart}  // Prop: función para agregar al carrito
/>

// En Card.jsx (HIJO) recibiendo las props
export default function Card({ guitar, addToCart }) {
    const { name, image, price } = guitar  // Desestructuración de la prop
}
```

**Flujo de props en el proyecto:**
```
App.jsx → Header.jsx → Carrito.jsx → Item.jsx
   ↓
 Card.jsx
```

---

### 4. ¿Qué es el useState Hook?
**useState** es un Hook de React que permite agregar estado a componentes funcionales. Retorna un array con dos elementos: el valor actual del estado y una función para actualizarlo.

**Sintaxis:**
```jsx
const [valorEstado, setValorEstado] = useState(valorInicial)
```

**Ejemplo en el proyecto:**
```jsx
import { useState } from 'react'

const [cart, setCart] = useState([])  // Array vacío como valor inicial

// Para actualizar el estado:
setCart([...cart, nuevoItem])  // Agrega un nuevo item al carrito
```

---

### 5. ¿Qué es la Desestructuración?
La **desestructuración** es una forma de extraer valores de objetos o arrays y asignarlos a variables de manera más limpia y legible.

**Ejemplo en el proyecto:**
```jsx
// En Item.jsx - Desestructuración de props
export default function Item({ cart }) {
    // Desestructuración del objeto cart
    const { image, name, price, quantity } = cart
}

// En Card.jsx - Desestructuración de props
export default function Card({ guitar, addToCart }) {
    const { name, image, description, price } = guitar
}
```

---

### 6. ¿Qué es el Método .map()?
El método **.map()** se utiliza para iterar sobre un array y retornar un nuevo array con los elementos transformados. En React se usa comúnmente para renderizar listas de componentes.

**Ejemplo en el proyecto:**
```jsx
// En App.jsx - Iterando sobre las guitarras
{data.map(guitar => (
    <Card
        key={guitar.id}
        guitar={guitar}
        addToCart={addToCart}
    />
))}

// En Carrito.jsx - Iterando sobre el carrito
{cart.map(item => (
    <Item
        key={item.id}
        cart={item}
    />
))}
```

---

### 7. ¿Qué son los Eventos en React?
Los **eventos** permiten responder a acciones del usuario como clicks, cambios en inputs, etc. Se manejan con funciones que se ejecutan cuando ocurre el evento.

**Ejemplo en el proyecto:**
```jsx
// En Card.jsx - Evento onClick
const handleClick = () => {
    addToCart(guitar)  // Agrega la guitarra al carrito
}

<button
    type="button"
    className="btn btn-dark w-100"
    onClick={handleClick}  // Evento onClick
>
    Agregar al Carrito
</button>
```

---

### 8. ¿Qué es el Virtual DOM?
El **Virtual DOM** es una representación virtual del DOM real que React mantiene en memoria. Cuando el estado cambia, React compara el Virtual DOM con el DOM real y solo actualiza las partes que cambiaron, haciendo la aplicación más eficiente.

---

### 9. Componentes Padre e Hijo
En React, los componentes pueden contener otros componentes, creando una jerarquía de padre-hijo.

**Estructura del proyecto:**
```
App.jsx (PADRE PRINCIPAL)
├── Header.jsx (hijo de App, padre de Carrito)
│   └── Carrito.jsx (hijo de Header, padre de Item)
│       └── Item.jsx (hijo de Carrito)
├── Card.jsx (hijo de App)
└── Footer.jsx (hijo de App)
```

---

## Estructura de Archivos
```
src/
├── components/
│   ├── Card.jsx      # Tarjeta de guitarra
│   ├── Carrito.jsx   # Componente del carrito
│   ├── Footer.jsx    # Pie de página
│   ├── Header.jsx    # Encabezado
│   └── Item.jsx      # Item del carrito
├── db/
│   └── db.js         # Base de datos de guitarras
├── App.jsx           # Componente principal
├── App.css           # Estilos
└── main.jsx          # Punto de entrada
```

---

## Cómo Ejecutar el Proyecto
```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

---

## Autor
Proyecto desarrollado para la materia de Sistemas Abiertos II en reactjs.

