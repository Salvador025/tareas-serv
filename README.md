# Guía de Configuración del Proyecto `tarea1`

Este proyecto `tarea1` es una aplicación Node.js básica que utiliza `express` para el servidor, `axios` para realizar solicitudes HTTP y `dotenv` para manejar variables de entorno.

## Requisitos Previos

Asegúrate de tener instalado Node.js y npm en tu sistema. Este proyecto ha sido configurado para usar Node.js v16.17.1 y npm v8.15.0.

## Configuración Inicial

1. **Clonar el Repositorio**

   Si el proyecto está alojado en un repositorio, comienza clonándolo en tu máquina local usando:

- mkdir tarea1
- cd tarea1

2. **Crear package.json**

   Puedes crear un archivo `package.json` pegando el texto JSON proporcionado en un nuevo archivo llamado `package.json` dentro del directorio del proyecto. Asegúrate de reemplazar `<url-del-repositorio>` con la URL real de tu repositorio si es necesario.
Crear package.json

Puedes crear un archivo package.json pegando el texto JSON proporcionado en un nuevo archivo llamado package.json dentro del directorio del proyecto. Asegúrate de reemplazar <url-del-repositorio> con la URL real de tu repositorio si es necesario.

Instalar Dependencias

## Ejecuta los siguientes comandos para instalar las dependencias necesarias:


- npm install axios
- npm install dotenv
- npm install express
## Y las dependencias de desarrollo:

- npm install --save-dev cross-env
- npm install --save-dev nodemon
- Configuración de Variables de Entorno

Crea un archivo .env en la raíz del proyecto para almacenar tus variables de entorno. Asegúrate de no incluir este archivo en tu repositorio (deberías añadir .env a tu .gitignore).

## Ejemplo de contenido para .env:

- PORT=3000
- Escribir el Código Fuente

Crea un archivo index.js como punto de entrada de tu aplicación. Aquí puedes configurar tu servidor Express y cualquier otra lógica necesaria para tu aplicación.

# Ejecución del Proyecto

## Para iniciar el proyecto en modo de desarrollo, donde nodemon observará los cambios en los archivos y reiniciará el servidor automáticamente, usa:

- npm run dev

## Para iniciar el proyecto en modo de producción, usa:

- npm start

Estructura del Proyecto
Tu proyecto ahora debería tener una estructura similar a la siguiente:


tarea1/
│   .env
│   .gitignore
│   index.js
│   package.json
└── node_modules/