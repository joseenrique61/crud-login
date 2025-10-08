# CRUD de Dispositivos con Autenticación

[![Laravel](https://img.shields.io/badge/Laravel-12-red.svg)](https://laravel.com/)
[![PHP](https://img.shields.io/badge/PHP-8.4-blue.svg)](https://www.php.net/)
[![Tests](https://github.com/joseenrique61/crud-login/actions/workflows/tests.yml/badge.svg)](https://github.com/joseenrique61/crud-login/actions/workflows/tests.yml)

##  Índice

- [CRUD de Dispositivos con Autenticación](#crud-de-dispositivos-con-autenticación)
  - [Índice](#índice)
  - [Descripción del Proyecto](#descripción-del-proyecto)
  - [Estado del proyecto](#estado-del-proyecto)
  - [Características de la aplicación y demostración](#características-de-la-aplicación-y-demostración)
  - [Acceso al proyecto](#acceso-al-proyecto)
    - [Requisitos](#requisitos)
    - [Instalación](#instalación)
    - [Ejecución](#ejecución)
  - [Tecnologías utilizadas](#tecnologías-utilizadas)
  - [Personas Contribuyentes](#personas-contribuyentes)
  - [Personas Desarrolladoras del Proyecto](#personas-desarrolladoras-del-proyecto)
  - [Licencia](#licencia)

## Descripción del Proyecto

Este es un proyecto de ejemplo que implementa un CRUD (Crear, Leer, Actualizar, Eliminar) de dispositivos con autenticación de usuarios. El proyecto está construido con Laravel en el backend y React con TypeScript en el frontend.

## Estado del proyecto

El proyecto se encuentra actualmente en desarrollo.

## Características de la aplicación y demostración

- Autenticación de usuarios (registro, inicio de sesión, cierre de sesión).
- CRUD de dispositivos.
- Roles de usuario (administrador, usuario).
- Interfaz de usuario moderna construida con React y Shadcn UI.

## Acceso al proyecto

### Requisitos

- PHP >= 8.1
- Composer
- Node.js
- npm

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/joseenrique61/crud-login.git
   ```

2. Instala las dependencias de PHP:

   ```bash
   composer install
   ```

3. Instala las dependencias de Node.js:

   ```bash
   npm install
   ```

4. Crea una copia del archivo de entorno:

   ```bash
   cp .env.example .env
   ```

5. Genera una nueva clave de aplicación:

   ```bash
   php artisan key:generate
   ```

6. Configura tu base de datos en el archivo `.env`.

7. Ejecuta las migraciones de la base de datos:

   ```bash
   php artisan migrate
   ```

8. Ejecuta los seeders para poblar la base de datos con datos de ejemplo:

   ```bash
   php artisan db:seed
   ```

### Ejecución

Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```bash
composer run dev
```

Esto iniciará el servidor de desarrollo de Vite y el servidor de Laravel. Puedes acceder a la aplicación en `http://localhost:8000`.

## Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
php artisan test
```

## Tecnologías utilizadas

- [Laravel](https://laravel.com/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [PHP](https://www.php.net/)
- [Shadcn UI](https://ui.shadcn.com/)

## Personas Desarrolladoras del Proyecto

[<img src="https://www.github.com/joseenrique61.png" width=115><br><sub>José Enrique Cerezo</sub>](https://github.com/joseenrique61)

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.