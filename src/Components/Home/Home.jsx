import { Header } from "../Header/Header";
import React, { useState } from "react";

export function Home() {
    const [pedido, setPedido] = useState({ sabor: "", tamaño: "", cantidad: 1 });

    const manejarCambio = (e) => {
        setPedido({ ...pedido, [e.target.name]: e.target.value });
    };

    const generarEnlaceWhatsApp = () => {
        const mensaje = `Hola! Quiero pedir ${pedido.cantidad} pizza(s) de ${pedido.sabor}, tamaño ${pedido.tamaño}.`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        return `https://wa.me/5491130896976?text=${mensajeCodificado}`;
    };

    return (
        <div>
            <Header />
            <div style={{ padding: "20px" }}>
                <h1>Haz tu pedido</h1>
                <form>
                    <label>Sabor:</label>
                    <input
                        type="text"
                        name="sabor"
                        value={pedido.sabor}
                        onChange={manejarCambio}
                        placeholder="Ejemplo: Napolitana"
                        style={{ marginBottom: "10px", display: "block" }}
                    />

                    <label>Tamaño:</label>
                    <select
                        name="tamaño"
                        value={pedido.tamaño}
                        onChange={manejarCambio}
                        style={{ marginBottom: "10px", display: "block" }}
                    >
                        <option value="">Selecciona un tamaño</option>
                        <option value="chica">Chica</option>
                        <option value="mediana">Mediana</option>
                        <option value="grande">Grande</option>
                    </select>

                    <label>Cantidad:</label>
                    <input
                        type="number"
                        name="cantidad"
                        value={pedido.cantidad}
                        onChange={manejarCambio}
                        min="1"
                        style={{ marginBottom: "10px", display: "block" }}
                    />

                    <a href={generarEnlaceWhatsApp()} target="_blank" rel="noopener noreferrer">
                        <button type="button" style={{ marginTop: "10px" }}>
                            Enviar Pedido
                        </button>
                    </a>
                </form>
            </div>
        </div>
    );
}
