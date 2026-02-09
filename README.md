# Mi Primer Proyecto React - Tienda de Guitarras

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

**Componentes y Hooks creados:**
- `App.jsx` - Componente principal
- `Header.jsx` - Encabezado con logo y carrito
- `Footer.jsx` - Pie de página
- `Card.jsx` - Tarjeta de cada guitarra
- `Carrito.jsx` - Carrito de compras
- `Item.jsx` - Cada item dentro del carrito
- `useLocalStorage.js` - Custom hook para persistencia de datos

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
├── hooks/
│   └── useLocalStorage.js  # Custom hook para persistencia
├── App.jsx           # Componente principal
├── App.css           # Estilos
└── main.jsx          # Punto de entrada
```

---

### 10. Operadores Ternarios para Validaciones
Los **operadores ternarios** son una forma concisa de escribir condicionales en una sola línea. Son muy útiles para validaciones y decisiones simples.

**Sintaxis:**
```javascript
condición ? valorSiVerdadero : valorSiFalso
```

**Ejemplo en el proyecto:**
```jsx
// En Card.jsx - Validación para agregar o incrementar cantidad
const handleClick = (item) => {
    const existeEnCarrito = cart.find(g => g.id === item.id)
    
    // Operador ternario: si existe incrementa, si no agrega
    const carritoActualizado = existeEnCarrito
        ? cart.map(g => g.id === item.id ? { ...g, quantity: g.quantity + 1 } : g)
        : [...cart, { ...item, quantity: 1 }]
    
    setCart(carritoActualizado)
}

// En Header.jsx - Validación para decrementar o eliminar
const decrementarCantidad = (id) => {
    const itemActual = cart.find(item => item.id === id)
    // Si cantidad > 1 decrementa, si no elimina del carrito
    const carritoActualizado = itemActual.quantity > 1
        ? cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        : cart.filter(item => item.id !== id)
    setCart(carritoActualizado)
}

// En Carrito.jsx - Mostrar mensaje o contenido
{isEmpty ? (
    <p className="text-center">El carrito está vacío</p>
) : (
    <> {/* Contenido del carrito */} </>
)}
```

**Ventajas:**
- Código más conciso y legible
- Menos líneas de código
- Ideal para validaciones simples

---

### 11. Lifting State Up (Elevar el Estado)
**Lifting State Up** es un patrón en React donde se mueve el estado y la lógica al componente padre más cercano que necesita compartir esos datos. Esto permite que múltiples componentes hijos compartan el mismo estado.

**Implementación en el proyecto:**
```jsx
// Header.jsx (PADRE) - Contiene toda la lógica del carrito
export default function Header({ cart, setCart }) {
    const vaciarCarrito = () => setCart([])
    
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
        const itemActual = cart.find(item => item.id === id)
        const carritoActualizado = itemActual.quantity > 1
            ? cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
            : cart.filter(item => item.id !== id)
        setCart(carritoActualizado)
    }
    
    return (
        <Carrito 
            cart={cart}
            vaciarCarrito={vaciarCarrito}
            eliminarItem={eliminarItem}
            incrementarCantidad={incrementarCantidad}
            decrementarCantidad={decrementarCantidad}
        />
    )
}

// Item.jsx (HIJO) - Solo recibe y ejecuta las funciones
export default function Item({ cart, eliminarItem, incrementarCantidad, decrementarCantidad }) {
    const { id, image, name, price, quantity } = cart
    
    return (
        <button onClick={() => incrementarCantidad(id)}>+</button>
        // Solo ejecuta la función, no maneja la lógica
    )
}
```

**Flujo de datos:**
```
Header (lógica centralizada)
  ↓ pasa funciones como props
Carrito (recibe y pasa)
  ↓ pasa funciones como props
