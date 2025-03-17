import { FaSearch } from "react-icons/fa";
import './Home.css'
import React, { useState } from "react";

export function Home() {

    return(
        <>
        <div className="flex-center-center p-3 width-100 banner">
            <div className="search-container flex-center-center border-1">
                <input className="search" type="text" placeholder="Buscar Productos..." />
                <div className="color-1 button-search flex-center-center pointer bg-color-1 size-1">
                    <FaSearch />
                </div>
            </div>
        </div>
        <section className="promo-container">
            <p className="bold p-2 size-2">Carta</p>

            <article className="promo-card">
                <p className="bold">Promo 3</p>
                <div className="card-img">
                    <img className="card-img width-100" src="src\Components\home\jym2.jpg" alt="" />
                </div>
                <div>
                    <p></p>
                    <p></p>
                </div>
            </article>
        </section>
        </>
    )
}