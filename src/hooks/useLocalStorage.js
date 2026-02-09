import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue) {
    // Estado para almacenar el valor
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Intentar obtener el valor del localStorage
            const item = window.localStorage.getItem(key)
            // Si existe, parsearlo; si no, usar el valor inicial
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            // Si hay un error usar el valor inicial
            console.log('Error al leer del localStorage:', error)
            return initialValue
        }
    })

    //   Actualiza  el valor
    const setValue = (value) => {
        try {
            // Permite  que value sea una función como en useState
            const valueToStore = value instanceof Function ? value(storedValue) : value
            // Guardar estado 
            setStoredValue(valueToStore)
            // Guardar en localStorage
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.log('Error al guardar en localStorage:', error)
        }
    }

    return [storedValue, setValue]
}