Item (solo ejecuta)
```

**Ventajas:**
- **Single Source of Truth**: Una sola fuente de verdad
- **Mantenibilidad**: Cambios en un solo lugar
- **Componentes más simples**: Hijos solo renderizan
- **Reutilización**: Funciones compartidas entre componentes

---

### 12. Funcionalidad del Carrito (+, -, X)
El carrito implementa tres funcionalidades principales mediante botones que permiten gestionar los items:

**Botón "+" (Incrementar cantidad):**
```jsx
const incrementarCantidad = (id) => {
    const carritoActualizado = cart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCart(carritoActualizado)
}
```
- Aumenta la cantidad del producto en 1
- Usa `map()` para encontrar el item y actualizar solo su cantidad
- Mantiene los demás items sin cambios

**Botón "-" (Decrementar cantidad):**
```jsx
const decrementarCantidad = (id) => {
    const itemActual = cart.find(item => item.id === id)
    // Si cantidad > 1 decrementa, si no elimina del carrito
    const carritoActualizado = itemActual.quantity > 1
        ? cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        : cart.filter(item => item.id !== id)
    setCart(carritoActualizado)
}
```
- Si la cantidad es mayor a 1: decrementa en 1
- Si la cantidad es 1: elimina el item del carrito
- Usa operador ternario para decidir la acción

**Botón "X" (Eliminar item):**
```jsx
const eliminarItem = (id) => {
    const carritoActualizado = cart.filter(item => item.id !== id)
    setCart(carritoActualizado)
}
```
- Elimina completamente el item del carrito
- Usa `filter()` para crear un nuevo array sin el item eliminado

**Implementación en Item.jsx:**
```jsx
<button onClick={() => decrementarCantidad(id)}>-</button>
<span>{quantity}</span>
<button onClick={() => incrementarCantidad(id)}>+</button>
<button onClick={() => eliminarItem(id)}>X</button>
```

---

### 13. Estados Derivados (Derived State)
Los **estados derivados** son valores calculados a partir del estado existente. No se almacenan en un state separado, sino que se calculan en cada render.

**Ejemplo en el proyecto:**
```jsx
// En Carrito.jsx
export default function Carrito({ cart }) {
    // Estados derivados - calculados a partir de 'cart'
    const isEmpty = cart.length === 0
    const carTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    
    return (
        <>
            {isEmpty ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    {/* Contenido del carrito */}
                    <p>Total pagar: <span>${carTotal()}</span></p>
                </>
            )}
        </>
    )
}
```

**Ventajas:**
- **DRY (Don't Repeat Yourself)**: No repetir código
- **Siempre actualizado**: Se recalcula en cada render
- **Más legible**: `isEmpty` es más claro que `cart.length === 0`
- **Mantenible**: Cambios en un solo lugar

---

### 14. Principio DRY (Don't Repeat Yourself)
El principio **DRY** consiste en evitar la duplicación de código. Si tienes la misma lógica en varios lugares, debes extraerla a una función o variable reutilizable.

**Ejemplo en el proyecto:**
```jsx
//  ANTES - Código repetido
<p>Total: ${cart.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
<span>${cart.reduce((total, item) => total + (item.price * item.quantity), 0)}</span>

//  DESPUÉS - Usando estado derivado
const carTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0)

<p>Total: ${carTotal()}</p>
<span>${carTotal()}</span>
```

---

### 15. Custom Hooks y Persistencia con localStorage
Un **Custom Hook** es una función reutilizable que encapsula lógica de React. Permite compartir lógica entre componentes sin duplicar código.

**¿Qué es localStorage?**
`localStorage` es una API del navegador que permite guardar datos de forma permanente en el navegador del usuario. Los datos persisten incluso después de cerrar el navegador.

**Implementación en el proyecto:**
```jsx
// hooks/useLocalStorage.js - Custom Hook
export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log('Error al leer del localStorage:', error)
            return initialValue
        }
    })

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.log('Error al guardar en localStorage:', error)
        }
    }

    return [storedValue, setValue]
}
```

**Uso en App.jsx:**
```jsx
// ANTES - Sin persistencia
const [cart, setCart] = useState([])

// DESPUÉS - Con persistencia
import { useLocalStorage } from './hooks/useLocalStorage'
const [cart, setCart] = useLocalStorage('carrito-guitarras', [])
```

**¿Cómo funciona?**
1. Al cargar la página, lee `'carrito-guitarras'` del localStorage
2. Si existe, parsea los datos JSON y los carga en el estado
3. Si no existe, usa el array vacío `[]` como valor inicial
4. Cada vez que se llama a `setCart()`, guarda automáticamente en localStorage

**Ventajas:**
-**Persistencia**: Los productos del carrito se mantienen al recargar la página
-**Reutilizable**: El hook se puede usar para otros datos
-**Manejo de errores**: Protege contra fallos de localStorage
-**Código limpio**: Un solo cambio activa la persistencia

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
Proyecto desarrollado  por el Miguelon, para la materia de Sistemas Abiertos II en reactjs.

