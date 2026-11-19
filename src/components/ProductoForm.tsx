import { useState, type SyntheticEvent } from "react";
import { crearProducto } from "../services/productoService";

export function ProductoForm() {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");

    const guardarProducto = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        try {
            const productoId = await crearProducto(
                nombre,
                Number(precio),
                Number(stock)
            );

            console.log("Producto creado: ", productoId);

            setNombre("");
            setPrecio("");
            setStock("");
        } catch (error) {
            console.log("error :" + error);
        }
    };

    return (
        <div className="collage-wrapper">
            <div className="collage-shape-mint" aria-hidden="true" />
            <div className="collage-shape-periwinkle" aria-hidden="true" />

            <div className="product-card">
                <form className="product-form" onSubmit={guardarProducto}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nombre">
                            Nombre
                        </label>
                        <input
                            id="nombre"
                            className="form-input"
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label" htmlFor="precio">
                                Precio
                            </label>
                            <input
                                id="precio"
                                className="form-input"
                                type="number"
                                placeholder="precio"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="stock">
                                Stock
                            </label>
                            <input
                                id="stock"
                                className="form-input"
                                type="number"
                                placeholder="stock"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                            />
                        </div>
                    </div>

                    <button className="btn-pill-primary" type="submit">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
}