# TechStore API

API REST desarrollada con Node.js y Express para administrar productos tecnológicos como celulares, accesorios y computadoras.

---

# Tecnologías usadas

- Node.js
- Express.js
- Nodemon
- JSON como base de datos

---

# Estructura del proyecto

```bash
mi-webapp
│
├── controllers
├── middlewares
├── models
├── routes
├── node_modules
├── products.json
├── index.js
├── package.json
└── README.md
```

---

# Instalación

Clonar repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Instalar dependencias:

```bash
npm install
```

Ejecutar servidor:

```bash
npm run dev
```

---

# Endpoints

## Obtener todos los productos

```http
GET /products
```

---

## Obtener producto por ID

```http
GET /products/:id
```

---

## Crear producto

```http
POST /products
```

Body:

```json
{
  "nombre": "iPhone 15",
  "marca": "Apple",
  "precio": 4500,
  "categoria": "Celular"
}
```

---

## Actualizar producto

```http
PUT /products/:id
```

---

## Eliminar producto

```http
DELETE /products/:id
```

---

# Autor

Jhorman Duque
