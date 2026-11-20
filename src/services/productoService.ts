import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export interface NuevoProducto {
    nombre: string;
    precio: number;
    stock: number;
}

export interface Producto extends NuevoProducto {
    id: string;
}

const PRODUCTOS_COLLECTION = "productos";

export const crearProducto = async (
    nombre: string,
    precio: number,
    stock: number
): Promise<string> => {
    const nuevoProducto: NuevoProducto = {
        nombre,
        precio,
        stock,
    };

    const docRef = await addDoc(
        collection(db, PRODUCTOS_COLLECTION),
        nuevoProducto
    );

    return docRef.id;
};

// 2. Obtener todos los productos
export const obtenerProductos = async (): Promise<Producto[]> => {
    const querySnapshot = await getDocs(collection(db, PRODUCTOS_COLLECTION));

    // Usamos 'docFirestore' para no chocar con la palabra clave 'doc' importada de firebase
    const productos = querySnapshot.docs.map((docFirestore) => ({
        id: docFirestore.id,
        ...docFirestore.data()
    })) as Producto[];

    return productos;
};