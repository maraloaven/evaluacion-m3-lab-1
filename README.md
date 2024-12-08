# Sitio Web de la Clínica Clínica

Este es un proyecto de una página web para la Clínica Clínica, diseñado con HTML, CSS (Bootstrap) y JavaScript. El sitio web presenta información básica de la clínica, incluyendo una página de bienvenida, detalles sobre el equipo médico y una sección de contacto.

## Descripción del Proyecto

El sitio web incluye tres secciones principales:

1. **Página de Bienvenida:**  
   Presenta información general sobre la clínica, los servicios disponibles y testimonios de pacientes para generar confianza en los visitantes.

2. **Equipo Médico:**  
   Muestra los detalles del personal médico, como sus especialidades, experiencia y datos de contacto. También incluye una lista interactiva que se genera dinámicamente desde un archivo JSON.

3. **Página de Contacto:**  
   Ofrece un formulario para que los usuarios envíen mensajes y un mapa interactivo que muestra la ubicación de la clínica.

## Tecnologías Utilizadas

- HTML y CSS para la estructura y el diseño básico del sitio.
- JavaScript para implementar lógica interactiva y modelos de datos.
- JSON para almacenar y gestionar la información de los doctores.

## Estructuras de Datos

En este proyecto se utilizaron varias estructuras de datos para optimizar el manejo de información:

- Arreglos: Se utiliza un arreglo (doctoresArreglo) para almacenar la lista de doctores. También tiene operaciones para agregar, eliminar y buscar doctores. Se definen funciones como agregarDoctor, eliminarDoctor y buscarDoctor para gestionar estas operaciones.

- Pilas: Se implementa una pila (pilaCitas) para gestionar las citas de los pacientes. La función agendarCita agrega un paciente a la pila, y la función atenderCita atiende la última cita agendada, eliminándola de la pila.

- Colas: Se crea una cola (colaPacientes) para simular el orden de llegada de los pacientes. La función ingresarPaciente agrega un paciente a la cola, y atenderPaciente atiende al primer paciente de la cola.

## JSON y Operaciones

En el proyecto, se utilizó un archivo JSON para gestionar la información sobre los doctores que es manipulado mediante operaciones:

- Clonación:
  La clonación de objetos JSON se implementó mediante la función `JSON.parse` para crear copias profundas de los datos y evitar efectos secundarios.

- Merge (Fusión):
  Se utilizaron operaciones de fusión para combinar datos de varias fuentes, permitiendo actualizar y consolidar información de los doctores.

- Recorrido (Iteración):
  Se recorrió el archivo JSON para generar dinámicamente la lista de doctores en la página del equipo médico. Se usó un bucle `forEach` para iterar sobre los doctores y crear elementos HTML dinámicamente.

## Descripción de los Algoritmos y Complejidad

- Costo Total por Consultas (Algoritmo de O(1)): 
  El cálculo del costo total por consultas médicas tiene complejidad constante, ya que solo requiere una multiplicación.

- Tiempo Promedio de Espera (Algoritmo de O(n)): 
  El cálculo del tiempo promedio de espera de los pacientes tiene complejidad lineal, ya que requiere recorrer todos los tiempos de espera y sumarlos.

- Horas Totales de Consulta (Algoritmo de O(n)):
  El cálculo de las horas totales de consulta se realiza de forma recursiva y tiene complejidad lineal, ya que debe sumar las horas por cada día.

- Descuento por Volumen (Algoritmo de O(1)):
  La aplicación de un descuento por volumen es una operación constante, ya que solo se multiplica el precio por un valor fijo.

### Estructura de los Archivos

La estructura del proyecto en general está organizada de la siguiente manera para promover la reutilización y facilitar el mantenimiento:

        /ClínicaClínica
        │
        ├── index.html                
        ├── equipo-medico.html         
        ├── contacto.html        
        ├── script.js         
        ├── doctores.json
        │
        ├── scss/
        │   ├── main.scss
        │   ├── main.css 
        │   ├── main.css.map
        │   ├── abstract
        │   │   └── _variables-mixins.scss
        │   ├── base
        │   │   └── _base.scss
        │   ├── components
        │   │   └── _navbar.scss
        │   ├── layout
        │   │   └── _header-footer.scss
        │   ├── pages
        │   │   └── _home.scss
        │   ├── themes
        │   │   └── _helpers.scss
        │   └── vendor
        │       └── __custom_bootstrap.scss
        │
        ├── img/                  
        │    ├── dr1.jpg
        │    ├── dr2.jpg
        │    ├── dr3.jpg
        │    ├── dr4.jpg 
        │    ├── logo.jpg      
        │    ├── pac1.jpg   
        │    ├── pac2.jpg    
        │    ├── pac3.jpg  
        │    ├── ser1.jpg 
        │    ├── ser2.jpg    
        │    └── ser3.jpg           
        │
        ├── .gitignore
        ├── package-lock.json
        ├── package.json
        └── README.md

## Instrucciones para Visualizar el Proyecto

### Requisitos Previos

- Tener **Node.js** y **npm** instalados en tu computadora.
- Tener **SASS** instalado globalmente. Si no lo tienes, puedes instalarlo ejecutando el siguiente comando:

        npm install -g sass

### Pasos para Ejecutar el Proyecto

1. Clona el repositorio en tu máquina local:

        git clone <URL del repositorio>
        cd <nombre del repositorio>
2. Instala las dependencias necesarias (si es que usas alguna para el proyecto):

        npm install
3. Compila los archivos SASS en CSS ejecutando el siguiente comando:

        sass scss/main.scss:scss/main.css
4. Abre el archivo `index.html` (o cualquier otro archivo HTML del proyecto) en tu navegador:
- Utiliza Live Server (si estás trabajando en VS Code) para ver la página en tu navegador
- Haz clic derecho sobre `index.html`.
- Selecciona "Open with Live Server" para iniciar la página en tu navegador.

## Autor

- Martín Avendaño