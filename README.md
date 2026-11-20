# Registro de Productos — Refactorización CREATE con Firebase

Aplicación web desarrollada con **React**, **TypeScript** y **Firebase Firestore** que implementa la operación **CREATE** bajo una arquitectura modular separando la presentación, la lógica de formulario y el acceso a datos.

---

## Arquitectura y Flujo de Datos

El proyecto desacopla completamente las llamadas directas a Firestore de la capa de interfaz de usuario siguiendo este flujo unidireccional:

```text
App.tsx (Vista principal)
  └── ProductoForm.tsx (Captura de datos, estados y limpieza del formulario)
        └── crearProducto() ──► productoService.ts (Acceso a Firestore: collection / addDoc)
                                      └── Colección "productos" en Cloud Firestore
```

### Estructura del Proyecto

```text
src/
├── components/
│   └── ProductoForm.tsx      # Formulario controlado (nombre, precio, stock)
├── services/
│   └── productoService.ts    # Encapsulación de collection() y addDoc()
├── App.css                   # Tokens y estilos (Digital Scrapbook Collage)
├── App.tsx                   # Contenedor principal de la aplicación
├── firebase.ts               # Inicialización de Firebase y exportación de db
└── main.tsx                  # Punto de entrada de React
```

---

## Tecnologías Utilizadas

- **React** + **TypeScript**
- **Vite**
- **Firebase SDK** (Cloud Firestore)
- **CSS Custom Properties** (Sistema visual *Digital Scrapbook Collage* con tipografías *Lora* e *Inter*)

---

## Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd firebase-app
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. Abrir en el navegador la URL indicada por Vite (por defecto `http://localhost:5173`).

---

## Reglas de Refactorización Cumplidas

- `App.tsx` delega el renderizado del formulario a `<ProductoForm />` sin importar `firebaseConfig`, `collection()` ni `addDoc()`.
- `ProductoForm.tsx` gestiona exclusivamente los estados locales (`nombre`, `precio`, `stock`), el envío y el reinicio de campos, invocando únicamente a `crearProducto()`.
- `productoService.ts` centraliza la tipificación (`NuevoProducto`) y la persistencia en la colección `"productos"` de Firestore.