import { Link } from "react-router-dom";

export function Header() {



    return(
        <header className="width-100vh bg-color-1 text-color-1 top-0 absolute flex-center-between">
            <img className="width-4r" src="src\Components\Header\laly.png" alt="" />
            <div className="flex-center-center">
                <p>Carta</p>                
            </div>
        </header>
    );
}