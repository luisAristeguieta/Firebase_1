import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export interface NuevoProducto {
    nombre: string;
    precio: number;
    stock: number;
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