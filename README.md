# Agenda App

Este proyecto de Agenda es una aplicación web desarrollada por Sebastián Rueda utilizando HTML, CSS y JavaScript. La aplicación está diseñada para ayudarte a organizar tus eventos y tareas diarias de manera eficiente.

## Características

- **Interfaz de Usuario Intuitiva**: La interfaz de usuario de la aplicación es amigable y fácil de usar, permitiéndote gestionar tus eventos de manera rápida.
- **Web Components**: Se han utilizado Web Components para modularizar el código y mejorar la reutilización de componentes en la aplicación.
- **Bootstrap**: Se ha integrado Bootstrap para facilitar el diseño y la estructura visual de la aplicación, lo que garantiza una apariencia moderna y receptiva en diferentes dispositivos.
- **Almacenamiento en JSON**: Los eventos y tareas se guardan y administran utilizando un archivo JSON para garantizar la persistencia de los datos.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. Para que el proyecto funcione correctamente y pueda acceder al archivo JSON, se recomienda abrir un servidor JSON. Puedes hacerlo instalando `json-server` globalmente y ejecutando el siguiente comando en la terminal dentro del directorio del proyecto:

```bash

json-server --watch storage/data/tareas.json
```

¡Y eso es todo! Ahora puedes empezar a utilizar la Agenda App para organizar tus eventos y tareas diarias de manera eficiente.