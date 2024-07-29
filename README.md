# Hotel Reservation System

## Descripción del Proyecto

Este proyecto es una aplicación de reservación de habitaciones para una cadena hotelera en Miami. La cadena cuenta con tres hoteles: Lakewood, Bridgewood y Ridgewood. Cada hotel tiene tarifas diferentes para días de semana y fines de semana, y tarifas especiales para clientes con recompensas como parte del programa de lealtad. La aplicación permite a los usuarios seleccionar fechas, tipo de cliente (regular o con recompensas), y encontrar el hotel más barato disponible entre las fechas seleccionadas.

## Diseño de la Solución

### Estructura del Proyecto

El proyecto sigue una estructura típica de Angular, con los componentes, servicios y modelos organizados de la siguiente manera:

- `src/app`: Contiene los componentes y servicios principales de la aplicación.
  - `hotel-list`: Componente principal que maneja la interfaz de usuario y la lógica de la aplicación.
  - `hotel.service.ts`: Servicio que contiene la lógica para calcular el hotel más barato.
  - `hotel.model.ts`: Modelo que define la estructura de los datos del hotel.

### Funcionalidades Principales

1. **Selección de Tipo de Cliente**:
  - Los usuarios pueden seleccionar si son clientes regulares o con recompensas utilizando un toggle estilizado.

2. **Ingreso de Fechas**:
  - Los usuarios pueden ingresar múltiples fechas para su estadía. Las fechas ingresadas se muestran en una lista para mayor claridad.

3. **Cálculo del Hotel Más Barato**:
  - La aplicación calcula el hotel más barato en función de las fechas seleccionadas y el tipo de cliente. En caso de empate en precio, se selecciona el hotel con la calificación más alta.

4. **Visualización de Resultados**:
  - Los hoteles se muestran con su nombre, calificación en estrellas, tarifas y una imagen representativa. El hotel más barato se resalta visualmente.

### Suposiciones del Problema

- Los días de semana son de lunes a viernes, y los fines de semana son sábado y domingo.
- Las tarifas de los hoteles son fijas según el tipo de cliente y el día de la semana.
- El usuario puede ingresar cualquier número de fechas para buscar la mejor tarifa.

## Instrucciones de Ejecución

### Prerrequisitos

Asegúrate de tener instalados los siguientes requisitos en tu sistema:

- Node.js (versión 12 o superior)
- Angular CLI

### Instalación

1. Clona el repositorio del proyecto:

   ```sh
   git clone <URL_DEL_REPOSITORIO>

2. Navega al directorio del proyecto:
  ```sh
    cd hotel-reservation
```
3. Instala las dependencias del proyecto:

   ```sh
   npm install
   ```
4. Inicia el servidor de desarrollo:

   ```sh
   ng serve
   ```
5. Abre tu navegador web y navega a http://localhost:4200 para ver la aplicación en funcionamiento.

