# GuitarLA - Frontend (Cliente React)

Este documento describe la interfaz de usuario de la aplicación web GuitarLA, el lado cliente del proyecto desarrollado bajo el stack tecnológico PERN para la evaluación práctica del segundo parcial de Ingeniería en Sistemas.

## Tecnologías Utilizadas

En la siguiente tabla se desglosan las librerías, herramientas y frameworks empleados para cimentar la interfaz de usuario:

| Tecnología | Descripción |
| --- | --- |
| React | Biblioteca central de JavaScript para la construcción reactiva de interfaces de usuario. |
| Vite | Servidor de desarrollo moderno y empaquetador de módulos altamente optimizado. |
| Hooks | Funciones internas nativas (como useState y useEffect) utilizadas para abstraer el ciclo de vida y estado de los componentes. |
| Custom Hooks | Lógica extraída en funciones propias (ej. useLocalStorage) para mantener el estado sincronizado de forma persistente. |
| CSS | Estilizado enfocado a módulos y componentes para garantizar aislamiento y evitar conflictos en el diseño a gran escala. |

## Temas de Clase Aplicados

Este proyecto de cliente web evidencia la comprensión y dominio de los siguientes temas abordados durante el curso:

- Consumo de APIs utilizando Fetch API nativa y sintaxis moderna (Async/Await).
- Gestión de estado global y técnicas de persistencia de información en el navegador web con LocalStorage.
- Traspaso de información mediante Props (Prop Drilling).
- Mapping de componentes dinámicos para iterar y renderizar colecciones de un origen de datos externo.
- Principios de Reactividad mediante la modificación del state local.

## Conexión y Consumo del Backend

Para operar correctamente, la interfaz gráfica extrae la totalidad de la información dinámica comunicándose directamente con la REST API de PostgreSQL.

Especificamente, durante la inicialización del componente principal `App.jsx`, un hook `useEffect` ejecuta una función asíncrona que dispara un método GET hacia la ruta `http://localhost:4000/Api/products`. El servidor backend, previamente configurado con CORS para aceptar el origen de este cliente web, responde con la colección de los 12 registros de guitarras. Posteriormente, dicha información se guarda en el estado propio de React y se inyecta por medio de Props en los subcomponentes visuales.

## Requisitos Previos

Antes de levantar el área de desarrollo visual, valide los siguientes puntos:
- Poseer una instancia reciente de Node.js instalada en su computadora.
- El servidor (directorio `/server`) debe estar correctamente instalado, configurado con base de datos real, y estar corriendo activamente en el puerto 4000.

## Instrucciones de Instalación

Siga los siguientes pasos, en el orden especificado, para ensamblar correctamente las herramientas del cliente:

1. Abra su aplicación de terminal y ubíquese dentro del directorio correspondiente del frontend:
```bash
cd Guitar
```

2. Ejecute la instalación general de paquetes para descargar e integrar React, Vite y dependencias derivadas:
```bash
npm install
```

## Arranque del Proyecto

Con el API corriendo silenciosamente en segundo plano y las dependencias locales instaladas, monte el servidor de desarrollo mediante el comando siguiente:

```bash
npm run dev
```

El servicio Vite compilará las vistas rápidamente e imprimirá un puerto local en consola (comúnmente `http://localhost:5173`). Ingrese dicha dirección en su navegador preferido y valide la recepción fluida del catálogo de guitarras operando bajo el diseño estipulado.
